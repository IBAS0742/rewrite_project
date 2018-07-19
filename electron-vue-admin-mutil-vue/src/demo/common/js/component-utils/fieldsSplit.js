/**
 * 该脚本解决的问题是之前字段放置到 json 中使存取难度变大的问题
 *
 * 使用该脚本的时候 inputInfo 的字段中，如果属于 json 的部分添加一个字段
 *      belongTo : ''
 *  表示字段属于某一个字段
 *  例如
 *      {
 *          name : 'ibas',
 *          content : {
 *              title : '标题',
 *              label : '标记'
 *          }
 *      }
 *      对应的 inputInfo 为
 *      [{
 *          type : 'input' , name : 'name' , value : 'ibas',
 *      },{
 *          type : 'input' , name : 'title' , value : '标题' , belongTo : 'content'
 *      },{
 *          type : 'input' , name : 'label' , value : '标记' , belongTo : 'content'
 *      }]
 * */

export const mergeFields = (inputInfo,toJson) => {
    let ret = {};
    inputInfo.forEach(ii => {
        if (ii.belongTo) {
            if (ii.belongTo in ret) {
                ret[ii.belongTo][ii.name] = ii.value;
            } else {
                ret[ii.belongTo] = {};
                ret[ii.belongTo][ii.name] = ii.value;
            }
        } else {
            ret[ii.name] = ii.value;
        }
    });
    if (toJson) {
        for (var i in ret) {
            if (typeof ret[i] === 'string') {} else {
                ret[i] = JSON.stringify(ret[i]);
            }
        }
    }
    return ret;
};

export const splitFields = (inputInfo,obj) => {
    for (var i in obj) {
        try {
            let a = JSON.parse(obj[i]);
            if (a instanceof Array) {
                return ;
            } else {
                for (var j in a) {
                    inputInfo.every(ii => {
                        if (ii.name == j) {
                            ii.belongTo = i;
                            return false;
                        } else {
                            return true;
                        }
                    })
                }
            }
        } catch (e) {
        }
    }
    return inputInfo;
};