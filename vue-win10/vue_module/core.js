/**
 * 前缀、用于和其他使用 vue 定义的模块混合使用时的标志，默认将加到所有的模板之前
 * 例如，主模块当前为 win10
 * <win10></win10>
 * 如果 iPrefix,prefix = "win"
 * 则主模块变成 winwin10
 * <winwin10></winwin10>
 * 注意名称要符合 vue 规范
 * 例如
 * iPrefix = "myWin"
 * prefix = "my-win"
 * */

/**
 * 鉴于 shortcut 的不可理喻，后面应该创建一个 shortcut 构造函数
 * */

var prefix = "",
    iPrefix = "";

Vue.use(Vuex);

var win10_store = new Vuex.Store({
    state: {
        //屏幕上的功能图标
        shortcuts : [],
        //左下角的图标
        bottomLeftIcon : [],
        //右下角的隐藏图标
        htask : [],
        //消息
        messages : [],
        //程序图标
        menuIcon : [],
        //磁贴
        margent : [],
        //语言
        lang : {
            cur : "zh-cn",
            "default" : "zh-cn",
            "zh-cn" : {
                messageCenter : "消息中心",
                clearAll : "全部清除"
            },
            "en" : {
                messageCenter : "Messages",
                clearAll : "clear"
            }
        },
        //图标的大小
        iconSize : {
            width : 50,  //图标的长度
            height : 53  //图标的宽度
        },
        //磁贴宽度
        margentPanelWidth : 300,
        desktopBg : {}
    }
});

//例外的计算方法
var extMethod = {
    //通过获取到隐藏任务栏任务数量，计算任务栏的大小
    hideTaskSize : function (len) {
        var m = parseInt(Math.sqrt(len));
        if (!len) {
            return 0;
        } else if (m * m >= len) {
            return [m,m];
        } else if ((m * m + m) >= len) {
            return [m,m + 1];
        } else {
            return [m + 1,m + 1];
        }
    },
    getTime : function () {
        var myDate = new Date();
        var year=myDate.getFullYear();
        var month=myDate.getMonth()+1;
        var date=myDate.getDate();
        var hours=myDate.getHours();
        var mins=myDate.getMinutes();if (mins<10){mins='0'+mins}
        return hours+':'+mins+'<br/>'+year+'/'+month+'/'+date;
    }
};

