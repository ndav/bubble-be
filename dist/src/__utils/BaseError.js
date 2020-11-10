"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(code, message, statusCode) {
        super();
        this.code = code;
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = BaseError;
//# sourceMappingURL=BaseError.js.map