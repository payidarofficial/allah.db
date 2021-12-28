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

// src/Util/index.ts
var Util_exports = {};
__export(Util_exports, {
  allah: () => allah,
  get: () => get,
  ikraFile: () => ikraFile,
  set: () => set,
  unset: () => unset
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
module.exports = __toCommonJS(Util_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allah,
  get,
  ikraFile,
  set,
  unset
});
