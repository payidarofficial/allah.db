"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const get = (obj, path) => {
    let p = path.split(".");
    let o = obj;
    for (let i = 1; i = p.length; i++) {
        let e = p.shift();
        o = o[e];
    }
    return o;
};
exports.get = get;
//# sourceMappingURL=get.js.map