# allahc.c.db

# How to install
```
npm install allahc.c.db
yarn add allahc.c.db
```

# How to use allahc.c.db

```js
import { JsonDatabase } from "allahc.c.db";
import { YamlDatabase } from "allahc.c.db";

// Or:
const { JsonDatabase } = require("allahc.c.db");
const { YamlDatabase } = require("allahc.c.db");

const db = new JsonDatabase({ path: "./db.json" });
const db = new YamlDatabase({ path: "./db.yaml" });

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
```

```diff
+ Allah istedi yaptık
- Şeytana diss
``` 
