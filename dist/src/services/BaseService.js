"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
class BaseService {
    async getClient() {
        this.instance = axios_1.default.create({
            baseURL: config_1.default.externalServiceBaseUrl,
            headers: { Authorization: `Bearer ${this.getAuth()}` },
            responseType: 'json',
        });
        return this.instance;
    }
    getAuth() {
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE2MDUwMTUwNDIsImV4cCI6MTY0OTI1MTg0Mn0.zswIZYoyQ-QSX5xaHJ24JoS7s3mWkjAKRs-6UgGutx4';
    }
}
exports.default = BaseService;
//# sourceMappingURL=BaseService.js.map