//win10 整体 UI 组件
Vue.component(iPrefix + 'win10',{
    template :
        '<div id="win10" @click="hideAll">\
            <!-- 桌面部分 -->\
            <div @click="toggle(\'Null\')" class="desktop" :style="desktopBg">\
                <div id="win10-shortcuts">\
                    <' + prefix + 'shortcut  v-for="(shortcut,index) in shortcuts" :key="shortcut.id" v-bind:shortcut="shortcut" v-bind:index="index">\
                    </' + prefix + 'shortcut>\
                </div>\
            </div>\
            <!-- 开始菜单 -->\
            <div ref="startMenu" :style="startMenuStyle.main" id="win10-menu">\
                <div v-show="startMenuStyle.mobile" @click.prevent="toggleMenuMagent" style="width: 30px;height:calc(100% - 20px);float:left;background: #7b7b7b7d;color:white;text-align: center;padding-top:1em;text-shadow: 1px 1px 1px white;">{{startMenuStyle.text}}</div>\
                <!-- 程序菜单 -->\
                <div ref="sMenu" :style="startMenuStyle.menu" class="list win10-menu-hidden animated animated-slideOutLeft">\
                    <' + prefix + 'menuIcon v-for="(menu,index) in menuIcon" v-bind:menu="menu" v-bind:index="index" :key="index">\
                    </' + prefix + 'menuIcon>\
                </div>\
                <!-- 磁贴部分 -->\
                <div ref="sMargent" :style="startMenuStyle.margent" class="blocks">\
                    <' + prefix + 'margent v-for="(margent,index) in margent" :top="margentTop[index]" :margent="margent" :index="index" :key="index" @over="setMargentAttr">\
                    </' + prefix + 'margent>\
                </div>\
            </div>\
            <!-- 消息中心 -->\
            <div ref="command" id="win10_command_center">\
                <div class="title">\
                    <h4 style="float: left">{{lang.messageCenter}} </h4>\
                    <span @click="removeMessage(-1)" style="color: grey;text-align: right;font-size: 12px;float: right;margin-top: 40px;margin-right: 24px;transition: color 0.5s;">{{lang.clearAll}}</span>\
                </div>\
                <div class="msgs">\
                    <' + prefix + 'message v-for="(message,ind) in messages" :key="ind" :ind="ind" :message="message" @removeMessage="removeMessage"></' + prefix + 'message>\
                </div>\
            </div>\
            <!-- 任务栏 -->\
            <div id="win10_task_bar">\
                <!-- 开始按钮和默认软件 -->\
                <div id="win10_btn_group_left" class="btn_group">\
                    <!-- 开始按钮 -->\
                    <div @click="toggle(\'Menu\')" class="btn"><span class="fa fa-windows"></span></div>\
                    <!-- 其他按钮 -->\
                    <' + prefix + 'bottomIcon  v-for="(icon,index) in bottomLeftIcon" :key="icon.id" v-bind:icon="icon" v-bind:index="index">\
                    </' + prefix + 'bottomIcon>\
                </div>\
                <!-- 打开软件部分 -->\
                <div id="win10_btn_group_middle" class="btn_group"></div>\
                <!-- 时间和消息 -->\
                <div id="win10_btn_group_right" class="btn_group">\
                    <!-- 显示隐藏任务 -->\
                    <div v-if="hTaskShowIcon" @click.stop="showHTaskContent" class="btn"><span class="fa fa-chevron-up"></span></div>\
                    <!-- 时间控件 -->\
                    <div ref="time" class="btn" style="line-height: 20px;"></div>\
                    <!-- 消息控件 -->\
                    <div @click="toggle(\'Command\')" class="btn"><span id="win10-msg-nof" class="fa fa-comment-o"></span></div>\
                    <!-- 显示桌面控件 -->\
                    <div class="btn" id="win10_btn_show_desktop"></div>\
                </div>\
            </div>\
            <!-- 隐藏的任务栏 -->\
            <div id="win10_hide_task_ibas" class="blocks" v-show="hTaskShowContent" \
                style="bottom: 40px;position: fixed;right: 120px;background: rgba(32, 37, 41, 0.83);padding: 6px;height: 60px;width: 60px;z-index: 10000;">\
                <' + prefix + 'htask v-for="(htask,index) in htask" :key="index" :htask="htask" :index="index">\
                </' + prefix + 'htask>\
            </div>\
        </div>',
    data : function () {
        return {
            //任务栏
            bottom_middle_bar : null,
            //隐藏的任务栏部分
            hidden_task : null,
            //为 false 表示没有隐藏部件
            hTaskShowContent : false,
            //为 false 时表示没有隐藏任务（并抹去图标）
            hTaskShowIcon : false,
            clickTarget : null,
            //记录各种显示的弹出层信息
            showMsg : {
                // false 表示隐藏，true 表示显示
                startMenu : true,
                command : true,
                // 底部任务栏高度
                taskBarHeight : 40
            },
            screen : {
                x : 0,  //x 轴方向可以放置多少个图标
                y : 0  //y 轴方向可以放置多少个图标
            },
            shortcutRender : false,
            //消息中心的属性
            commandCenter : {
                //当前的宽度
                width : 350,
                //最小的宽度(当小于该值时，宽度为 100% )
                minWidth : 350
            },
            //开始菜单的样式
            startMenuStyle : {
                //当前显示的内容
                text : "开始菜单",
                mobile : false,
                main : {},
                menu : {},
                margent : {}
            }
        }
    },
    computed : {
        margent : function () {
            return win10_store.state.margent;
        },
        menuIcon : function () {
            return win10_store.state.menuIcon;
        },
        shortcuts : function () {
            // //定义一个初始坐标
            // var scs = [];
            // for (var i = 0;i < win10_store.state.shortcuts.length;i++) {
            //     var sc = win10_store.state.shortcuts[i];
            //     sc.x = 0;
            //     sc.y = 0;
            //     scs.push(sc);
            // }
            //return scs;
            return win10_store.state.shortcuts;
        },
        bottomLeftIcon : function () {
            return win10_store.state.bottomLeftIcon;
        },
        htask : function () {
            return win10_store.state.htask;
        },
        //当前语言
        curLang : function () {
            return win10_store.state.lang.cur;
        },
        //语言
        lang : function () {
            return (win10_store.state.lang[this.curLang] || win10_store.state.lang[win10_store.state.lang["default"]]);
        },
        //磁贴属性
        margentTop : function () {
            var top = [];
            for (var i = 0;i < win10_store.state.margent.length;i++) {
                top.push(43);
            }
            return top;
        },
        //最小的屏幕大小
        minScreenWidth : function () {
            return 280 + win10_store.state.margentPanelWidth;
        },
        //消息组
        messages : function () {
            return win10_store.state.messages;
        },
        desktopBg : function () {
            return win10_store.state.desktopBg;
        }
    },
    watch : {
        bottomLeftIcon : function () {
            this.bottom_middle_bar[0].style.width = "calc(100% - " + (184 + this.bottomLeftIcon.length * 48 + (this.hTaskShowIcon ? 32 : 0)) + "px)";
        },
        htask : function () {
            var hidden_task_size = extMethod.hideTaskSize(this.htask.length);
            if (hidden_task_size) {
                this.hTaskShowIcon = true;
                this.hidden_task.css({
                    height : (30 * hidden_task_size[0]) + "px",
                    width : (30 * hidden_task_size[1]) + "px"
                });
                this.bottom_middle_bar[0].style.width = "calc(100% - " + (184 + this.bottomLeftIcon.length * 48 + 32) + "px)";
            } else {
                this.hTaskShowIcon = false;
                this.hTaskShowContent = false;
                this.bottom_middle_bar[0].style.width = "calc(100% - " + (184 + this.bottomLeftIcon.length * 48) + "px)";
            }
        },
        curLang : function () {
            Win10._lang = this.curLang;
        },
        screen : function (newV,oldV) {
            if (oldV.y == newV.y && this.shortcutRender) {
                //todo 这里可能涉及到如果一个面无法放入所有的图标，是否考虑使用两个面板进行放置
                return false;
            } else {
                this.shortcutRender = true;
                for (var i = 0;i < this.shortcuts.length;i++) {
                    this.shortcuts[i].x = parseInt(i / newV.y);
                    this.shortcuts[i].y = i % newV.y;
                }
            }
        },
        shortcuts : function () {
            this.shortcutRender = false;
            this.windowResize();
        }
    },
    mounted : function () {
        this.hidden_task = $("#win10_hide_task_ibas");
        var hidden_task_size = extMethod.hideTaskSize(this.htask.length);
        if (hidden_task_size) {
            console.log(this.hidden_task);
            this.hTaskShowIcon = true;
            this.hidden_task.css({
                height : (30 * hidden_task_size[0]) + "px",
                width : (30 * hidden_task_size[1]) + "px"
            });
        } else {
            this.hTaskShowIcon = false;
            this.hTaskShowContent = false;
        }
        this.bottom_middle_bar = $("#win10_btn_group_middle");
        this.bottom_middle_bar[0].style.width = "calc(100% - " + (184 + this.bottomLeftIcon.length * 48 + (hidden_task_size ? 32 : 0)) + "px)";
        this.toggleMenu();
        this.toggleCommand();
        window.onresize = this.windowResize.bind(this);
        this.windowResize();
        setInterval(function () {
            this.$refs.time.innerHTML = extMethod.getTime();
        }.bind(this),1000);
    },
    methods : {
        //屏幕大小改变事件
        windowResize : function () {
            //重新计算一个屏幕可以如何放置图标
            this.screen = {
                x : parseInt(document.body.clientWidth / win10_store.state.iconSize.width),
                y : parseInt((document.body.clientHeight - 40) / win10_store.state.iconSize.height)
            };
            //重新调整消息中心的宽度
            this.commandCenter = Object.assign(this.commandCenter,{width : document.body.clientWidth});
            if (this.commandCenter.width < this.commandCenter.minWidth) {} else {
                this.commandCenter.width = this.commandCenter.minWidth;
            }
            this.$refs.command.style.width = this.commandCenter.width + "px";
            this.toggleCommand("hide");
            this.minScreen(document.body.clientWidth);
        },
        //小屏幕事件
        minScreen : function (sw) {
            if (sw < this.minScreenWidth) {
                this.startMenuStyle.mobile = true;
                //将开始菜单全屏化
                this.startMenuStyle.main = {
                    width : sw + "px",
                    height : "calc(100% - 40px)",
                    overflow : "hidden"
                };
                this.startMenuStyle.menu = {
                    display : "block",
                    width : (sw - 70) + "px"
                };
                this.startMenuStyle.margent = {
                    "padding-left" : "5px",
                    display : "none",
                    width : (sw - 47) + "px"
                };
                win10_store.state.iconSize = {
                    width : (sw - 60) / 6,  //图标的长度
                    height : (sw - 56) / 6 //图标的宽度
                };
            } else {
                this.startMenuStyle.main = {};
                this.startMenuStyle.menu = {
                    displau : "block"
                };
                this.startMenuStyle.margent = {
                    displau : "block",
                    width : "310px"
                };
                this.startMenuStyle.mobile = false;
                win10_store.state.iconSize = {
                    width : 50,  //图标的长度
                    height : 53  //图标的宽度
                };
            }
        },
        showHTaskContent : function () {
            this.hTaskShowContent = true;
        },
        hideAll : function () {
            this.hTaskShowContent = false;
        },
        //显示隐藏开始菜单
        toggleMenu : function (tar) {
            if (tar == "show") {
                this.showMsg.startMenu = false;
            } else if (tar == "hide") {
                this.showMsg.startMenu = true;
            }
            if (this.showMsg.startMenu) {
                this.$refs.startMenu.style.bottom = "-100%";
            } else {
                this.$refs.startMenu.style.bottom = "41px";
            }
            this.showMsg.startMenu = !this.showMsg.startMenu;
        },
        //显示隐藏消息框
        toggleCommand : function (tar) {
            if (tar == "show") {
                this.showMsg.command = false;
            } else if (tar == "hide") {
                this.showMsg.command = true;
            }
            if (this.showMsg.command) {
                this.$refs.command.style.right = "-" + this.commandCenter.width + "px";
            } else {
                this.$refs.command.style.right = "0px";
            }
            this.showMsg.command = !this.showMsg.command;
        },
        //该方法用于关闭所有的弹出层
        //当屏幕太小时需要切换开始菜单和磁贴
        toggleMenuMagent : function () {
            var b = this.startMenuStyle.menu.display;
            this.startMenuStyle.menu.display = this.startMenuStyle.margent.display;
            this.startMenuStyle.margent.display = b;
        },
        toggleNull : function () {},
        toggle : function (tar) {
            var toggleMethod = [
                "Menu",
                "Command"
            ];
            if (tar && this["toggle" + tar]) {
                for (var i = 0;i < toggleMethod.length;i++) {
                    if (toggleMethod[i] == tar) {
                        this["toggle" + tar]();
                    } else {
                        this["toggle" + toggleMethod[i]]("hide");
                    }
                }
            }
        },
        //关闭消息窗体
        removeMessage : function (ind) {
            if (ind >= 0) {
                this.messages[ind].msgClass = "msg animated slideOutRight";
                setTimeout(function () {
                    this.messages.splice(ind,1);
                }.bind(this),500);
            } else {
                for (var i = 0;i < this.messages.length;i++) {
                    this.messages[i].msgClass = "msg animated slideOutRight";
                }
                setTimeout(function () {
                    this.messages.splice(0,this.messages.length);
                }.bind(this),500);
            }
        },
        //设置磁贴属性
        setMargentAttr : function (ind,obj) {
            if (this.margent.length > ind) {
                this.margentTop[ind + 1] = obj.top;
            }
        }
    }
});

