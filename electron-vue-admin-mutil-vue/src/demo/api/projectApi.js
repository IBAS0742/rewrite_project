import axios from './axiosConfig'
import qs from 'qs'

//预处理方法
export const projectInfoPerDear = a => {
    if (a instanceof Array) {
        a.forEach(pi => {
            pi.content = JSON.parse(pi.content);
            // for (var i in pi.content) {
            //     pi[i] = pi.content[i];
            // }
        });
    } else {
        if ('content' in a) {
            a.content = JSON.parse(a.content);
            // for (var i in a.content) {
            //     a[i] = a.content[i];
            // }
        }
    }
    return a;
};

//获取工程列表
export const projectList = () => {
    return axios({
        method : 'post',
        url : '/project/projectinfo/mylist',
    });
};

//更新工程信息
export const updateProject = data => {
    return axios({
        method : 'post',
        url : '/project/projectinfo/update',
        data,
        // transformRequest: [function (data) {
        //     let ret = ''
        //     for (let it in data) {
        //         ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //     }
        //     return ret
        // }],
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//根据id获取工程信息
export const getProjectById = id => {
    return axios({
        method : 'post',
        url : '/project/projectinfo/info/' + id
    });
};

// test
export const getCertifyList = () => {
    return axios({
        method : 'post',
        url : '/certify/certify/mylist'
    });
};

//获取验窗工程信息
export const getWindowInfo = () => {
    return new Promise((s,f) => {
        setTimeout(() => {
            s({"msg":"操作成功","check_window":[{"id":109,"group":"check_window","value":"","children":"check_window_aluminum_window","description":"鋁窗","orderNum":null,"childrenList":[{"id":110,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_window_frame_window_sash","description":"窗框及窗扇","orderNum":null,"childrenList":[{"id":111,"group":"check_window_aluminum_window_window_frame_window_sash","value":"1","children":"","description":"難以開啟或活動不暢順","orderNum":null,"childrenList":null},{"id":112,"group":"check_window_aluminum_window_window_frame_window_sash","value":"2","children":"","description":"變形或不能關妥","orderNum":null,"childrenList":null}]},{"id":113,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_window_hinge","description":"窗鉸","orderNum":null,"childrenList":[{"id":114,"group":"check_window_aluminum_window_window_hinge","value":"1","children":"","description":"變形或缺漏","orderNum":null,"childrenList":null},{"id":115,"group":"check_window_aluminum_window_window_hinge","value":"2","children":"","description":"嚴重銹蝕","orderNum":null,"childrenList":null}]},{"id":116,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_rivets_screws","description":"鉚釘及螺絲","orderNum":null,"childrenList":[{"id":117,"group":"check_window_aluminum_window_rivets_screws","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":118,"group":"check_window_aluminum_window_rivets_screws","value":"2","children":"","description":"呈現灰白色粉狀物質或銹蝕","orderNum":null,"childrenList":null}]},{"id":119,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_sliding_track","description":"滑動式軌道、滑動窗的定位滑塊及窗撐","orderNum":null,"childrenList":[{"id":120,"group":"check_window_aluminum_window_sliding_track","value":"1","children":"","description":"變形或缺漏","orderNum":null,"childrenList":null},{"id":121,"group":"check_window_aluminum_window_sliding_track","value":"2","children":"","description":"呈現灰白色粉狀物質或銹蝕","orderNum":null,"childrenList":null}]},{"id":122,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_window_lock","description":"窗鎖","orderNum":null,"childrenList":[{"id":123,"group":"check_window_aluminum_window_window_lock","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":124,"group":"check_window_aluminum_window_window_lock","value":"2","children":"","description":"連動桿斷裂，把手卡死。","orderNum":null,"childrenList":null}]},{"id":125,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_glass_panel","description":"玻璃嵌板","orderNum":null,"childrenList":[{"id":126,"group":"check_window_aluminum_window_glass_panel","value":"1","children":"","description":"破爛或破裂","orderNum":null,"childrenList":null}]},{"id":127,"group":"check_window_aluminum_window","value":"","children":"check_window_aluminum_window_strips_pads_fixed_glass_panel","description":"用作固定玻璃嵌板的壓條及墊條","orderNum":null,"childrenList":[{"id":128,"group":"check_window_aluminum_window_strips_pads_fixed_glass_panel","value":"1","children":"","description":"缺漏或欠妥","orderNum":null,"childrenList":null}]}]},{"id":129,"group":"check_window","value":"","children":"check_window_iron_window","description":"鋼／鐵窗","orderNum":null,"childrenList":[{"id":130,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_window_frame_window_sash","description":"窗框及窗扇","orderNum":null,"childrenList":[{"id":131,"group":"check_window_iron_window_window_frame_window_sash","value":"1","children":"","description":"難以開啟或活動不暢順","orderNum":null,"childrenList":null},{"id":132,"group":"check_window_iron_window_window_frame_window_sash","value":"2","children":"","description":"變形或不能關妥","orderNum":null,"childrenList":null},{"id":133,"group":"check_window_iron_window_window_frame_window_sash","value":"3","children":"","description":"銹蝕","orderNum":null,"childrenList":null},{"id":134,"group":"check_window_iron_window_window_frame_window_sash","value":"4","children":"","description":"油漆剝落或鋼／鐵材外露","orderNum":null,"childrenList":null}]},{"id":135,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_window_hinge","description":"窗鉸","orderNum":null,"childrenList":[{"id":136,"group":"check_window_iron_window_window_hinge","value":"1","children":"","description":"變形或缺漏","orderNum":null,"childrenList":null},{"id":137,"group":"check_window_iron_window_window_hinge","value":"2","children":"","description":"嚴重銹蝕","orderNum":null,"childrenList":null}]},{"id":138,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_screws","description":"螺絲","orderNum":null,"childrenList":[{"id":139,"group":"check_window_iron_window_screws","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":140,"group":"check_window_iron_window_screws","value":"2","children":"","description":"銹蝕","orderNum":null,"childrenList":null}]},{"id":141,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_weld","description":"焊口","orderNum":null,"childrenList":[{"id":142,"group":"check_window_iron_window_weld","value":"1","children":"","description":"裂開或嚴重銹蝕","orderNum":null,"childrenList":null}]},{"id":143,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_window_lock","description":"窗鎖","orderNum":null,"childrenList":[{"id":144,"group":"check_window_iron_window_window_lock","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":145,"group":"check_window_iron_window_window_lock","value":"2","children":"","description":"把手卡死","orderNum":null,"childrenList":null}]},{"id":146,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_glass_panel","description":"玻璃嵌板","orderNum":null,"childrenList":[{"id":147,"group":"check_window_iron_window_glass_panel","value":"1","children":"","description":"破爛或破裂","orderNum":null,"childrenList":null}]},{"id":148,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_putty","description":"油灰","orderNum":null,"childrenList":[{"id":149,"group":"check_window_iron_window_putty","value":"1","children":"","description":"缺漏或裂開","orderNum":null,"childrenList":null}]},{"id":150,"group":"check_window_iron_window","value":"","children":"check_window_iron_window_sliding_track","description":"滑動式軌道、滑動窗的定位滑塊及窗撐","orderNum":null,"childrenList":[{"id":151,"group":"check_window_iron_window_sliding_track","value":"1","children":"","description":"變形或缺漏","orderNum":null,"childrenList":null},{"id":152,"group":"check_window_iron_window_sliding_track","value":"2","children":"","description":"銹蝕或難以移動","orderNum":null,"childrenList":null}]}]},{"id":153,"group":"check_window","value":"","children":"check_window_wood_window","description":"木窗","orderNum":null,"childrenList":[{"id":154,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_window_frame_window_sash","description":"窗框及窗扇","orderNum":null,"childrenList":[{"id":155,"group":"check_window_wood_window_window_frame_window_sash","value":"1","children":"","description":"難以開啟或活動不暢順","orderNum":null,"childrenList":null},{"id":156,"group":"check_window_wood_window_window_frame_window_sash","value":"2","children":"","description":"變形或不能關妥","orderNum":null,"childrenList":null},{"id":157,"group":"check_window_wood_window_window_frame_window_sash","value":"3","children":"","description":"腐爛","orderNum":null,"childrenList":null},{"id":158,"group":"check_window_wood_window_window_frame_window_sash","value":"4","children":"","description":"木材缺漏或損壞","orderNum":null,"childrenList":null},{"id":159,"group":"check_window_wood_window_window_frame_window_sash","value":"5","children":"","description":"油漆剝落或木材外露","orderNum":null,"childrenList":null}]},{"id":160,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_window_hinge","description":"窗鉸","orderNum":null,"childrenList":[{"id":161,"group":"check_window_wood_window_window_hinge","value":"1","children":"","description":"變形或缺漏","orderNum":null,"childrenList":null},{"id":162,"group":"check_window_wood_window_window_hinge","value":"2","children":"","description":"嚴重銹蝕","orderNum":null,"childrenList":null}]},{"id":163,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_screws","description":"螺絲","orderNum":null,"childrenList":[{"id":164,"group":"check_window_wood_window_screws","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":165,"group":"check_window_wood_window_screws","value":"2","children":"","description":"銹蝕","orderNum":null,"childrenList":null}]},{"id":166,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_window_lock","description":"窗鎖","orderNum":null,"childrenList":[{"id":167,"group":"check_window_wood_window_window_lock","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":168,"group":"check_window_wood_window_window_lock","value":"2","children":"","description":"把手卡死","orderNum":null,"childrenList":null}]},{"id":169,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_glass_panel","description":"玻璃嵌板","orderNum":null,"childrenList":[{"id":170,"group":"check_window_wood_window_glass_panel","value":"1","children":"","description":"破爛或破裂","orderNum":null,"childrenList":null}]},{"id":171,"group":"check_window_wood_window","value":"","children":"check_window_wood_window_putty","description":"油灰","orderNum":null,"childrenList":[{"id":172,"group":"check_window_wood_window_putty","value":"1","children":"","description":"缺漏或裂開","orderNum":null,"childrenList":null}]}]},{"id":173,"group":"check_window","value":"","children":"check_window_glass_window","description":"玻璃牆","orderNum":null,"childrenList":[{"id":174,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_window_frame_window_sash","description":"玻璃嵌板/鰭状支撐","orderNum":null,"childrenList":[{"id":175,"group":"check_window_glass_window_window_frame_window_sash","value":"1","children":"","description":"破爛或破裂","orderNum":null,"childrenList":null}]},{"id":176,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_vertical_horizotal_rod","description":"豎框及橫杆","orderNum":null,"childrenList":[{"id":177,"group":"check_window_glass_window_vertical_horizotal_rod","value":"1","children":"","description":"變形或欠妥","orderNum":null,"childrenList":null},{"id":178,"group":"check_window_glass_window_vertical_horizotal_rod","value":"2","children":"","description":"嚴重銹蝕","orderNum":null,"childrenList":null}]},{"id":179,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_braket_claw_inlay","description":"托架及爪具嵌固件","orderNum":null,"childrenList":[{"id":180,"group":"check_window_glass_window_braket_claw_inlay","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":181,"group":"check_window_glass_window_braket_claw_inlay","value":"2","children":"","description":"變形或欠妥","orderNum":null,"childrenList":null}]},{"id":182,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_screw","description":"錨栓、螺栓、螺母、及螺絲","orderNum":null,"childrenList":[{"id":183,"group":"check_window_glass_window_screw","value":"1","children":"","description":"鬆脫或缺漏","orderNum":null,"childrenList":null},{"id":184,"group":"check_window_glass_window_screw","value":"2","children":"","description":"銹蝕","orderNum":null,"childrenList":null}]},{"id":185,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_strips_pads_fixed_glass_panel","description":"用作固定玻璃嵌板的壓條及墊條","orderNum":null,"childrenList":[{"id":186,"group":"check_window_glass_window_strips_pads_fixed_glass_panel","value":"1","children":"","description":"缺漏或欠妥","orderNum":null,"childrenList":null}]},{"id":187,"group":"check_window_glass_window","value":"","children":"check_window_glass_window_structural_sealant","description":"結構密封劑","orderNum":null,"childrenList":[{"id":188,"group":"check_window_glass_window_structural_sealant","value":"1","children":"","description":"缺漏或欠妥","orderNum":null,"childrenList":null},{"id":189,"group":"check_window_glass_window_structural_sealant","value":"2","children":"","description":"出現變質或分離的跡象","orderNum":null,"childrenList":null}]}]}],"code":200});
        },500);
    })
};

//创建工程
export const createProject = data =>  {
    return axios({
        method : 'post',
        url : '/project/projectinfo/save',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//创建监理人信息
export const createSupervisor = data =>  {
    return axios({
        method : 'post',
        url : '/project/supervisor/save',
        data : qs.stringify(data),
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
    });
};

//获取监理人信息
export const getSupervisor = projectId => {
    return axios({
        method : 'post',
        url : '/project/supervisor/infoByProjectId/' + projectId
    })
};

//根性监理人信息
export const updateSupervisor = data => {
    return axios({
        method : 'post',
        url : '/project/supervisor/update',
        data : qs.stringify(data),
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
    });
};

//获取图片信息
export const getImage = (projectId,imgId) => {
    return axios({
        method : 'post',
        url : '/project/projectimage/info/' + imgId + '/' + projectId
    })
};

//保存图片
export const saveIamge = data => {
    return axios({
        method : 'post',
        url : '/project/projectimage/save',
        data,
        headers: {
            'Content-Type':'application/json'
        },
    });
};

//获取图片
export const fetchImage = url => {
    console.log(url);
    return axios({
        method : 'get',
        url,
        header : {
            'Content-Type':'application/octet-stream'
        },
        responseType: 'arraybuffer',
        transformResponse: [function (data) {
            return URL.createObjectURL(new Blob([data]));
        }]
    })
};

// 删除图片
export const deleteImage = imageIds => {
    return axios({
        method : 'post',
        url : '/project/projectimage/delete',
        data : ((imageIds instanceof Array) ? imageIds : [imageIds])
    })
};

//获取坐标点列表
export const getCoordList = imageId => {
    return axios({
        method : 'post',
        url : '/project/imagecoord/list',
        data : qs.stringify({
            imageId
        }),
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    });
};

//保存点坐标
export const saveCoord = (imageId,coord) =>  {
    return axios({
        method : 'post',
        url : '/project/imagecoord/save',
        data : {
            imageId,
            coord : JSON.stringify(coord)
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//更新点坐标
export const updateCoord = (id,coord) =>  {
    return axios({
        method : 'post',
        url : '/project/imagecoord/update',
        data : {
            id,
            coord : JSON.stringify(coord)
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

//删除多个个点坐标
export const deleteCoord = coordIds => {
    if (coordIds instanceof Array) {} else {
        throw new Error("这里应该是一个数组");
    }
    return axios({
        method : 'post',
        url : '/project/imagecoord/delete',
        data : coordIds
    });
};

//获取验窗进度
export const getProjectProcess = projectId => {
    return axios({
        method : 'post',
        data : qs.stringify({projectId}),
        url : '/project/projectimage/progress',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        }
    });
};

//获取检验报告
export const getWhat = projectId => {
    return axios({
        url : '/gen/gen/genWhat',
        method : 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : qs.stringify({projectId})
    })
};

