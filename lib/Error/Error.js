"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const consola_1 = __importDefault(require("consola"));
var Errors;
(function (Errors) {
    Errors["key"] = "Allah'\u0131n verdi\u011Fi s\u00F6zc\u00FCkler ile bir tane anahtar belirtmen laz\u0131m";
    Errors["key-value"] = "Allah'\u0131n verdi\u011Fi s\u00F6zc\u00FCkler ile bir tane anahtar ve de\u011Fer belirtmen laz\u0131m";
    Errors["array"] = "Allah'\u0131n verdi\u011Fi array (liste)'i kullanmamam\u0131\u015Fs\u0131n";
    Errors["not_found"] = "Allah'\u0131n verisi yok";
    Errors["number"] = "Allah'\u0131n verdi\u011Fi say\u0131lar\u0131 kullan";
})(Errors || (Errors = {}));
class DatabaseError extends Error {
    constructor(id) {
        super();
        consola_1.default.error(`${Errors[id]}`);
    }
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=Error.js.map