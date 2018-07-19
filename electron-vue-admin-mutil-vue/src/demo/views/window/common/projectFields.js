export const projectInfoFields = ($this) => {
    return [
        {
            "type" : "hidden",
            "name" : "id",
            "value" : ""
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.pname"),
            "placeholder":$this.$t("window.fields.projectInfo.pnamePlaceholder"),
            "value":"",
            "name":"pname",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.adress"),
            "placeholder":$this.$t("window.fields.projectInfo.adressPlaceholder"),
            "value":"",
            "name":"adress",
            required : true
        },
        {
            "type":"radioSelect",
            "label":$this.$t("window.fields.projectInfo.address"),
            "placeholder":$this.$t("window.fields.projectInfo.addressPlaceholder"),
            "value":"",
            "name":"address",
            "belongTo":"content",
            "options":[
                {
                    "label":$this.$t("window.fields.projectInfo.addressOptions.options1.label"),
                    "value":$this.$t("window.fields.projectInfo.addressOptions.options1.value")
                },
                {
                    "label":$this.$t("window.fields.projectInfo.addressOptions.options2.label"),
                    "value":$this.$t("window.fields.projectInfo.addressOptions.options2.value")
                }
            ],
            required : true
        },
        {
            "type":"radioSelect",
            "label":$this.$t("window.fields.projectInfo.area"),
            "placeholder":$this.$t("window.fields.projectInfo.areaPlaceholder"),
            "value":"",
            "name":"area",
            "belongTo":"content",
            "options":[
                {
                    "label":$this.$t("window.fields.projectInfo.areaOptions.options1.label"),
                    "value":$this.$t("window.fields.projectInfo.areaOptions.options1.value")
                },
                {
                    "label":$this.$t("window.fields.projectInfo.areaOptions.options2.label"),
                    "value":$this.$t("window.fields.projectInfo.areaOptions.options2.value")
                },
                {
                    "label":$this.$t("window.fields.projectInfo.areaOptions.options3.label"),
                    "value":$this.$t("window.fields.projectInfo.areaOptions.options3.value")
                }
            ],
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.district"),
            "placeholder":$this.$t("window.fields.projectInfo.districtPlaceholder"),
            "value":"",
            "name":"district",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.street"),
            "placeholder":$this.$t("window.fields.projectInfo.streetPlaceholder"),
            "value":"",
            "name":"street",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.streetno"),
            "placeholder":$this.$t("window.fields.projectInfo.streetnoPlaceholder"),
            "value":"",
            "name":"streetno",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.building"),
            "placeholder":$this.$t("window.fields.projectInfo.buildingPlaceholder"),
            "value":"",
            "name":"building",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.floor"),
            "placeholder":$this.$t("window.fields.projectInfo.floorPlaceholder"),
            "value":"",
            "name":"floor",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.flat"),
            "placeholder":$this.$t("window.fields.projectInfo.flat"),
            "value":"",
            "name":"flat",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.referenceno"),
            "placeholder":$this.$t("window.fields.projectInfo.referencenoPlaceholder"),
            "value":"",
            "name":"referenceno",
            "belongTo":"content",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.message_id"),
            "placeholder":$this.$t("window.fields.projectInfo.message_idPlaceholder"),
            "value":"",
            "name":"messageId",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.signature"),
            "placeholder":$this.$t("window.fields.projectInfo.signaturePlaceholder"),
            "value":"",
            "name":"signature",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.projectInfo.lzxx"),
            "placeholder":$this.$t("window.fields.projectInfo.lzxxPlaceholder"),
            "value":"",
            "name":"lzxx",
            "belongTo":"content",
            required : true
        },
        // todo 这里需要完善修bug，列表应该是实时刷新的
        {
            "type":"radioSelect",
            "label":$this.$t("window.fields.projectInfo.certify"),
            "placeholder":$this.$t("window.fields.projectInfo.certifyPlaceholder"),
            "value":"",
            "name":"certify",
            "belongTo":"content",
            "options":[
            ],
            required : true
        },
        {
            "type":"checkbox",
            "label":$this.$t("window.fields.projectInfo.prenotice"),
            "value":"",
            "name":"prenotice",
            "belongTo":"content"
        }
    ]
};

export const jianliFields = ($this) => {
    return [
        {
            "type" : "hidden",
            "name" : "id",
            "value" : ""
        },
        {
            name : 'diyige',
            label : 'diyige',
            type : 'selectInput',
            value : '',
            options : [
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.ucorporationNo"),
                    name : "ucorporationNo",
                    placeholder : ''
                },
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.uid"),
                    name : 'uid',
                    placeholder : ''
                },
                {
                    label : $this.$t("window.fields.jianli.diyigeOptions.ubusinessNo"),
                    name : 'ubusinessNo',
                    placeholder : ''
                }
            ],
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.ufullname"),
            "placeholder":$this.$t("window.fields.jianli.ufullnamePlaceholder"),
            "value":"",
            "name":"ufullname",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.uenglishName"),
            "placeholder":$this.$t("window.fields.jianli.uenglishNamePlaceholder"),
            "value":"",
            "name":"uenglishName",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.ucertifyId"),
            "placeholder":$this.$t("window.fields.jianli.ucertifyIdPlaceholder"),
            "value":"",
            "name":"ucertifyId",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.ucertifyEnd"),
            "placeholder": $this.$t("window.fields.jianli.ucertifyEndPlaceholder"),
            "value":"",
            "name":"ucertifyEnd",
            required : true,
            regex : '^((?:19|20)\\d\\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$'
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.uemail"),
            "placeholder":$this.$t("window.fields.jianli.uemailPlaceholder"),
            "value":"",
            "name":"uemail",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.uphone"),
            "placeholder":$this.$t("window.fields.jianli.uphonePlaceholder"),
            "value":"",
            "name":"uphone",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.ufaxNo"),
            "placeholder":$this.$t("window.fields.jianli.ufaxNoPlaceholder"),
            "value":"",
            "name":"ufaxNo",
            required : true
        },
        {
            "type":"input",
            "label":$this.$t("window.fields.jianli.uaddress"),
            "placeholder":$this.$t("window.fields.jianli.uaddressPlaceholder"),
            "value":"",
            "name":"uaddress",
            required : true
        }
    ]
};

export const checkStepOne = ($this) => {
    return [
        {
            name: 'checkerName',
            type: 'input',
            label: $this.$t("window.fields.checkStepOne.checkerName"),
            placeholder: $this.$t("window.fields.checkStepOne.checkerNamePlaceholder"),
            value: ''
        },
        {
            name: 'checkDate',
            type: 'input',
            label: $this.$t("window.fields.checkStepOne.checkDate"),
            placeholder: $this.$t("window.fields.checkStepOne.checkDatePlaceholder"),
            value: '',
            regex : '^((?:19|20)\\d\\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$'
        },
    ]
};