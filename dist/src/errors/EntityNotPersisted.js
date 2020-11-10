"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotPersisted = void 0;
const http2_1 = require("http2");
const __utils_1 = require("../__utils");
class EntityNotPersisted extends __utils_1.BaseError {
    constructor() {
        super("DB-01", "EntityNotPersistedError", http2_1.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR);
    }
}
exports.EntityNotPersisted = EntityNotPersisted;
//# sourceMappingURL=EntityNotPersisted.js.map