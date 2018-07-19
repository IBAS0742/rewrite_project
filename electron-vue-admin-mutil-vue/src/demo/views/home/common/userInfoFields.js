export const userInfoFields = ($this) => {
    return [
        {
            "type":"input",
            "label":"用户名",
            "placeholder":"用户名",
            "value":"",
            "name":"username"
        },
        {
            "type":"input",
            "label":"完整姓名",
            "placeholder":"完整姓名（姓氏先行）",
            "value":"",
            "name":"ufullname"
        },
        {
            "type":"input",
            "label":"英文姓名",
            "placeholder":"英文姓名（姓氏先行）",
            "value":"",
            "name":"uenglishName"
        },
        {
            "type":"input",
            "label":"香港身份证号码",
            "placeholder":"香港身份证号码",
            "value":"",
            "name":"uid"
        },
        {
            "type":"input",
            "label":"法团编号",
            "placeholder":"法团编号",
            "value":"",
            "name":"ucorporationNo"
        },
        {
            "type":"input",
            "label":"商业登记号码",
            "placeholder":"商业登记号码",
            "value":"",
            "name":"ubusinessNo"
        },
        {
            "type":"input",
            "label":"公司名称",
            "placeholder":"公司名称",
            "value":"",
            "name":"ucompany"
        },
        {
            "type":"input",
            "label":"邮箱",
            "placeholder":"邮箱",
            "value":"",
            "name":"uemail"
        },
        {
            "type":"input",
            "label":"联系电话",
            "placeholder":"联系电话",
            "value":"",
            "name":"uphone"
        },
        {
            "type":"input",
            "label":"传真号码",
            "placeholder":"传真号码",
            "value":"",
            "name":"ufaxNo"
        },
        {
            "type":"input",
            "label":"居住地址",
            "placeholder":"居住地址",
            "value":"",
            "name":"uaddress"
        }
    ]
};

export const certifyFields = ($this) => {
    return [
        {
            "type":"radioSelect",
            "label":"注册类型",
            "placeholder":"注册类型",
            "value":"",
            required : true,
            "name":"regtype",
            "options" : []
        },
        {
            "type":"input",
            "label":"注册编号",
            "placeholder":"注册编号",
            "value":"",
            required : true,
            "name":"regno"
        },
        {
            "type":"datetime",
            "label":"届满日期",
            "placeholder":"届满日期",
            "value":"",
            required : true,
            "name":"expiry"
        }
    ]
};

export const loginFields = ($this) => {
    return [
        {
            "type":"input",
            "label":$this.$t("fields.login.username"),//"用户名",
            "placeholder":$this.$t("fields.login.username"),//"用户名",
            "value":"",
            "name":"username"
        },
        {
            "type":"password",
            "label":$this.$t("fields.login.password"),//"密码"
            "placeholder":$this.$t("fields.login.password"),//"密码",
            "value":"",
            "name":"password"
        },
        {
            "type":"captcha",
            "label":$this.$t("fields.login.captcha"),//"验证码",
            "placeholder":$this.$t("fields.login.captcha"),//"验证码",
            "value":"",
            "name":"captcha",
            // todo 图片位置到底怎么写
            src : $this.$store.state.baseUrl + '/captcha.jpg',
            width : 100,
            info : [
                {
                    name : 'uuid',
                    type : 'random'
                }
            ]
        },
    ]
};

export const registerUserFields = ($this) => {
    return [
        {
            name : 'diyige',
            label : 'diyige',
            type : 'selectInput',
            value : '',
            options : [
                {
                    label : $this.$t('fields.register.diyigeOptions.ucorporationNo'),//公司注册号
                    name : "ucorporationNo",
                    placeholder : ''
                },
                {
                    label : $this.$t('fields.register.diyigeOptions.uid'),//身份证
                    name : 'uid',
                    placeholder : ''
                },
                {
                    label : $this.$t('fields.register.diyigeOptions.ubusinessNo'),//,商业编码
                    name : 'ubusinessNo',
                    placeholder : ''
                }
            ],
            required : true
        },
        {
            "type":"input",
            "label": $this.$t('fields.register.username'),//用户名
            "placeholder": $this.$t('fields.register.username'),//用户名
            "value":"",
            "name":"username",
            check : 'checkName',
            checkSuccess : $this.$t('fields.register.nameIsOk'),//'该用户名可以使用',
            checkError : $this.$t('fields.register.nameUsed'),//'该用户名已经被使用，请重新填写。',
            required : true
        },
        {
            "type":"password",
            "label": $this.$t('fields.register.password'),//密码
            "placeholder": $this.$t('fields.register.password'),//密码
            "value":"",
            "name":"password",
            required : true
        },
        {
            "type" : "checkbox",
            "label" : $this.$t('fields.register.agressStatement'),//"同意免责声明",
            "name" : 'agreeStatement',
            value : false,
            badge : '?'
        }
    ]
};
