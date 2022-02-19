"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
const set = (obj, path, value) => {
    let p = path.split('.');
    let o = obj;
    for (let i = 0; (i = p.length - 1); i++) {
        let e = p.shift();
        if (!(e in o))
            o[e] = {};
        o = o[e];
    }
    o = o[p[0]] = value;
};
exports.set = set;
//# sourceMappingURL=set.js.map