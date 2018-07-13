const fs = require('fs')

const build = (arr, fileName) => {
    fs.readFile('./template.tpl','utf-8',function (err,ret) {
        if (err) {
            console.log(err)
        } else {
            let tmpRet = []
            let hasSlot = false
            arr.forEach(obj => {
                let tmpRet_ = ret
                tmpRet_ = tmpRet_.replace(/#YDUI-Name#/g, obj['YDUI-Name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-name#/g, obj['YDUI-name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-tiny-name#/g, obj['YDUI-tiny-name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-chi-name#/g, obj['YDUI-chi-name'])
                if (obj.slot) {
                    hasSlot = true
                    tmpRet_ = tmpRet_.replace(/\/\/ #slot#/g,'')
                    tmpRet_ = tmpRet_.replace(/#slotstr#/, JSON.stringify(obj.slot.map(a => {return {
                        slot: a,
                        have: false,
                        desc: ''
                    }}),null,'\t').replace(/\n/g,'\r\n\t\t'))
                } else {
                    tmpRet_ = tmpRet_.replace(/\/\/ #normal#/g,'')
                }
                tmpRet.push(tmpRet_)
            })
            fs.writeFile('./../../src/renderer/template/ydui/components/yd' + fileName + '.js',
                (hasSlot ?
                    'import { buildYduiProps, buildYduiSlot } from "../buildDefaultObject";\r\n' :
                    'import { buildYduiProps } from "../buildDefaultObject";\r\n'
                )
                + tmpRet.join('\r\n')
                , function (err) {
                if (err) {
                    console.log('写入时发生错误', err)
                } else {
                    fs.readdir('./../../src/renderer/template/ydui/components/',function(err,ret){
                        let importStr = [];
                        let exportStr = [];
                        let pContent = 'export const ydComponentName = ["Button","ButtonGroup","CellGroup","CellItem","Icons","ListTheme","ListItem","ListOther","Badge","GridsGroup","GridsItem","NavBar","NavBarBackIcon","NavBarNextIcon","TabBar","TabBarItem","Layout","TextArea","Input","FlexBox","FlexBoxItem","Switch","Radio","RadioGroup","CheckBox","CheckBoxGroup","TimeLine","TimeLineItem","Step","StepItem","Preview","PreviewHeader","PreviewItem","Confirm","Alert","Toast","Notify","Loading","Slider","SliderItem","ProgressBar","ActionSheet","Tab","TabPanel","ScrollTab","ScrollTabPanel","KeyBoard","Spinner","SendCode","CitySelect","InfiniteScroll","PullRefresh","CountDown","CountUp","Rate","Popup","RollNotice","RollNoticeItem","BackTop","Accordion","AccordionItem","DateTime","LightBox","LightBoxImg","LightBoxTxt","CheckList","CheckListItem","Search","ScrollNav","ScrollNavPanel"];'
                        console.log(ret)
                        ret.forEach(ret_ => {
                            ret_ = ret_.substring(0, ret_.length - 3)
                            importStr.push('import * as ' + ret_ + ' from "./components/' + ret_ + '"')
                            exportStr.push('...' + ret_)
                        })
                        let result = importStr.join('\r\n') + '\r\n\r\n' +
                            'export const ydComponent = {\n\t' +
                            exportStr.join(', ') +
                            '\r\n}\r\n\r\n' +
                            pContent
                        fs.writeFile('./../../src/renderer/template/ydui/registerAllComponent.js', result, function (err) {
                            if (err) {
                                console.log(err)
                            }
                        })
                    })
                }
            })
        }
    })
}

// YDUI-Name 组件名称
// YDUI-name 组件名称 小写
// YDUI-tiny-name 组件名称缩写
// YDUI-chi-name 组件中文标签
// slotstr 组件插槽
//
build([
    {
        'YDUI-Name': 'ListTheme',
        'YDUI-name': 'list',
        'YDUI-tiny-name': 'list',
        'YDUI-chi-name': '列表'
    },{
        'YDUI-Name': 'ListItem',
        'YDUI-name': 'list-item',
        'YDUI-tiny-name': 'list-item',
        'YDUI-chi-name': '列表项',
        slot: ['img','title','other']
    },{
        'YDUI-Name': 'ListOther',
        'YDUI-name': 'list-other',
        'YDUI-tiny-name': 'list-o',
        'YDUI-chi-name': '列表附件'
    }
],'List')

