"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = void 0;
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = require("fs");
const write = (data, path, is_json) => {
    if (is_json)
        return (0, fs_1.writeFileSync)(path, JSON.stringify(data, null, 4));
    return (0, fs_1.writeFileSync)(path, yaml_1.default.stringify(data));
};
exports.write = write;
//# sourceMappingURL=writeFile.js.map