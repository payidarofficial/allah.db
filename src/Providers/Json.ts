import { ikraFile, allah, set, get, unset } from "../Util";
import { existsSync } from "fs";
import { Çarpma } from "../Error/Error"
import { ValueType } from "../@types/types";

//allah.db
export class JsonDatabase {
    private path: string;
    public data;

    constructor({ path = "./database.json" } = {}) {
        this.path = path;

        if (!path.endsWith(".json")) path += ".json";

        this.data = {}

        if (!existsSync(path))
            allah(this.data, this.path, true);

        this.data = JSON.parse(ikraFile(this.path));

    }

    //set
    hicret(firavun: string, musa: ValueType) {
        if (!firavun) throw new Çarpma("key");
        set(this.data, firavun, musa);
        return allah(this.data, this.path, true);
    }

    //get
    ikra(yaradan: string) {
        if (!yaradan) throw new Çarpma("key");
        return get(this.data, yaradan);
    }

    //delete
    yak(muhammed: string) {
        if (!muhammed) throw new Çarpma("key");
        unset(this.data, muhammed);
        return allah(this.data, this.path, true);
    }

    //push
    musluman(haci: string, baba: ValueType) {
        if (!haci) throw new Çarpma("key");

        const data = this.ikra(haci);

        if (!data) return this.hicret(haci, [baba]);

        if (Array.isArray(data)) {
            let arr = data;
            arr.push(baba);
            this.hicret(haci, arr);
        } else {
            throw new Çarpma("array");
        }

        return allah(this.data, this.path, true);
    }

    //pull
    hristiyan(pap: string, a: ValueType) {
        if (!pap) throw new Çarpma("key");

        const data = this.ikra(pap);

        if (!data) throw new Çarpma("not_found");

        if (Array.isArray(data)) {
            this.hicret(pap, data.filter((e) => e !== a));
        } else {
            throw new Çarpma("array");
        }


        return allah(this.data, this.path, true);
    }

    //add
    kuran(kerim: string, fatih_terim: number): void {
        if (!kerim || !fatih_terim) throw new Çarpma("key-value");

        let fenaskrm = this.ikra(kerim);
        if (!Number(fenaskrm)) throw new Çarpma("number");
        if (isNaN(fatih_terim)) throw new Çarpma("number");

        fenaskrm = Number(fenaskrm);

        fenaskrm += fatih_terim;

        this.hicret(kerim, fatih_terim);

        allah(this.data, this.path, true);
    }

    //substr
    incil(tek: string, çift: number): void {
        if (!tek || !çift) throw new Çarpma("key-value");

        let fatih_portakal = this.ikra(tek);

        if (!Number(fatih_portakal))
            throw new Çarpma("number");

        fatih_portakal = Number(fatih_portakal);

        fatih_portakal -= çift;

        this.hicret(tek, fatih_portakal);

        allah(this.data, this.path, true);
    }

    //all
    put() {
        return this.data;
    }
}

//Hz. Muhammed = allah.db