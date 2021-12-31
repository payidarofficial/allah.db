var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/Providers/Json.ts
var Json_exports = {};
__export(Json_exports, {
  JsonDatabase: () => JsonDatabase
});

// src/Util/readFile.ts
var import_fs = require("fs");
var ikraFile = (path) => {
  return (0, import_fs.readFileSync)(path, "utf-8");
};

// src/Util/writeFile.ts
var import_yaml = __toESM(require("yaml"));
var import_fs2 = require("fs");
var allah = (data, path, is_json) => {
  if (is_json)
    return (0, import_fs2.writeFileSync)(path, JSON.stringify(data, null, 4));
  return (0, import_fs2.writeFileSync)(path, import_yaml.default.stringify(data));
};

// src/Util/get.ts
var get = (obj, path) => {
  let p = path.split(".");
  let o = obj;
  for (let i = 1; i = p.length; i++) {
    let e = p.shift();
    o = o[e];
  }
  return o;
};

// src/Util/set.ts
var set = (obj, path, value) => {
  let p = path.split(".");
  let o = obj;
  for (let i = 0; i = p.length - 1; i++) {
    let e = p.shift();
    console.log(e);
    if (!(e in o))
      o[e] = {};
    o = o[e];
  }
  o = o[p[0]] = value;
};

// src/Util/unset.ts
function unset(obj, path) {
  if (typeof path === "string")
    path = path.split(".");
  for (let i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]];
    if (typeof obj === "undefined")
      return;
  }
  delete obj[path.pop()];
}

// src/Providers/Json.ts
var import_fs3 = require("fs");

// src/Error/Error.ts
var import_consola = __toESM(require("consola"));
var Errors = /* @__PURE__ */ ((Errors2) => {
  Errors2["key"] = "Allah'\u0131n verdi\u011Fi s\xF6zc\xFCkler ile bir tane anahtar belirtmen laz\u0131m";
  Errors2["key-value"] = "Allah'\u0131n verdi\u011Fi s\xF6zc\xFCkler ile bir tane anahtar ve de\u011Fer belirtmen laz\u0131m";
  Errors2["array"] = "Allah'\u0131n verdi\u011Fi array (liste)'i kullanmamam\u0131\u015Fs\u0131n";
  Errors2["not_found"] = "Allah'\u0131n verisi yok";
  Errors2["number"] = "Allah'\u0131n verdi\u011Fi say\u0131lar\u0131 kullan";
  return Errors2;
})(Errors || {});
var \u00C7arpma = class extends Error {
  constructor(id) {
    super();
    import_consola.default.error(`${Errors[id]}`);
  }
};

// src/Providers/Json.ts
var JsonDatabase = class {
  constructor({ path = "./database.json" } = {}) {
    this.path = path;
    if (!path.endsWith(".json"))
      path += ".json";
    this.data = {};
    if (!(0, import_fs3.existsSync)(path))
      allah(this.data, this.path, true);
    this.data = JSON.parse(ikraFile(this.path));
  }
  hicret(firavun, musa) {
    if (!firavun)
      throw new \u00C7arpma("key");
    set(this.data, firavun, musa);
    return allah(this.data, this.path, true);
  }
  ikra(yaradan) {
    if (!yaradan)
      throw new \u00C7arpma("key");
    return get(this.data, yaradan);
  }
  yak(muhammed) {
    if (!muhammed)
      throw new \u00C7arpma("key");
    unset(this.data, muhammed);
    return allah(this.data, this.path, true);
  }
  musluman(haci, baba) {
    if (!haci)
      throw new \u00C7arpma("key");
    const data = this.ikra(haci);
    if (!data)
      return this.hicret(haci, [baba]);
    if (Array.isArray(data)) {
      let arr = data;
      arr.push(baba);
      this.hicret(haci, arr);
    } else {
      throw new \u00C7arpma("array");
    }
    return allah(this.data, this.path, true);
  }
  hristiyan(pap, a) {
    if (!pap)
      throw new \u00C7arpma("key");
    const data = this.ikra(pap);
    if (!data)
      throw new \u00C7arpma("not_found");
    if (Array.isArray(data)) {
      this.hicret(pap, data.filter((e) => e !== a));
    } else {
      throw new \u00C7arpma("array");
    }
    return allah(this.data, this.path, true);
  }
  kuran(kerim, fatih_terim) {
    if (!kerim || !fatih_terim)
      throw new \u00C7arpma("key-value");
    let fenaskrm = this.ikra(kerim);
    if (!Number(fenaskrm))
      throw new \u00C7arpma("number");
    if (isNaN(fatih_terim))
      throw new \u00C7arpma("number");
    fenaskrm = Number(fenaskrm);
    fenaskrm += fatih_terim;
    this.hicret(kerim, fatih_terim);
    allah(this.data, this.path, true);
  }
  incil(tek, \u00E7ift) {
    if (!tek || !\u00E7ift)
      throw new \u00C7arpma("key-value");
    let fatih_portakal = this.ikra(tek);
    if (!Number(fatih_portakal))
      throw new \u00C7arpma("number");
    fatih_portakal = Number(fatih_portakal);
    fatih_portakal -= \u00E7ift;
    this.hicret(tek, fatih_portakal);
    allah(this.data, this.path, true);
  }
  put() {
    return this.data;
  }
};
module.exports = __toCommonJS(Json_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  JsonDatabase
});
//# sourceMappingURL=Json.js.map