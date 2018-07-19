export const inputVerify = (inp) => {
    return (inp = Object.assign(
        {
            type : 'input',
            label : '',
            placeholder : '',
            regex : '[\s\S]*',
            value : ''
        },
        inp
    ));
};

export const passwordVerify = (inp) => {
    return (inp = Object.assign(
        {
            type : 'password',
            label : '',
            placeholder : '',
            regex : '[\\w]+',
            value : ''
        },
        inp
    ));
};
const createType = {
    random() {
        return Math.random();
    }
};

export const captchaVerify = (inp) => {
    let uuid = '';
    if (inp.info instanceof Array) {
        inp.info.forEach(_ => {
            if (_.type) {
                _.value = createType[_.type]();
            }
            uuid += _.name + "=" + _.value;
        });
    } else {
        uuid = '?' + (Math.random());
    }
    inp.src = inp.src.split('?')[0] + '?' + uuid;

    if (!(inp.src && inp.src.length)) {
        throw new Error('captcha 需要 src 字段');
    } else if (!(inp.width && (typeof inp.width == typeof 1))) {
        throw new Error('captcha 需要 width 字段，且为数值');
    } else {
        return (inp = Object.assign(
            {
                type : 'captcha',
                label : '',
                placeholder : '',
                value : '',
                width : '',
                load : false,
                img : '',
                info : ''
            },
            inp
        ));
    }
};

export const datetimeVerify = (inp) => {
    return (inp = Object.assign(
        {
            type : 'datetime',
            label : '',
            placeholder : '',
            value : ''
        },
        inp
    ));
};

export const checkboxVerify = (inp) => {
    return (inp = Object.assign(
        {
            type : 'checkbox',
            label : false,
            value : false
        },
        inp,
        {
            value : ((typeof inp.value == 'boolean') ? inp.value : (console.warn('value 指被修复为布尔值'),false))
        }
    ));
};

export const hiddenVerify = a => a;

export const optionsVerify = (template,options) => {
    /**
     * options = [ { label : String , value : String } ]
     * */
    if (options) {
        if (options instanceof Array) {
            if (options.every((op) => {
                for (let i in template) {
                    if (typeof op[i] == typeof template[i]) {
                    } else {
                        return false;
                    }
                }
                return true;
            })) {
                return true;
            } else {
                throw new Error('这里规定 options 格式为 :\n' + JSON.stringify([template]));
            }
        } else {
            throw new Error('options 指必须为数组');
        }
    } else {
        console.dir(inp);
        throw new Error('options 不能为空');
    }
};

export const radioSelectVerify = (inp) => (((optionsVerify) => {
    optionsVerify({ label : '' , value : '' },inp.options);
    return (inp = Object.assign(
        {
            type : 'radioSelect' ,
            label : '' ,
            placeholder : 'placeholder' ,
            options : [] ,
            show : false,
            selectLabel : ''
        },
        inp,
        {
            value : ((typeof inp.value == typeof '') ? inp.value : (console.warn('value 指被修复为字符串'),''))
        }
    ));
})(optionsVerify));

export const radioSelectVerVerify = radioSelectVerify;

export const checkboxSelectVerify = (inp) => (((optionsVerify) => {
    optionsVerify({ label : '' , value : '' },inp.options);
    //todo
    console.log(checkboxSelectVerify);
    return (inp = Object.assign(
        {
            type : 'checkboxSelect' ,
            label : '' ,
            placeholder : 'placeholder' ,
            options : [] ,
            show : false,
            selectLabel : ''
        },
        inp,
        {
            value : ((inp.value instanceof Array) ? inp.value : (console.warn('value 指被修复为数组'),[]))
        }
    ));
})(optionsVerify));

export const selectInputVerify = (inp) => (((optionsVerify) => {
    optionsVerify({ label : '' , name : '' , placeholder : '' },inp.options);
    for (var i in inp.options[0]) {
        inp[i] = inp.options[0][i];
    }
    //todo
    console.log(inp);
    return (inp = Object.assign(
        {
            selected : 0,
            value : '',
            name : '',
            label : '',
            type : 'selectInput',
            placeholder : ''
        },
        inp,
        {
            value : ((typeof inp.value == typeof '') ? inp.value : (console.warn('value 指被修复为字符串'),''))
        }
    ));
})(optionsVerify));