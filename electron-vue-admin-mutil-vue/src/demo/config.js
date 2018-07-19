// export const baseUrl = 'http://localhost';
// export const baseUrl = 'http://172.20.119.64';
export const baseUrl = location.origin.split(':9999')[0];
// export const baseUrl = 'http://172.20.119.222:8099';

console.log(baseUrl);