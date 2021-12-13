import { YamlDatabase } from "../Providers/Yaml.mjs";

const db = new YamlDatabase();

// set
db.hicret("allah", "1");
console.log(db.data);

// get
console.log(db.ikra("allah"));

// delete
db.yak("allah");
console.log(db.data);

// push
db.musluman("allah_2", 1);
console.log(db.data);

// pull
db.hristiyan("allah_2", 1);
console.log(db.data);

db.hicret("allah", 1);
console.log(db.data);

// add
db.kuran("allah", 2);
console.log(db.data);

// substr
db.incil("allah", 3);
console.log(db.data);


console.log(db.put());