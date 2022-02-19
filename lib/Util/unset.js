"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unset = void 0;
function unset(obj, path) {
    if (typeof path === 'string')
        path = path.split('.');
    for (let i = 0; i < path.length - 1; i++) {
        obj = obj[path[i]];
        if (typeof obj === 'undefined')
            return;
    }
    delete obj[path.pop()];
}
exports.unset = unset;
;
//# sourceMappingURL=unset.js.map