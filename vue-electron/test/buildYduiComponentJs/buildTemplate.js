const fs = require('fs')

const build = (arr, fileName) => {
    fs.readFile('./template.tpl','utf-8',function (err,templateStr) {
        if (err) {
            console.log(err)
        } else {
            let tmpRet = []
            let hasSlot = false
            arr.forEach(obj => {
                let tmpRet_ = templateStr
                tmpRet_ = tmpRet_.replace(/#YDUI-Name#/g, obj['YDUI-Name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-name#/g, obj['YDUI-name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-tiny-name#/g, obj['YDUI-tiny-name'])
                tmpRet_ = tmpRet_.replace(/#YDUI-chi-name#/g, obj['YDUI-chi-name'])
                if (obj.slot) {
                    hasSlot = true
                    tmpRet_ = tmpRet_.replace(/\/\/ #slot#/g,'')
                    if (obj.slot instanceof Array) {
                        tmpRet_ = tmpRet_.replace(/#slotstr#/, JSON.stringify(obj.slot.map(a => {return {
                            slot: a,
                            have: false,
                            desc: ''
                        }}),null,'\t').replace(/\n/g,'\r\n\t\t'))
                    } else {
                        slotArr = []
                        for (var i in obj.slot) {
                            slotArr.push({
                                slot: i,
                                have: false,
                                desc: obj.slot[i]
                            })
                        }
                        tmpRet_ = tmpRet_.replace(
                            /#slotstr#/,
                            JSON.stringify(slotArr,null,'\t').replace(/\n/g,'\r\n\t\t'))
                    }
                } else {
                    tmpRet_ = tmpRet_.replace(/\/\/ #normal#/g,'')
                }
                if (obj.props) {
                    let propsStr = '';
                    obj.props.forEach((p, ind) => {
                        if (!ind) {
                            propsStr += '\t\t' + p
                        } else {
                            propsStr += ',\r\n\t\t' + p
                        }
                    })
                    tmpRet_ = tmpRet_.replace('        // #props#', propsStr)
                    // console.log(tmpRet_,propsStr)
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

const buildNames = (obj) => {
    let ret = []
    for (var i in obj) {
        let tmp = {
            'YDUI-Name': i,
            'YDUI-name': i.replace(/[A-Z]/g, function (w,ind) {
                return (ind ? '-' : '') + w.toLowerCase()
            }),
            'YDUI-tiny-name': i.replace(/[A-Z]/g, function (w,ind) {
                if (!ind) {
                    return w.toLowerCase()
                } else {
                    return w
                }
            }),
            'YDUI-chi-name': obj[i].name
        }
        if (obj[i].slot) {
            tmp.slot = obj[i].slot
        }
        if (obj[i].props) {
            tmp.props = obj[i].props
        }
        ret.push(tmp)
    }
    return ret
}

module.exports.util = {
    buildNames,
    build
}

// build(buildNames({
//     ScrollNav: {
//         name: '滚动导航'
//     },
//     ScrollNavPanel: {
//         name: '滚动导航内容'
//     },
// }),'ScrollNav')

/** 例子 一
 * build([
 * {
 *     'YDUI-Name': 'GridsGroup',
 *     'YDUI-name': 'grid-group',
 *     'YDUI-tiny-name': 'gridGroup',
 *     'YDUI-chi-name': '网格组'
 * },
 * {
 *     'YDUI-Name': 'GridsItem',
 *     'YDUI-name': 'grids-item',
 *     'YDUI-tiny-name': 'gridsItem',
 *     'YDUI-chi-name': '网格',
 *     slot: {
 *         icon: '图标内容',
 *         text: '文字内容',
 *         else: '其他内容，没有限制'
 *     }
 * }
 *  * ],'Grid')
 * */

/**
 * build(buildNames({
 *     ProgressBar: {
 *         name: '进度条',
 *         slot: []
 *     }
 * }),'ProgressBar')
 * */
