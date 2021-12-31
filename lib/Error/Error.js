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

// src/Error/Error.ts
var Error_exports = {};
__export(Error_exports, {
  \u00C7arpma: () => \u00C7arpma
});
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
module.exports = __toCommonJS(Error_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  \u00C7arpma
});
//# sourceMappingURL=Error.js.map