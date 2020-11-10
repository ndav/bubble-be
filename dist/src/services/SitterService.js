"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitterService = void 0;
const config_1 = __importDefault(require("../config"));
const _1 = require(".");
const BaseService_1 = __importDefault(require("./BaseService"));
class SitterService extends BaseService_1.default {
    async get() {
        try {
            const requestUrl = `${config_1.default.externalServiceBaseUrl}/search`;
            const response = await (await this.getClient())
                .get(requestUrl, {})
                .catch(() => {
                return { data: [] };
            });
            return response.data;
        }
        catch (error) {
            _1.log.error(error);
            throw error;
        }
    }
}
exports.SitterService = SitterService;
//# sourceMappingURL=SitterService.js.map