import { ikraFile, allah } from "../Util/index.mjs";
import { existsSync } from "fs";
import { Çarpma } from "../Error/Error.mjs"

import _ from "lodash";
const { set, get, unset, pull } = _;

//allah.db
export class JsonDatabase {
    constructor({ path = "./database.json" } = {}) {
        this.path = path;

        this.data = {}

        if (!existsSync(path))
            allah(this.data, this.path);

        this.data = JSON.parse(ikraFile(this.path));

    }

    //set
    hicret(firavun, musa) {
        set(this.data, firavun, musa);

        return allah(this.data, this.path);
    }

    //get
    ikra(yaradan) {
        return get(this.data, yaradan);
    }

    //delete
    yak(muhammed) {
        unset(this.data, muhammed);

        return allah(this.data, this.path);
    }

    //push
    musluman(haci, baba) {
        const data = this.ikra(haci);

        if (!data) this.hicret(haci, [baba]);

        if (Array.isArray(data)) {
            let arr = data;
            arr.push(baba);
            this.hicret(haci, arr);
        } else {
            throw new Çarpma("Allah'ın verdiği arrayi kullanmamışsın");
        }

        return allah(this.data, this.path);
    }

    //pull
    hristiyan(pap, a) {
        const data = this.ikra(pap);

        if (!data) throw new Çarpma("Allah'ın verisi yok.");

        if (Array.isArray(data)) {
            pull(data, a);
            this.hicret(pap, data);
        } else {
            throw new Çarpma("Allah'ın verdiği arrayi kullanmamışsın");
        }


        return allah(this.data, this.path);
    }

    //add
    kuran(kerim, fatih_terim) {
        let fenaskrm = this.ikra(kerim);
        if (isNaN(fatih_terim)) throw new Çarpma("Allah'ın verdiği sayıları kullan.");

        fatih_terim += fenaskrm;

        this.hicret(kerim, fatih_terim);

        allah(this.data, this.path);
    }

    //substr
    incil(tek, çift) {
        let fatih_portakal = this.ikra(tek);

        if (isNaN(fatih_portakal))
            throw new Çarpma("Allah'ın verdiği sayıları kullan");

        fatih_portakal -= çift;

        this.hicret(tek, fatih_portakal);

        allah(this.data, this.path);
    }

    //all
    put() {
        return this.data;
    }
}

//Hz. Muhammed = allah.db