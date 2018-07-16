//import { build, buildNames } from "./buildTemplate";
const util = require('./buildTemplate').util

// util.build(util.buildNames({
//     Button: {
//         name: '按钮',
//         props: [
//             '"type": buildYduiProps([ "primary", " danger", " warning", " hollow", " disabled" ], "primary", "string", "按钮类型")',
//             '"size": buildYduiProps([ "small", " large" ], "small", "string", "按钮大小")',
//             '"bgcolor": buildYduiProps(null, null, "string && 常规颜色值", "按钮背景颜色")',
//             '"color": buildYduiProps(null, null, "string && 常规颜色值", "按钮字体颜色")',
//             '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")',
//             '"shape": buildYduiProps([ "square", " circle" ], "square", "string", "形状（分为直角square和大圆角circle）")',
//             '"action-type": buildYduiProps([ "button", " submit", " reset" ], "button", "string", "渲染后 <button> 的类型")'
//         ]
//     }
// }), 'Button');
// util.build(util.buildNames({
//     CellGroup: {
//         name: '表单',
//         props: [
//             '"title": buildYduiProps(null, null, "string", "每组列表的标题")'
//         ]
//     },
//     CellItem: {
//         name: '表单项',
//         props: [
//             '"type": buildYduiProps([ "link", "a", "label", "div", "checkbx", "radio" ], "div", "string", "列表的类型，type=\'link\'将会解析为路由，type=\'a\'则解析为普通<a>")',
//             '"arrow": buildYduiProps(null, "false", "boolean", "是否带右向箭头")',
//             '"href": buildYduiProps(null, null, "string || object", "跳转链接，只在type=\'link\'时生效")'
//         ],
//         slot: {
//             'icon': '列表的图标',
//             'left': '列表左侧内容',
//             'right': '列表右侧内容'
//         }
//     }
// }), 'Cell');
// util.build(util.buildNames({
//     Icons: {
//         name: '图标',
//         props: [
//             '"name": buildYduiProps([ "见下表" ], null, "string", "图标名称[必填]")',
//             '"color": buildYduiProps(null, "#333", "string && 常规颜色值", "图标颜色")',
//             '"size": buildYduiProps(null, ".6rem（30px）", "string && (px或rem)", "图标大小")',
//             '"custom": buildYduiProps(null, "false", "boolean", "是否为自定义图标")'
//         ]
//     }
// }), 'Icons');
// util.build(util.buildNames({
//     ListTheme: {
//         name: '列表',
//         props: [
//             '"theme": buildYduiProps([ "1", " 2", " 3", " 4", " 5" ], "3", "string || number", "列表主题样式")'
//         ]
//     },
//     ListItem: {
//         name: '列表项',
//         props: [
//             '"type": buildYduiProps([ "link", "a", "div" ], "a", "string", "列表的类型，type=\'link\'的href将会解析为路由，type=\'a\'是普通<a>")',
//             '"href": buildYduiProps(null, null, "string || object", "跳转链接")'
//         ],
//         slot: {
//             'img': '列表的主图',
//             'title': '列表的标题',
//             'other': '列表的其他信息；采用flex布局，使用 justify-content: space-between;将内容分为左右结构'
//         }
//     },
//     ListOther: {
//         name: '列表其他'
//     }
// }), 'List');
util.build(util.buildNames({
    Badge: {
        name: '角标',
        props: [
            '"type": buildYduiProps([ "primary", " danger", " warning", " hollow" ], """", "string", "角标类型[默认为灰底白字]")',
            '"shape": buildYduiProps([ "circle", " square" ], "circle", "string", "角标形状（圆形和方形）")',
            '"color": buildYduiProps(null, null, "string && 常规颜色值", "角标颜色")',
            '"bgcolor": buildYduiProps(null, null, "string && 常规颜色值", "角标背景色")'
        ]
    }
}), 'Badge');
util.build(util.buildNames({
    GridsGroup: {
        name: '网格',
        props: [
            '"rows": buildYduiProps([ "2", " 3", " 4", " 5" ], "4", "number", "每行显示列数")',
            '"title": buildYduiProps(null, null, "string", "每组表格标题")',
            '"item-height": buildYduiProps(null, "0", "string && (px或rem)", "设置 yd-grids-item 的高度（防止页面内容高度不一致时导致页面错乱），默认0为不限制")'
        ]
    },
    GridsItem: {
        name: '网格项',
        props: [
            '"type": buildYduiProps([ "link", " a" ], "link", "string", "渲染后dom的类型，type=\'link\'将会解析为路由，type=\'a\'则解析为普通<a>")',
            '"link": buildYduiProps(null, null, "string || object", "跳转url")'
        ],
        slot: {
            'icon': '图标内容',
            'text': '文字内容',
            'else': '其他内容，该slot没有样式限制'
        }
    },
}), 'Grids');
util.build(util.buildNames({
    NavBar: {
        name: '头部导航',
        props: [
            '"title": buildYduiProps(null, null, "string", "导航标题")',
            '"fixed": buildYduiProps(null, "false", "boolean", "是否fixed定位")',
            '"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "背景颜色")',
            '"height": buildYduiProps(null, "1rem（50px）", "string", "高度")',
            '"fontsize": buildYduiProps(null, ".4rem（20px）", "string", "中间标题字号")',
            '"color": buildYduiProps(null, "#5c5c5c", "string && 常规颜色值", "按钮字体颜色")'
        ],
        slot: {
            'left': '导航左侧内容',
            'center': '导航中间内容',
            'right': '导航右侧内容'
        }
    },
    NavBarBackIcon: {
        name: '头部导航-回退',
        props: [
            '"color": buildYduiProps(null, "#5c5c5c", "string", "图标颜色")'
        ]
    },
    NavBarNextIcon: {
        name: '头部导航-往前',
        props: [
            '"color": buildYduiProps(null, "#5c5c5c", "string", "图标颜色")'
        ]
    },
}), 'Navbar');
util.build(util.buildNames({
    TabBar: {
        name: '底部导航',
        props: [
            '"fixed": buildYduiProps(null, "false", "boolean", "是否fixed定位")',
            '"active-color": buildYduiProps(null, "#09bb07", "string", "选中颜色 && 常规颜色值")',
            '"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "背景颜色")',
            '"fontsize": buildYduiProps(null, ".4rem（20px）", "string", "标题字体大小")',
            '"color": buildYduiProps(null, "#5c5c5c", "string && 常规颜色值", "标题字体颜色")',
            '"exact": buildYduiProps(null, "true", "boolean", "是否已开启 router-link 的严格模式")',
            '"active-class": buildYduiProps(null, "router-link-active", "string", "router-link 激活时的class名")'
        ]
    },
    TabBarItem: {
        name: '底部导航项',
        props: [
            '"link": buildYduiProps(null, null, "string", "导航链接")',
            '"type": buildYduiProps([ "link", "a" ], "link", "string", "链接的类型，type=\'link\'的link将会解析为路由，type=\'a\'是普通<a>")',
            '"tag": buildYduiProps(null, null, "string", "router-link的tag属性，type=\'link\'时生效")',
            '"title": buildYduiProps(null, null, "string", "导航标题")',
            '"active": buildYduiProps(null, "false", "boolean", "是否激活当前选项卡")',
            '"dot": buildYduiProps(null, "false", "boolean", "是否添加小红点")'
        ],
        slot: {
            '-': '内容',
            'badge': '添加角标'
        }
    },
}), 'Tabbar');
util.build(util.buildNames({
    Layout: {
        name: '布局',
        props: [
            '"link": buildYduiProps(null, null, "string", "yd-navbar的跳转链接")',
            '"title": buildYduiProps(null, null, "string", "yd-navbar的标题")',
            '"show-navbar": buildYduiProps(null, "true", "boolean", "是否显示yd-navbar")'
        ],
        slot: {
            'navbar': '页头内容',
            'top': '上部内容',
            '-': '主体内容',
            'bottom': '下部内容',
            'tabbar': '页尾内容'
        }
    }
}), 'Layout');
util.build(util.buildNames({
    TextArea: {
        name: '多行文本框',
        props: [
            '"maxlength": buildYduiProps(null, null, "number", "最大输入字数")',
            '"placeholder": buildYduiProps(null, null, "string", "初始提示文字")',
            '"readonly": buildYduiProps(null, "false", "boolean", "是否只读")',
            '"show-counter": buildYduiProps(null, "true", "boolean", "是否显示计数器")',
            '"callback": buildYduiProps(null, null, "function", "更改后调用的方法")'
        ]
    }
}), 'Textarea');
util.build(util.buildNames({
    Input: {
        name: '输入框',
        props: [
            '"name": buildYduiProps(null, null, "string", "表单name")',
            '"type": buildYduiProps([ "text", " password", " email", " number", " tel", " datetime-local", " date", " time" ], "text", "string", "文本框类型")',
            '"placeholder": buildYduiProps(null, null, "string", "描述输入字段")',
            '"readonly": buildYduiProps(null, "false", "boolean", "是否只读")',
            '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")',
            '"regex": buildYduiProps(null, null, "string", "验证验证，可为内置正则（email/mobile/bankcard）或自定义正则")',
            '"autocomplete": buildYduiProps(null, "off", "string", "自动完成")',
            '"show-clear-icon": buildYduiProps(null, "true", "boolean", "是否显示清空内容图标")',
            '"show-error-icon": buildYduiProps(null, "true", "boolean", "是否显示错误图标")',
            '"show-success-icon": buildYduiProps(null, "true", "boolean", "是否显示正确图标")',
            '"show-required-icon": buildYduiProps(null, "true", "boolean", "是否显示必填提示图标")',
            '"required": buildYduiProps(null, "false", "boolean", "是否必填")',
            '"max": buildYduiProps(null, null, "number", "最大输入字符")',
            '"min": buildYduiProps(null, null, "number", "最少输入字符")',
            '"on-focus": buildYduiProps(null, null, "function", "进入焦点事件")',
            '"on-blur": buildYduiProps(null, null, "function", "离开焦点事件")'
        ]
    }
}), 'Input');
util.build(util.buildNames({
    FlexBox: {
        name: 'flex 布局',
        props: [
            '"direction": buildYduiProps([ "horizontal", " vertical" ], "horizontal", "string", "布局方向（水平和垂直）")'
        ]
    },
    FlexBoxItem: {
        name: 'flex 布局项',
        props: [
            '"align": buildYduiProps([ "top", " center", " bottom" ], "center", "string", "垂直对齐方式")'
        ]
    },
}), 'FlexBox');
util.build(util.buildNames({
    Switch: {
        name: '开关',
        props: [
            '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")',
            '"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "颜色")',
            '"true-value": buildYduiProps(null, "true", "string, number, boolean", "选中时的值")',
            '"false-value": buildYduiProps(null, "false", "string, number, boolean", "选中时的值")'
        ]
    }
}), 'Switch');
util.build(util.buildNames({
    Radio: {
        name: '单选',
        props: [
            '"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色")',
            '"size": buildYduiProps(null, "20", "number", "图标大小，默认为px")'
        ]
    },
    RadioGroup: {
        name: '单选组',
        props: [
            '"val": buildYduiProps(null, null, "string || number", "值")',
            '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")'
        ]
    },
}), 'Radio');
util.build(util.buildNames({
    CheckBox: {
        name: '多选',
        props: [
            '"val": buildYduiProps(null, null, "string || number || boolean", "值")',
            '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")',
            '"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色【单个使用才会生效】")',
            '"size": buildYduiProps(null, "20", "number", "图标大小【单个使用才会生效】")',
            '"shape": buildYduiProps([ "square", " circle" ], "square", "string", "图标形状，默认方形")',
            '"change": buildYduiProps(null, null, "function", "更改调用方法")',
            '"true-value": buildYduiProps(null, "true", "string, number, boolean", "选中时的值")',
            '"false-value": buildYduiProps(null, "false", "string, number, boolean", "选中时的值")'
        ],
        slot: {
        }
    },
    CheckBoxGroup: {
        name: '多选组',
        props: [
            '"color": buildYduiProps(null, "#4cd864", "string && 常规颜色值", "图标颜色")',
            '"size": buildYduiProps(null, "20", "number", "图标大小，默认为px")'
        ]
    }
}), 'CheckBox');
util.build(util.buildNames({
    TimeLine: {
        name: '时间轴',
        props: []
    },
    TimeLineItem: {
        name: '时间轴项',
        props: [],
        slot: {
            '-': '内容',
            'icon': '自定义图标'
        }
    }
}), 'TimeLine');
util.build(util.buildNames({
    Step: {
        name: '步骤条',
        props: [
            '"theme": buildYduiProps([ "1", " 2" ], "1", "number", "样式主题")',
            '"current": buildYduiProps(null, null, "number", "默认选中的项")',
            '"current-color": buildYduiProps(null, "#0db78a", "string && 常规颜色值", "选中项的高亮颜色")'
        ]
    },
    StepItem: {
        name: '步骤条项',
        props: [],
        slot: {
            'top': '步骤条上方的内容',
            'bottom': '步骤条下方的内容'
        }
    }
}), 'Step');
util.build(util.buildNames({
    Preview: {
        name: '表单预览',
        props: [
            '"buttons": buildYduiProps(null, null, "array", "按钮们：\
                [{\
                label: string, //文字\
                link: [string, object], //跳转链接，当为object时，为router-link\
                color: string, //文字颜色\
                click: function, //点击回调函数\
            }]")'
        ]
    },
    PreviewHeader: {
        name: '表单预览头部',
        props: [],
        slot: {'left': '左侧内容',
            'right': '右侧内容'
        }
    },
    PreviewItem: {
        name: '表单预览内容',
        props: [],
        slot: {
            'left': '左侧内容',
            'right': '右侧内容'
        }
    }
}), 'Preview');
util.build(util.buildNames({
    Slider: {
        name: '图片轮播',
        props: [
            '"index": buildYduiProps(null, "1", "number", "初始打开第n张图片")',
            '"speed": buildYduiProps(null, "300", "number", "切换速度（单位毫秒）")',
            '"autoplay": buildYduiProps(null, "0", "number", "自动播放时间（单位毫秒）")',
            '"direction": buildYduiProps([ "horizontal", "vertical" ], "horizontal", "string", "切换方向")',
            '"show-pagination": buildYduiProps(null, "true", "boolean", "是否显示分页标记")',
            '"callback": buildYduiProps(null, null, "function", "切换后回调（返回当前页码）")',
            '"loop": buildYduiProps(null, "true", "boolean", "是否循环")'
        ]
    },
    SliderItem: {
        name: '图片轮播项',
        props: []
    }
}), 'Slider');
util.build(util.buildNames({
    ProgressBar: {
        name: '进度条',
        props: [
            '"type": buildYduiProps([ "circle", "line" ], "circle", "string", "进度条类型")',
            '"progress": buildYduiProps(null, "0", "float", "进度所占百分比（取值范围0-1）")',
            '"fill-color": buildYduiProps(null, null, "string && 常规颜色值", "进度条背景颜色，线形进度条无效")',
            '"stroke-width": buildYduiProps(null, null, "number", "进度条描边厚度，取值为正数，svg中stroke-width属性值")',
            '"stroke-color": buildYduiProps(null, null, "string && 常规颜色值", "进度条颜色")',
            '"trail-width": buildYduiProps(null, null, "number", "高亮进度条描边厚度，不填则取stroke-width的值")',
            '"trail-color": buildYduiProps(null, null, "string && 常规颜色值", "高亮进度条颜色")'
        ]
    }
}), 'ProgressBar');
util.build(util.buildNames({
    ActionSheet: {
        name: '上拉菜单',
        props: [
            '"items": buildYduiProps(null, null, "array", "菜单项数组：\
                [{\
                label: string, //菜单项的文本\
                callback: function, //点击该菜单项的回调函数\
                stay: boolean, //是否关闭 actionsheet（默认false，直接关闭）\
            }]")',
            '"cancel": buildYduiProps(null, null, "string", "取消按钮的文本，为空则不显示取消按钮")',
            '"masker-opacity（v1.2.1新增）": buildYduiProps(null, ".5", "number", "遮罩层透明度")'
        ],
        slot: {
        }
    }
}), 'ActionSheet');
util.build(util.buildNames({
    Tab: {
        name: '选项卡',
        props: [
            '"active-color": buildYduiProps(null, "#ff5e53", "string && 常规颜色值", "选中时高亮的颜色值")',
            '"callback": buildYduiProps(null, null, "function", "切换时调用的函数（返回当前label和当前tabkey）")',
            '"item-click（v1.2.1新增）": buildYduiProps(null, null, "function", "点击选项卡时触发的方法")',
            '"prevent-default（v1.2.1新增）": buildYduiProps(null, "true", "boolean", "是否自动切换")',
            '"horizontal-scroll（v1.2.1新增）": buildYduiProps(null, "false", "boolean", "是否可横向滚动")'
        ],
    },
    TabPanel: {
        name: '选项卡内容',
        props: [
            '"label": buildYduiProps(null, null, "string", "选项卡标题")',
            '"active": buildYduiProps(null, null, "boolean", "是否激活当前选项卡")',
            '"tabkey": buildYduiProps(null, null, "string || number", "选项卡的值（多用于区分各个选项卡），不指定将返回当前索引")'
        ]
    },
}), 'Tab');
util.build(util.buildNames({
    ScrollTab: {
        name: '滚动选项卡',
        props: [
            '"index": buildYduiProps(null, "0", "number", "高亮索引")',
            '"callback": buildYduiProps(null, null, "function", "切换回调函数（返回当前索引）")'
        ]
    },
    ScrollTabPanel: {
        name: '滚动选项卡内容',
        props: [
            '"label": buildYduiProps(null, null, "string", "选项卡标题")',
            '"icon": buildYduiProps(null, null, "string", "图标（只支持图标样式名）")',
            '"active": buildYduiProps(null, null, "boolean", "是否激活当前选项卡（v1.1.8已废除，使用 yd-scrolltab 的 index 替代）")'
        ]
    },
}), 'ScrollTab');
util.build(util.buildNames({
    KeyBoard: {
        name: '安全键盘',
        props: [
            '"title": buildYduiProps(null, "ydui安全键盘", "string", "键盘提示标题")',
            '"cancel-text": buildYduiProps(null, "取消", "string", "取消文字")',
            '"input-text": buildYduiProps(null, "输入数字密码", "string", "输入提示标题")',
            '"disorder": buildYduiProps(null, "false", "boolean", "是否打乱键盘顺序")',
            '"callback": buildYduiProps(null, null, "function", "6位密码输入完后调用的方法")',
            '"trigger-close": buildYduiProps(null, "true", "boolean", "是否点击遮罩关闭键盘")',
            '"masker-opacity（v1.2.1新增）": buildYduiProps(null, ".5", "number", "遮罩层透明度")'
        ]
    }
}), 'KeyBoard');
util.build(util.buildNames({
    Spinner: {
        name: '数字加减',
        props: [
            '"unit": buildYduiProps(null, "1", "number", "累计值")',
            '"max": buildYduiProps(null, null, "number", "最大值")',
            '"min": buildYduiProps(null, "累计值", "number", "最小值（不设置最小值，则默认为累计值）")',
            '"readonly": buildYduiProps(null, "false", "boolean", "是否只读")',
            '"longpress": buildYduiProps(null, "true", "boolean", "是否支持长按快速加减")',
            '"width": buildYduiProps(null, "2rem（100px）", "string && (px或rem)", "总宽度")',
            '"height": buildYduiProps(null, ".6rem（30px）", "string && (px或rem)", "总高度")'
        ]
    }
}), 'Spinner');
util.build(util.buildNames({
    SendCode: {
        name: '发送验证码',
        props: [
            '"second": buildYduiProps(null, "60", "number", "倒计时时长（秒）")',
            '"init-str": buildYduiProps(null, "获取短信验证码", "string", "初始化按钮显示文本")',
            '"run-str": buildYduiProps(null, "{%s}秒后重新获取", "string", "运行时显示文本")',
            '"reset-str": buildYduiProps(null, "重新获取验证码", "string", "运行结束后显示文本")',
            '"storage-key": buildYduiProps(null, null, "string", "储存倒计时剩余时间sessionstorage的键值，设置不为空后，刷新页面倒计时将继续")'
        ]
    }
}), 'SendCode');
util.build(util.buildNames({
    CitySelect: {
        name: '省市县级联',
        props: [
            '"provance": buildYduiProps(null, null, "string", "初始【省】的值")',
            '"city": buildYduiProps(null, null, "string", "初始【市】的值")',
            '"area": buildYduiProps(null, null, "string", "初始【县】的值")',
            '"title": buildYduiProps(null, "所在地区", "string", "提示标题")',
            '"choose-title": buildYduiProps(null, "请选择", "string", "请选择提示标题")',
            '"ready": buildYduiProps(null, "true", "boolean", "是否准备就绪，异步数据时有用")',
            '"items": buildYduiProps(null, "[]", "array", "数据，内容格式有限制，具体见下文")',
            '"callback": buildYduiProps(null, null, "function", "选择结束后调用的方法，同时返回：\
            {\
                itemname1: \'\', //选择后【省】的名称\
                itemname2: \'\', //选择后【市】的名称\
                itemname3: \'\', //选择后【县】的名称\
                itemvalue1: \'\', //选择后【省】的值\
                itemvalue2: \'\', //选择后【市】的值\
                itemvalue3: \'\' //选择后【县】的值\
            }")',
            '"columns（v1.2.1新增）": buildYduiProps(null, null, "number", "层级数（不设置默认取数据第一个的层级数）")',
            '"masker-opacity（v1.2.1新增）": buildYduiProps(null, ".5", "number", "遮罩层透明度")'
        ],
        slot: {
        }
    }
}), 'CitySelect');
util.build(util.buildNames({
    InfiniteScroll: {
        name: '滚动加载',
        props: [
            '"callback": buildYduiProps(null, null, "function", "当列表滚动到底部时，调用的自定义方法")',
            '"distance": buildYduiProps(null, null, "number", "触发加载方法的滚动距离阈值（像素）")',
            '"scroll-top": buildYduiProps(null, "true", "boolean", "是否初始化滚动至顶部")'
        ],
        slot: {
            '-': '内容',
            'list': '列表内容',
            'loadingtip': '加载中提示内容',
            'donetip': '所有数据加载完毕后提示内容'
        }
    }
}), 'InfiniteScroll');
util.build(util.buildNames({
    PullRefresh: {
        name: '下拉刷新',
        props: [
            '"callback": buildYduiProps(null, null, "function", "当拖动列表达到一定位置后将会调用该自定义方法")',
            '"stop-drag": buildYduiProps(null, "false", "boolean", "是否禁止拖动加载内容")',
            '"pull-text": buildYduiProps(null, "下拉刷新", "string", "下拉提示文字")',
            '"drop-text": buildYduiProps(null, "松开加载", "string", "下拉到可加载位置提示文字")',
            '"loading-text": buildYduiProps(null, "加载中...", "string", "加载中提示文字")',
            '"show-init-tip": buildYduiProps(null, "true", "boolean", "是否首次加载显示提示图标")'
        ]
    }
}), 'PullRefresh');
util.build(util.buildNames({
    CountUp: {
        name: '数字动画',
        props: [
            '"start": buildYduiProps(null, "true", "boolean", "是否立即开始动画")',
            '"startnum": buildYduiProps(null, null, "number", "开始数值")',
            '"endnum": buildYduiProps(null, null, "number", "结束数值")',
            '"decimals": buildYduiProps(null, "0", "number", "小数的位数")',
            '"duration": buildYduiProps(null, "2", "number", "动画执行时间（秒）")',
            '"use-easing": buildYduiProps(null, "false", "boolean", "是否使用easy动画效果")',
            '"separator": buildYduiProps(null, null, "string", "每隔三位的分隔符")',
            '"prefix": buildYduiProps(null, null, "string", "数字前头标识")',
            '"suffix": buildYduiProps(null, null, "string", "数字末尾标识")',
            '"callback": buildYduiProps(null, null, "function", "动画执行完毕调用方法")'
        ]
    }
}), 'CountUp');
util.build(util.buildNames({
    CountDown: {
        name: '时间倒计时',
        props: [
            '"time": buildYduiProps(null, null, "string", "结束时间点，时间格式")',
            '"format": buildYduiProps(null, "{%d}天{%h}时{%m}分{%s}秒", "string", "模板参数")',
            '"timetype": buildYduiProps([ "datetime", " second", "" ], "datetime", "string", "传入时间类型，datetime：结束时间（时间格式），second：剩余时间（秒）")',
            '"done-text": buildYduiProps(null, "已结束", "string", "倒计时结束后显示文字")',
            '"callback": buildYduiProps(null, null, "function", "倒计时结束后调用方法")'
        ]
    }
}), 'CountDown');
util.build(util.buildNames({
    Rate: {
        name: '评分',
        props: [
            '"count": buildYduiProps(null, "5", "number", "星星个数")',
            '"size": buildYduiProps(null, ".5rem（25px）", "string", "图标大小")',
            '"color": buildYduiProps(null, null, "string", "初始颜色 && 常规颜色值")',
            '"active-color": buildYduiProps(null, null, "string && 常规颜色值", "选中样式")',
            '"show-text": buildYduiProps(null, null, "array", "提示文字数组")',
            '"readonly": buildYduiProps(null, "false", "boolean", "是否只读")',
            '"padding": buildYduiProps(null, ".06rem（3px）", "string", "两颗星星间的距离")'
        ]
    }
}), 'Rate');
util.build(util.buildNames({
    Popup: {
        name: '弹窗',
        props: [
            '"position": buildYduiProps([ "bottom", " center", " left", " right" ], "bottom", "string", "显示位置")',
            '"height": buildYduiProps(null, "auto", "string", "高度")',
            '"width": buildYduiProps(null, "auto", "string", "宽度")',
            '"close-on-masker": buildYduiProps(null, "true", "boolean", "是否点击遮罩关闭弹窗")',
            '"masker-opacity（v1.2.1新增）": buildYduiProps(null, ".5", "number", "遮罩层透明度")'
        ],
        slot: {
            '-': '内容（超出容器将出现滚动条）',
            'top': '顶部内容（仅在position != "center"中生效）',
            'bottom': '底部内容（仅在position != "center"中生效）'
        }
    }
}), 'Popup');
util.build(util.buildNames({
    RollNotice: {
        name: '滚动公告',
        props: [
            '"height": buildYduiProps(null, "30", "number", "高度（px）")',
            '"speed": buildYduiProps(null, "500", "number", "切换速度（毫秒）")',
            '"autoplay": buildYduiProps(null, "3000", "number", "自动播放时间（毫秒）")',
            '"align": buildYduiProps([ "left", " center", " right" ], "left", "string", "对齐方式")',
            '"direction": buildYduiProps([ "up", " down" ], "up", "string", "滚动方向")'
        ]
    },
    RollNoticeItem: {
        name: '滚动公告内容',
        props: [],
        slot: {
        }
    }
}), 'RollNotice');
util.build(util.buildNames({
    BackTop: {
        name: '返回顶部',
        props: []
    }
}), 'BackTop');
util.build(util.buildNames({
    Accordion: {
        name: '折叠面板',
        props: [
            '"accordion": buildYduiProps(null, "false", "boolean", "是否可以同时展开多个面板")'
        ],
        slot: {
        }
    },
    AccordionItem: {
        name: '折叠面板内容',
        props: [
            '"title": buildYduiProps(null, null, "string", "标题")',
            '"open": buildYduiProps(null, "false", "boolean", "是否默认展开面板")',
            '"auto": buildYduiProps(null, "true", "boolean", "是否自动展开折叠参数")'
        ],
        slot: {
            '-': '内容',
            'title': '标题内容（可自定义颜色，放置图标等等）',
            'icon': '没有事件响应的标题图标内容（位于“标题内容”前面）',
            'txt': '没有事件响应的其他标题内容（位于“标题内容”后面）'
        }
    },
}), 'Accordion');
util.build(util.buildNames({
    DateTime: {
        name: '时间组件',
        props: [
            '"init-emit": buildYduiProps(null, "true", "boolean", "是否初始化修正值")',
            '"readonly": buildYduiProps(null, "false", "boolean", "是否只读")',
            '"type": buildYduiProps([ "datetime", " date", " time", " month", " day" ], "datetime", "string", "时间类型")',
            '"start-date": buildYduiProps(null, null, "string", "限制开始时间，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】或【2008-08-08】或【2008/08/08】或【08:08】")',
            '"end-date": buildYduiProps(null, null, "string", "限制结束时间，格式为：同上")',
            '"start-year": buildYduiProps(null, "0（不限制）", "number", "可选“年”的开始值")',
            '"end-year": buildYduiProps(null, "0（不限制）", "number", "可选“年”的结束值")',
            '"start-hour": buildYduiProps(null, "0", "number", "可选“小时”的开始值（取值0-23）")',
            '"end-hour": buildYduiProps(null, "23", "number", "可选“小时”的结束值（取值1-23）")',
            '"year-format": buildYduiProps(null, "{value}年", "string", "“年”模板【需包含 {value} 字符串，支持html】")',
            '"month-format": buildYduiProps(null, "{value}月", "string", "“月”模板【需包含 {value} 字符串，支持html】")',
            '"day-format": buildYduiProps(null, "{value}日", "string", "“日”模板【需包含 {value} 字符串，支持html】")',
            '"hour-format": buildYduiProps(null, "{value}时", "string", "“小时”模板【需包含 {value} 字符串，支持html】")',
            '"minute-format": buildYduiProps(null, "{value}分", "string", "“分钟”模板【需包含 {value} 字符串，支持html】")',
            '"value": buildYduiProps(null, null, "string", "值，格式为：【2008-08-08 08:08】或【2008/08/08 08:08】或【2008-08-08】或【2008/08/08】或【08:08】")',
            '"cancel-text": buildYduiProps(null, "取消", "string", "取消文字")',
            '"confirm-text": buildYduiProps(null, "确定", "string", "确定文字")',
            '"placeholder": buildYduiProps(null, null, "string", "没有内容提示的文字（:init-emit=\'false\'时生效）")',
            '"callback": buildYduiProps(null, null, "function", "点击确定后回调")',
            '"masker-opacity（v1.2.1新增）": buildYduiProps(null, ".5", "number", "遮罩层透明度")'
        ]
    }
}), 'DateTime');
util.build(util.buildNames({
    LightBox: {
        name: '图片预览',
        props: [
            '"num": buildYduiProps(null, "0", "number", "图片个数（异步数据需指定）")',
            '"close-text": buildYduiProps(null, "关闭", "string", "关闭提示文字")'
        ]
    },
    LightBoxImg: {
        name: '图片预览-图片',
        props: [
            '"src": buildYduiProps(null, null, "string", "图片路径")',
            '"original": buildYduiProps(null, null, "string", "原图路径（不指定将使用src）")'
        ]
    },
    LightBoxTxt: {
        name: '图片预览-文字',
        props: [],
        slot: {
            'top': '上部内容',
            'content': '主体内容（超出一定高度，将出现滚动条）',
            'bottom': '底部内容'
        }
    },
}), 'LightBox');
util.build(util.buildNames({
    CheckList: {
        name: '多选列表',
        props: [
            '"color": buildYduiProps(null, "#4cd864", "string & 常规颜色值", "选中颜色")',
            '"align": buildYduiProps([ "left", " right" ], "left", "string", "图标放置位置")',
            '"label": buildYduiProps(null, "true", "boolean", "是否启用点击整行触发选中")',
            '"callback": buildYduiProps(null, null, "function", "回调方法（返回当前选中值和是否全选）")'
        ]
    },
    CheckListItem: {
        name: '多选列表内容',
        props: [
            '"disabled": buildYduiProps(null, "false", "boolean", "是否禁用")',
            '"val": buildYduiProps(null, null, "boolean,string,number", "值（必填）")'
        ]
    }
}), 'CheckList');
util.build(util.buildNames({
    Search: {
        name: '搜索框',
        props: [
            '"placeholder": buildYduiProps(null, "搜 索", "string", "placeholder提示文字")',
            '"cancel-text": buildYduiProps(null, "取消", "string", "取消按钮文字")',
            '"on-submit": buildYduiProps(null, null, "function", "提交时触发方法")',
            '"on-cancel": buildYduiProps(null, null, "function", "取消触发的方法")',
            '"fullpage": buildYduiProps(null, "false", "boolean", "是否全屏模式（带搜索匹配结果）")',
            '"top": buildYduiProps(null, "0", "string && (px或rem)", "全屏模式距离顶部的距离")',
            '"result": buildYduiProps(null, "[]", "array", "匹配结果（fullpage为true时生效）")',
            '"item-click": buildYduiProps(null, null, "function", "匹配结果点击事件（fullpage为true时生效）")'
        ]
    }
}), 'Search');
util.build(util.buildNames({
    ScrollNav: {
        name: '滚动导航',
        props: [
            '"index": buildYduiProps(null, "0", "number", "高亮索引")',
            '"height": buildYduiProps(null, ".9rem", "string && (px或rem)", "导航高度")',
            '"color": buildYduiProps(null, "#333", "string && 常规颜色值", "字体颜色")',
            '"current-color": buildYduiProps(null, "#f00", "string && 常规颜色值", "高亮字体颜色")',
            '"toggle-text": buildYduiProps(null, "切换分类", "string", "切换分类提示文字")',
            '"bgcolor": buildYduiProps(null, "#fff", "string && 常规颜色值", "导航背景颜色")',
            '"border-color": buildYduiProps(null, "#efefef", "string && 常规颜色值", "边框颜色")',
            '"callback": buildYduiProps(null, null, "function", "切换回调函数（返回当前索引）")'
        ]
    },
    ScrollNavPanel: {
        name: '滚动导航内容',
        props: [
            '"label": buildYduiProps(null, null, "string", "导航标题")'
        ]
    }
}), 'ScrollNav');


