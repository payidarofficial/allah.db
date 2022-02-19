const { JsonDatabase } = require('../lib/index');

const db = new JsonDatabase({ path: './database.json' });

// set
db.set('allah', '1');
console.log(db.data);

// get
db.get('allah');

// delete
db.delete('allah');
console.log(db.data);

// push
db.push('allah_2', 1);
console.log(db.data);

// pull
db.pull('allah_2', 1);
console.log(db.data);

db.set('allah', 1);
console.log(db.data);

// add
db.add('allah', 2);
console.log(db.data);

// substr
db.substr('allah', 3);
console.log(db.data);

console.log(db.all());
