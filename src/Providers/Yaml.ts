import { readFile, write, set, get, unset } from '../Util';
import { existsSync } from 'fs';
import { DatabaseError } from '../Error/Error';
import { ValueType } from '../@types/types';
import YAML from 'yaml';

//write.db
export class YamlDatabase {
    private path: string;
    public data;

    constructor({ path = './database.yaml' } = {}) {
        this.path = path;

        if (!path.endsWith('.yaml')) this.path += '.yaml';

        this.data = {};

        if (!existsSync(path)) write(this.data, this.path, false);

        this.data = YAML.parse(readFile(this.path));

        if (!this.data) this.data = {};
    }

    //set
    set(key: string, value: ValueType) {
        if (!key) throw new DatabaseError('key');
        set(this.data, key, value);
        return write(this.data, this.path, true);
    }

    //get
    get(key: string) {
        if (!key) throw new DatabaseError('key');
        return get(this.data, key);
    }

    //delete
    delete(key: string) {
        if (!key) throw new DatabaseError('key');
        unset(this.data, key);
        return write(this.data, this.path, true);
    }

    //push
    push(key: string, value: ValueType) {
        if (!key) throw new DatabaseError('key');

        const data = this.get(key);

        if (!data) return this.set(key, [value]);

        if (Array.isArray(data)) {
            let arr = data;
            arr.push(value);
            this.set(key, arr);
        } else {
            throw new DatabaseError('array');
        }

        return write(this.data, this.path, true);
    }

    //pull
    pull(key: string, value: ValueType) {
        if (!key) throw new DatabaseError('key');

        const data = this.get(key);

        if (!data) throw new DatabaseError('not_found');

        if (Array.isArray(data)) {
            this.set(
                key,
                data.filter((e) => e !== value),
            );
        } else {
            throw new DatabaseError('array');
        }

        return write(this.data, this.path, true);
    }

    //add
    add(key: string, num: number): void {
        if (!key || !num) throw new DatabaseError('key-value');

        let fenaskrm = this.get(key);
        if (!Number(fenaskrm)) throw new DatabaseError('number');
        if (isNaN(num)) throw new DatabaseError('number');

        fenaskrm = Number(fenaskrm);

        fenaskrm += num;

        this.set(key, num);

        write(this.data, this.path, true);
    }

    //substr
    substr(key: string, num: number): void {
        if (!key || !num) throw new DatabaseError('key-value');

        let val = this.get(key);

        if (!Number(val)) throw new DatabaseError('number');

        val = Number(val);

        val -= num;

        this.set(key, val);

        write(this.data, this.path, true);
    }

    all() {
        return this.data;
    }
}
