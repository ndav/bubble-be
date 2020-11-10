"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env.BASE_PATH = '';
process.env.ENV = '';
process.env.NODE_ENV = '';
process.env.DB_CONNECTOR = '';
process.env.DB_NAME = '';
process.env.DB_HOST = '';
process.env.DB_PASSWORD = '';
process.env.DB_PORT = '';
process.env.DB_SCHEMA = '';
process.env.DB_USER = '';
process.env.TEST_DB_CONNECTOR = '';
process.env.TEST_DB_NAME = '';
process.env.TEST_DB_HOST = '';
process.env.TEST_DB_PASSWORD = '';
process.env.TEST_DB_PORT = '';
process.env.TEST_DB_SCHEMA = '';
process.env.TEST_DB_USER = '';
process.env.SERVICE_NAME = '';
process.env.PORT = '';
const _1 = __importDefault(require("."));
describe('Configuration Object', () => {
    it('should define a default configuration for config.basePath', async () => {
        expect(_1.default.basePath).toEqual('');
    });
    it('should define a default configuration for config.db?.connector', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.connector).toEqual('pg');
    });
    it('should define a default configuration for config.db?.database', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.database).toEqual('invalid-config');
    });
    it('should define an invalid configuration configuration for config.db?.host', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.host).toEqual('invalid-config');
    });
    it('should define an invalid configuration for config.db?.password no environment is found', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.password).toEqual('');
    });
    it('should define an invalid configuration for config.db?.port when none is supplied in the environment', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.port).toEqual('invalid-config');
    });
    it('should return an invalid configuration for config.db?.schemas if no environment is found', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.schemas).toEqual('invalid-config');
    });
    it('should define a default configuration for config.db?.user', async () => {
        var _a;
        expect((_a = _1.default.db) === null || _a === void 0 ? void 0 : _a.user).toEqual('invalid-config');
    });
    it('should define a default configuration for config.name', async () => {
        expect(_1.default.name).toEqual('user');
    });
    it('should define a default configuration for config.port', async () => {
        expect(_1.default.port).toEqual(4008);
    });
});
//# sourceMappingURL=index.test.js.map