
export const toYMD = (times) => {
    let date = new Date();
    date.setTime(times);
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
}

export const toYMDHMS = (times) => {
    let date = new Date();
    date.setTime(times);
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}