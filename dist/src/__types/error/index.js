"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["NotConfiguredError"] = "CORE-01";
    ErrorCode["EntityNotPersistedError"] = "DB-01";
})(ErrorCode || (ErrorCode = {}));
exports.ErrorCode = ErrorCode;
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["NotConfiguredError"] = "NotConfiguredError";
    ErrorMessage["EntityNotPersistedError"] = "EntityNotPersistedError";
})(ErrorMessage || (ErrorMessage = {}));
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=index.js.map