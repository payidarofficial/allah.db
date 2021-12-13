# allahc.c.db

# How to install
```
npm install allahc.c.db
yarn add allahc.c.db
```

# How to use allahc.c.db

```js
import { JsonDatabase } from "allahc.c.db";
// import { YamlDatabase } from "allahc.c.db";

const db = new JsonDatabase({ path: "./allah.json" });
// Or: const db = new YamlDatabase({ path: "./allah.yaml" });

// set
db.hicret("allah", "1");

// get
const data = db.ikra("allah");
console.log(data); // Output: "1";

// delete
db.yak("allah");

// push
db.musluman("allah_2", 1);

// pull
db.hristiyan("allah_2", 1);

db.hicret("allah", 1);

// add
db.kuran("allah", 2);

// substr
db.incil("allah", 3);

// all
console.log(db.put());
```

```diff
+ Allah istedi yaptık
- Şeytana diss
``` 