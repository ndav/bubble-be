"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g;
const dotenv = __importStar(require("dotenv"));
require("reflect-metadata");
const config_1 = __importDefault(require("../../config"));
dotenv.config();
const postgresConnection = {
    host: (_a = config_1.default.db) === null || _a === void 0 ? void 0 : _a.host,
    type: 'postgres',
    name: 'read-connection',
    port: (_b = config_1.default.db) === null || _b === void 0 ? void 0 : _b.port,
    username: (_c = config_1.default.db) === null || _c === void 0 ? void 0 : _c.user,
    password: (_d = config_1.default.db) === null || _d === void 0 ? void 0 : _d.password,
    database: (_e = config_1.default.db) === null || _e === void 0 ? void 0 : _e.database,
    synchronize: false,
    logging: true,
    schema: (_f = config_1.default.db) === null || _f === void 0 ? void 0 : _f.schemas,
    ssl: ((_g = config_1.default.db) === null || _g === void 0 ? void 0 : _g.ssl) || false,
};
module.exports = postgresConnection;
//# sourceMappingURL=readConnection.js.map