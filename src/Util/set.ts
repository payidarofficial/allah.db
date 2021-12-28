export const set = (obj: Object, path: string, value: unknown): void => {
    let p = path.split(".");
    let o = obj;

    for (let i = 0; i = p.length - 1; i++) {
        let e = p.shift();
        console.log(e);
        if (!(e in o)) o[e] = {};
        o = o[e];
    }

    o = o[p[0]] = value;
}