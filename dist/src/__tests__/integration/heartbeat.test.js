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
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importStar(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET /healthcheck/ping', () => {
    let server;
    beforeAll(async () => {
        server = await app_1.start();
    });
    afterAll(async (done) => {
        await server.close(done);
    });
    describe('health check', () => {
        it('heartbeat API Request (ping)', async () => {
            const result = await supertest_1.default(app_1.default).get('/healthcheck/ping');
            expect(result.status).toEqual(200);
        });
    });
    describe('health check', () => {
        it('heartbeat API Request (ready)', async () => {
            const result = await supertest_1.default(app_1.default).get('/healthcheck/ready');
            expect(result.status).toEqual(200);
        });
    });
    describe('/', () => {
        it('Root (/) available', async () => {
            const result = await supertest_1.default(app_1.default).get('/');
            expect(result.status).toEqual(200);
        });
    });
});
//# sourceMappingURL=heartbeat.test.js.map