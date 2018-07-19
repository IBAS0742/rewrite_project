import axios from './axiosConfig'
import qs from 'qs'

export const cmsList = data => {
    return axios({
        url : '/cms/content/public/list',
        method : 'post',
        data : qs.stringify(data),
        headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    }
    });
};

export const getOneCms = id => {
    return axios({
        url : '/cms/content/public/info/' + id,
        method : 'post'
    });
};