/**
 * 同步图片的标记
 * image 同步标记图片的原图（备份用）（可以后期配置）
 * targetImage 同步绘制原图和标记的图片（必须有，但是该对象作为输出有不需要有 src ）
 * flagFn 绘制标记函数（调用时会传入 context 对象，和 obj 点信息内容）
 * obj 用于定义图片的原始大小（用于强制定义大小）
 */
export const asynImageFlag = (function (image, targetImage, flagFn, obj,cb) {
    //创建 canvas
    let width = obj ? obj.naturalWidth : (image.width || targetImage.width);
    let height = obj ? obj.naturalHeight : (image.height || targetImage.height);
    let canvas = document.createElement("canvas");
    let defaultFlagWidth = (width > height) ? (width / 20) : (height / 20);
    defaultFlagWidth = (defaultFlagWidth <= 1) ? 20 : defaultFlagWidth;
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    //设置文字基线为顶部
    ctx.textBaseline = "top";
    ctx.font = "36px Arial";
    ctx.lineWidth = 5;
    let flags = [
       // {
       //     left : 0,
       //     top : 0,
       //     width : 0,
       //     height : 0
       // }
    ];
    let flagSize = {
        width: 20,
        height: 20
    };
    /**
     * 绘制标记函数
     * ctx context 对象
     * obj 绘制信息
     * ( obj.left 距左,obj.top 距顶,obj.height 高度,obj.width 宽度,obj.style 样式,obj.word 绘制文字)
     */
    flagFn = (flagFn || function (ctx, obj) {
        //默认绘制一个圆圈
        let strokeStyle_bak = ctx.strokeStyle;
        ctx.strokeStyle = obj.style || strokeStyle_bak;
        ctx.beginPath();
        ctx.arc(obj.left, obj.top, obj.width, 0, 6.28);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = obj.fontColor || "black";
        ctx.font = (obj.width * 2 - 8) + "px Arial";
        ctx.fillText(obj.word, obj.left - obj.width * 0.4 * (obj.word + "").length, obj.top - obj.height * .9);
        ctx.strokeStyle = strokeStyle_bak;
    }).bind(null, ctx);
    //备份图片
    let image_bak = new Image();
    image_bak.src = image.src + "";
    //debug
    //document.body.appendChild(image_bak);
    //document.body.appendChild(canvas);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image_bak, 0, 0, width, height);
    let counter = 0;
    let flagName = {
        "default" : function (counter) {
            if (counter >= 26) {
                return String.fromCharCode(97 + counter % 26) + parseInt(counter / 26);
            } else {
                return String.fromCharCode(97 + counter);
            }
        },
        "number" : function (counter) {
            return counter + 1;
        }
    };
    let ret = {
        defaultFlagNameType : "default",
        //添加新标记
        newFlag: function (flag,flagNameType) {
            flag.style = flag.style || "red";
            /**
             * 260 年后该 标记 可能出现问题
             * */
            flag.fid = flag.fid || (new Date()).getTime() + "_" + parseInt(Math.random() * 100);
            if (flagNameType) {
                flag.word = flagName[flagNameType](counter);
            } else {
                flag.word = flagName[this.defaultFlagNameType](counter);
            }
            counter++;
            flags.push(flag);
            if (flag.width && flag.width >= 1) {} else {
                flag.width = flag.height = defaultFlagWidth;
            }
            flagFn(flag);
            //ctx.strokeRect(flag.left,flag.top,flag.width,flag.height);
            if (targetImage instanceof Function) {
                targetImage(canvas.toDataURL(),flags);
            } else {
                targetImage.src = canvas.toDataURL();
            }
            //targetImage.src = canvas.toDataURL();
            return flag;
        },
        //直接将内容按指定函数输出，或绘制到指定位图
        output : function (cb) {
            if (targetImage instanceof Function) {
                targetImage(canvas.toDataURL(),flags);
            } else {
                targetImage.src = canvas.toDataURL();
            }
            (cb || function () {})(canvas.toDataURL());
        },
        //将带有标记的图片进行输出
        outputRetImage : function() {
            return canvas.toDataURL();
        },
        //回退一个标记
        undoFlag: function () {
            flags.pop();
            this.render();
        },
        //获取 canvas 上下文
        context: function () {
            return ctx;
        },
        //重新渲染所有标记，必须有标记过
        render: function () {
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(image_bak, 0, 0, width, height);
            for (let i = 0; i < flags.length; i++) {
                flagFn(flags[i]);
                //ctx.strokeRect(flags[i].left,flags[i].top,flags[i].width,flags[i].height);
            }
            if (targetImage instanceof Function) {
                targetImage(canvas.toDataURL());
            } else {
                targetImage.src = canvas.toDataURL();
                console.log(targetImage);
            }
        },
        //擦除第 x 个
        undoFlagX: function (ind) {
            if (flags.length >= ind) {
                flags.splice(ind - 1, 1);
                this.render();
            }
        },
        //修改基础图片
        changeBaseImage: function (img,cb) {
            image_bak.src = img.src;
            canvas.width = img.width;
            canvas.height = img.height;
            image_bak.onload = () => {
                ctx = canvas.getContext("2d");
                //设置文字基线为顶部
                ctx.textBaseline = "top";
                ctx.font = "36px Arial";
                ctx.lineWidth = 5;
                ctx.clearRect(0, 0, width, height);
                ctx.drawImage(image_bak, 0, 0, width, height);
                flags = [];
                (cb || (() => {}))();
            }
        },
        //清空所有标记
        reFlag: function () {
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(image_bak, 0, 0, width, height);
            flags = [];
            counter = 0;
            if (targetImage instanceof Function) {
                targetImage(canvas.toDataURL(),flags);
            } else {
                targetImage.src = canvas.toDataURL();
            }
        },
        //原始图片
        bakImage: function () {
            return image_bak;
        },
        //获取所有标记
        flags: function () {
            return flags;
        },
        //通过 fid 的值撤销 一个标记
        undoFlagByFid: function (fid) {
            console.log(flags);
            for (let i = 0;i < flags.length;i++) {
                if (flags[i].fid == fid) {
                    flags.splice(i,1);
                    this.render();
                    break;
                }
            }
        },
        //更新某一个点的信息
        updateFlagByFid : function (flag) {
            for (let i = 0;i < flags.length;i++) {
                if (flags[i].fid == flag.fid) {
                    flags[i] = flag;
                    this.render();
                }
            }
        }
    };
    if (cb && typeof cb == "function") {
        cb(ret);
    }
    return ret;
});

export const zipImage = (function (img,size,cb) {
    size = size || 200000;
    let rate = 1;
    let zip = (Img,Size,Cb) => {
        let curSize = Img.width * Img.height;
        if (curSize > Size) {
            rate = Math.sqrt(Size / curSize);
            AIF(Img,Cb,rate,Img.width * rate,Img.height * rate);
        } else {
            Cb(Img.src,Img.width,Img.height);
        }
    };
    if (img  instanceof Image) {
        zip(img,size,cb);
    } else {
        let img_ = new Image();
        img_.onload = () => {
            zip(img_,size,cb);
        };
        img_.src = img;
    }
});

export const AIF = (function () {
    let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
    return function (img,cb,rate) {
        let width = img.width * (rate || 1),
            height = img.height * (rate || 1);
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,width,height);
        ctx.drawImage(img,0,0,img.width * rate,img.height * rate);
        cb(canvas.toDataURL(),img.width * rate,img.height * rate);
        //return  canvas.toDataURL();
    };
})();