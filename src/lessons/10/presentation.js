// lib.js
export function getQueryparams(url) {
    const params = new Map();
    const reg = /(\?|\&)([^=]+)\=([^&]+)/;
    let key, value;
    while([, , key, value] = reg.exec(url)) {
        params.set(res[2], res[3]);
    }
    return params;
}