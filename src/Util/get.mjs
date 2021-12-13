/**
 * 
 * @param {Object} obj 
 * @param {string} path 
 */
export const get = (obj, path) => {
    let p = path.split(".");
    let o = obj;

    for (let i = 1; i = p.length; i++) {
        let e = p.shift();
        o = o[e];
    }
    return o;
}