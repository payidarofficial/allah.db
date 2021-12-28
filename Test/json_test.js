const { JsonDatabase } = require("../lib/index");

const db = new JsonDatabase({ path: "./database.json" });

// set
db.hicret("allah", "1");
console.log(db.data);

// get
db.ikra("allah");

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