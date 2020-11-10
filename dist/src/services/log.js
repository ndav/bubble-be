"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const __utils_1 = require("../__utils");
const config_1 = __importDefault(require("../config"));
exports.log = __utils_1.Logger('debug', config_1.default.name);
//# sourceMappingURL=log.js.map