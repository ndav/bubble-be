"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotConfiguredError = void 0;
const http2_1 = require("http2");
const __utils_1 = require("../__utils");
class NotConfiguredError extends __utils_1.BaseError {
    constructor() {
        super("CORE-01", "NotConfiguredError", http2_1.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
    }
}
exports.NotConfiguredError = NotConfiguredError;
//# sourceMappingURL=NotConfiguredError.js.map