//桌面图标组件
Vue.component(iPrefix + "shortcut",{
    template :
        '<div :style="shortcutStyle" class="shortcut" :index="index" @click="shortcut.click">\
            <img class="icon" :src="shortcut.img"/>\
            <div class="title">{{shortcut.title}}</div>\
        </div>',
    props : ['shortcut','index'],
    computed : {
        shortcutStyle : function () {
            return {
                top : (this.shortcut.y * win10_store.state.iconSize.height) + "px",
                left : (this.shortcut.x * win10_store.state.iconSize.width) + "px"
            }
        }
    }
});

//底部组件组件
Vue.component(iPrefix + "bottomIcon",{
    template :
        '<div class="btn" :index="index" :id="icon.id" @click="icon.click">\
            <span :class="icon.icon"></span>\
        </div>',
    props : ['icon','index']
});

//开始菜单组件
Vue.component(iPrefix + "menuIcon",{
    template :
        '<div v-if="menu.child" :index="index">\
            <div class="item has-sub-down" @click="toggle">\
                <i :class="menu.icon"></i><span>{{menu.title}}</span>\
            </div>\
            <div :style="childStyle">\
                <div v-for="(menu_,index) in menu.child" class="sub-item" @click="menu_.click">\
                    <i :class="menu_.icon"></i>{{menu_.title}}\
                </div>\
            </div>\
        </div>\
        <div v-else :index="index">\
            <div class="item" @click="menu.click">\
                <i :class="menu.icon"></i><span>{{menu.title}}</span>\
            </div>\
        </div>',
    props : ['menu','index'],
    data : function () {
        return {
            expand : false,
            childStyle : {
                height : "0px",
                overflow : "hidden",
                transition : "height 0.3s"
            }
        };
    },
    computed : {
        maxHeight : function () {
            if (this.menu.child && this.menu.child.length) {
                return this.menu.child.length * 40;
            } else {
                return 0;
            }
        }
    },
    methods : {
        toggle : function () {
            if (this.expand) {
                this.childStyle.height = "0px";
            } else {
                this.childStyle.height = this.maxHeight + "px";
            }
            this.expand = !this.expand;
        }
    }
});

