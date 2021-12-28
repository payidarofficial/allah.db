import { ValueType } from "../@types/types";

export const get = (obj: Object, path: string): ValueType => {
    let p = path.split(".");
    let o = obj;

    for (let i = 1; i = p.length; i++) {
        let e = p.shift();
        o = o[e];
    }
    return o;
}