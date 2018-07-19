import axios from './axiosConfig'
import qs from 'qs'

export const login = data => {
    return axios({
        method : "post",
        url : '/sys/login',
        data,
        header : {
            'Content-Type' : 'application/json'
        },
    });
};

export const getUserInfo = data => {
    return axios({
        method : "post",
        url : '/sys/user/info',
        data,
        header : {
            'Content-Type' : 'application/json'
        }
    });
};

export const updateUserInfo = data => {
    return axios({
        url : '/sys/user/updateself',
        method : 'post',
        data,
        header : {
            'Content-Type' : 'application/json'
        }
    });
};

export const getUserCertify = data => {
    return axios({
        url : '/certify/certify/mylist',
        method : 'post'
    });
};

export const createCertify = data => {
    return axios({
        url : '/certify/certify/apply',
        method : 'post',
        data,
        header : {
            'Content-Type' : 'application/json'
        }
    });
}

export const getQpregtype = params => {
    return new Promise(s => {
        setTimeout(() => {
            s({"msg":"操作成功","code":200,"qpregtype":[{"id":18,"group":"qpregtype","value":"QP-AP","children":null,"description":"认可人士名册","orderNum":1,"childrenList":null},{"id":19,"group":"qpregtype","value":"QP-GBC","children":null,"description":"注册一般建筑承建商","orderNum":2,"childrenList":null},{"id":20,"group":"qpregtype","value":"QP-RSE","children":null,"description":"結構工程師名冊","orderNum":3,"childrenList":null},{"id":21,"group":"qpregtype","value":"QP-MWC(W) ","children":null,"description":"註冊小型工程承建商 (個人)","orderNum":4,"childrenList":null},{"id":22,"group":"qpregtype","value":"QP-MWC","children":null,"description":"註冊小型工程承建商(公司)","orderNum":5,"childrenList":null},{"id":23,"group":"qpregtype","value":"QP-RI","children":null,"description":"檢驗人員名冊","orderNum":6,"childrenList":null}]});
        });
    });
};

export const getRegtype = params => {
    return new Promise(s => {
        setTimeout(() => {
            s({"msg":"操作成功","code":200,"regtype":[{"id":2,"group":"regtype","value":"AP(A)","children":"","description":"認可人士名冊(建築師名單)","orderNum":1,"childrenList":null},{"id":3,"group":"regtype","value":"AP(E)","children":null,"description":"認可人士名冊(工程師名單)","orderNum":2,"childrenList":null},{"id":4,"group":"regtype","value":"AP(S)","children":null,"description":"認可人士名冊(測量師名單)\t","orderNum":3,"childrenList":null},{"id":5,"group":"regtype","value":"RSE","children":null,"description":"結構工程師名冊\t","orderNum":4,"childrenList":null},{"id":6,"group":"regtype","value":"RGE","children":null,"description":"岩土工程師名冊","orderNum":5,"childrenList":null},{"id":7,"group":"regtype","value":"RI(A)","children":null,"description":"檢驗人員名冊(建築師名單)","orderNum":6,"childrenList":null},{"id":8,"group":"regtype","value":"RI(E)","children":null,"description":"檢驗人員名冊(工程師名單)","orderNum":7,"childrenList":null},{"id":9,"group":"regtype","value":"RI(S)","children":null,"description":"檢驗人員名冊(測量師名單)","orderNum":8,"childrenList":null},{"id":10,"group":"regtype","value":"GBC","children":null,"description":"一般建築承建商名冊","orderNum":9,"childrenList":null},{"id":11,"group":"regtype","value":"SC(D)","children":null,"description":"專門承建商名冊(拆卸工程類別分冊)","orderNum":10,"childrenList":null},{"id":12,"group":"regtype","value":"SC(F)","children":null,"description":"專門承建商名冊(基礎工程類別分冊)","orderNum":11,"childrenList":null},{"id":13,"group":"regtype","value":"SC(SF)","children":null,"description":"專門承建商名冊(地盤平整工程類別分冊)","orderNum":12,"childrenList":null},{"id":14,"group":"regtype","value":"SC(V)","children":null,"description":"專門承建商名冊(通風系統工程類別分冊)","orderNum":13,"childrenList":null},{"id":15,"group":"regtype","value":"SC(GI)","children":null,"description":"專門承建商名冊(現場土地勘測工程類別分冊)\t","orderNum":14,"childrenList":null},{"id":16,"group":"regtype","value":"MWC","children":null,"description":"小型工程承建商(公司)名冊","orderNum":15,"childrenList":null},{"id":17,"group":"regtype","value":"MWC(W)","children":null,"description":"小型工程承建商(個人)名冊","orderNum":16,"childrenList":null}]});
        });
    });
};

export const logout = () => {
    return axios({
        method : 'post',
        url : '/sys/logout'
    })
        .then(_ => {
            localStorage.setItem('token','');
            localStorage.setItem('user','');
            document.cookie = 'token=';
            document.cookie = 'role=';
            return _;
        });
}

//注册时检查用户名是否可用
export const checkName = username => {
    return axios({
        method : 'post',
        url : '/register/check/username',
        data : {
            username
        }
    })
};

export const registerPeople = data => {
    return axios({
        method : 'post',
        url : '/register/register',
        data,
        header : {
            'Content-Type' : 'application/json'
        }

    });
};

export const registerCompany = data => {
    return axios({
        method : 'post',
        url : '/register/companyRegister',
        data
    });
};

export const checkCertify = data => {
    return axios({
        method : 'post',
        url : '/register/check/ucertifyId',
        data
    });
}