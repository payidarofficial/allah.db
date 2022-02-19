"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonDatabase = void 0;
const Util_1 = require("../Util");
const fs_1 = require("fs");
const Error_1 = require("../Error/Error");
//allah.db
class JsonDatabase {
    path;
    data;
    constructor({ path = './database.json' } = {}) {
        this.path = path;
        if (!path.endsWith('.json'))
            path += '.json';
        this.data = {};
        if (!(0, fs_1.existsSync)(path))
            (0, Util_1.write)(this.data, this.path, true);
        this.data = JSON.parse((0, Util_1.readFile)(this.path));
    }
    //set
    set(key, value) {
        if (!key)
            throw new Error_1.DatabaseError('key');
        (0, Util_1.set)(this.data, key, value);
        return (0, Util_1.write)(this.data, this.path, true);
    }
    //get
    get(key) {
        if (!key)
            throw new Error_1.DatabaseError('key');
        return (0, Util_1.get)(this.data, key);
    }
    //delete
    delete(key) {
        if (!key)
            throw new Error_1.DatabaseError('key');
        (0, Util_1.unset)(this.data, key);
        return (0, Util_1.write)(this.data, this.path, true);
    }
    //push
    push(key, value) {
        if (!key)
            throw new Error_1.DatabaseError('key');
        const data = this.get(key);
        if (!data)
            return this.set(key, [value]);
        if (Array.isArray(data)) {
            let arr = data;
            arr.push(value);
            this.set(key, arr);
        }
        else {
            throw new Error_1.DatabaseError('array');
        }
        return (0, Util_1.write)(this.data, this.path, true);
    }
    //pull
    pull(key, value) {
        if (!key)
            throw new Error_1.DatabaseError('key');
        const data = this.get(key);
        if (!data)
            throw new Error_1.DatabaseError('not_found');
        if (Array.isArray(data)) {
            this.set(key, data.filter((e) => e !== value));
        }
        else {
            throw new Error_1.DatabaseError('array');
        }
        return (0, Util_1.write)(this.data, this.path, true);
    }
    //add
    add(key, num) {
        if (!key || !num)
            throw new Error_1.DatabaseError('key-value');
        let val = this.get(key);
        if (!Number(val))
            throw new Error_1.DatabaseError('number');
        if (isNaN(num))
            throw new Error_1.DatabaseError('number');
        val = Number(val);
        val += num;
        this.set(key, num);
        (0, Util_1.write)(this.data, this.path, true);
    }
    //substr
    substr(key, num) {
        if (!key || !num)
            throw new Error_1.DatabaseError('key-value');
        let val = this.get(key);
        if (!Number(val))
            throw new Error_1.DatabaseError('number');
        val = Number(val);
        val -= num;
        this.set(key, val);
        (0, Util_1.write)(this.data, this.path, true);
    }
    all() {
        return this.data;
    }
}
exports.JsonDatabase = JsonDatabase;
//# sourceMappingURL=Json.js.map