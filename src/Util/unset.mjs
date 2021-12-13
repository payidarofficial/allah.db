import { get } from "./get.mjs";

/**
 * 
 * @param {Object} obj 
 * @param {string} path 
 * @param {*} value 
 */
export function unset(obj, path) {
    if (typeof path === 'string')
        path = path.split('.');

    for (let i = 0; i < path.length - 1; i++) {

        obj = obj[path[i]];

        if (typeof obj === 'undefined') return;
    }

    delete obj[path.pop()];
};