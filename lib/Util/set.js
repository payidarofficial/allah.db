var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/Util/set.ts
var set_exports = {};
__export(set_exports, {
  set: () => set
});
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
module.exports = __toCommonJS(set_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  set
});
//# sourceMappingURL=set.js.map