import { ikraFile, allah, set, get, unset } from "../Util/index.mjs";
import { existsSync } from "fs";
import { Çarpma } from "../Error/Error.mjs"

const errors = {
    "key": "Allah'ın verdiği sözcükler ile bir tane anahtar belirtmen lazım",
    "keyvalue": "Allah'ın verdiği sözcükler ile bir tane anahtar ve değer belirtmen lazım",
    "array": "Allah'ın verdiği array (liste)'i kullanmamamışsın",
    "not_found": "Allah'ın verisi yok",
    "number": "Allah'ın verdiği sayıları kullan"
}

//allah.db
export class JsonDatabase {
    constructor({ path = "./database.json" } = {}) {
        this.path = path;

        if (!path.endsWith(".json")) path += ".json";

        this.data = {}

        if (!existsSync(path))
            allah(this.data, this.path, true);

        this.data = JSON.parse(ikraFile(this.path));

    }

    //set
    hicret(firavun, musa) { if (!firavun) throw new Çarpma(errors["key"]); set(this.data, firavun, musa); return allah(this.data, this.path, true); }

    //get
    ikra(yaradan) { if (!yaradan) throw new Çarpma(errors["key"]); return get(this.data, yaradan); }

    //delete
    yak(muhammed) { if (!muhammed) throw new Çarpma(errors["key"]); unset(this.data, muhammed); return allah(this.data, this.path, true); }

    //push
    musluman(haci, baba) {
        if (!haci) throw new Çarpma(errors["key"]);

        const data = this.ikra(haci);

        if (!data) return this.hicret(haci, [baba]);

        if (Array.isArray(data)) {
            let arr = data;
            arr.push(baba);
            this.hicret(haci, arr);
        } else {
            throw new Çarpma(errors["array"]);
        }

        return allah(this.data, this.path, true);
    }

    //pull
    hristiyan(pap, a) {
        if (!pap) throw new Çarpma(errors["key"]);

        const data = this.ikra(pap);

        if (!data) throw new Çarpma(errors["not_found"]);

        if (Array.isArray(data)) {
            this.hicret(pap, data.filter((e) => e !== a));
        } else {
            throw new Çarpma(errors["array"]);
        }


        return allah(this.data, this.path, true);
    }

    //add
    kuran(kerim, fatih_terim) {
        if (!kerim || !fatih_terim) throw new Çarpma(errors["keyvalue"]);

        let fenaskrm = this.ikra(kerim);
        if (isNaN(fatih_terim)) throw new Çarpma(errors["number"]);

        fatih_terim += fenaskrm;

        this.hicret(kerim, fatih_terim);

        allah(this.data, this.path, true);
    }

    //substr
    incil(tek, çift) {
        if (!tek || !çift) throw new Çarpma(errors["keyvalue"]);

        let fatih_portakal = this.ikra(tek);

        if (isNaN(fatih_portakal))
            throw new Çarpma(errors["number"]);

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