//开始磁贴组件
Vue.component(iPrefix + "margent",{
    template :
        '<div class="menu_group" :index="index">\
            <div class="title">{{margent.title}}</div>\
            <div ref="margentDiv" v-for="(margent_,index_) in margent.margents" :key="index_" \
                @click="margent_.click"\
                :loc="margent_.loc" \
                :size="margent_.size" class="block" v-html="margent_.html"></div>\
        </div>',
    props : ['margent','index','top'],
    computed : {
        iconSize : function () {
            return win10_store.state.iconSize;
        }
    },
    methods : {
        render : function () {
            var len = this.margent.margents.length,
                maxTop = this.top,
                l = this.iconSize.width;
            for (var i = 0;i < len;i++) {
                var size = this.margent.margents[i].size.split(','),
                    loc = this.margent.margents[i].loc.split(','),
                    top = ((+loc[1] - 1) * l) + 43;
                this.$refs.margentDiv[i].style.width = ((+size[0]) * l) + "px";
                this.$refs.margentDiv[i].style.height = ((+size[1]) * l) + "px";
                this.$refs.margentDiv[i].style.left = ((+loc[0] - 1) * l) + "px";
                this.$refs.margentDiv[i].style.top = top + "px";
                maxTop = maxTop >= (top + l) ? maxTop : (top + l);
            }
            this.$emit("over",this.index,{
                top : maxTop
            });
        }
    },
    mounted : function () {
        this.render();
    },
    watch : {
        top : function (newV) {
            this.$el.style.top = newV + "px";
            this.render();
        },
        iconSize : function () {
            this.render();
        }
    }
});

//任务组件
Vue.component(iPrefix + "htask",{
    template :
        '<div :index="index" id="" class="btn" style="width: 30px;height: 30px;text-align: center;float: left;" @click="htask.click">\
            <span :class="htask.icon" style="font-size: 25px;"></span>\
        </div>',
    props : ['index','htask']
});

//消息组件
Vue.component(iPrefix + "message",{
    template :
        '<div :class="message.msgClass || \'msg\'">' +
            '<div class="title" v-html="message.title"></div>'+
            '<div class="content" v-html="message.content"></div>' +
            '<span class="btn_close_msg fa fa-close" @click="close"></span>' +
        '</div>',
    props : ['message','ind'],
    methods : {
        close : function () {
            this.$emit("removeMessage",this.ind);
        }
    }
});