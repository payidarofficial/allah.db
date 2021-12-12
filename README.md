# allah.db

# How to install
```
npm install allah.db
yarn add allah.db
```

# How to use allah.db
```js
import { JsonDatabase } from "allah.db";

const db = new JsonDatabase({ path: "./allah.json" });

// set
db.hicret("allah", "1");

// get
db.ikra("allah");

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