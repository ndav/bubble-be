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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const isTest = process.env.NODE_ENV === 'test' ? true : false;
const INVALID_CONFIG = 'invalid-config';
const convertToBool = (value) => {
    if (value && (value === 'true' || value === 1)) {
        return true;
    }
    return false;
};
const config = {
    basePath: process.env.BASE_PATH || '',
    externalServiceBaseUrl: 'http://api-staging.joinbubble.co.uk/api',
    db: {
        connector: (isTest ? process.env.TEST_DB_CONNECTOR : process.env.DB_CONNECTOR) ||
            'pg',
        database: (isTest ? process.env.TEST_DB_NAME : process.env.DB_NAME) ||
            INVALID_CONFIG,
        host: (isTest ? process.env.TEST_DB_HOST : process.env.DB_HOST) ||
            INVALID_CONFIG,
        password: (isTest ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD) || '',
        port: (isTest ? process.env.TEST_DB_PORT : process.env.DB_PORT) ||
            INVALID_CONFIG,
        schemas: (isTest ? process.env.TEST_DB_SCHEMA : process.env.DB_SCHEMA) ||
            INVALID_CONFIG,
        user: (isTest ? process.env.TEST_DB_USER : process.env.DB_USER) ||
            INVALID_CONFIG,
        ssl: (isTest
            ? convertToBool(process.env.TEST_DB_SCHEMA_SSL)
            : convertToBool(process.env.DB_SCHEMA_SSL)) || false,
    },
    env: process.env.NODE_ENV || 'test',
    name: process.env.SERVICE_NAME || 'user',
    port: parseInt(process.env.PORT || '4008', 10),
};
exports.default = config;
//# sourceMappingURL=index.js.map