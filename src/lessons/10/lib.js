export function parseQueryParams(url) {
    const params = new Map();
    const reg = /(\?|\&)([^=]+)\=([^&]+)/g;
    let tokens;
    while(tokens = reg.exec(url)) {
        let [, , key, value] = tokens;
        params.set(key, value);
    }
    return params;
}
