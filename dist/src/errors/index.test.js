"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('EntityNotPersisted', () => {
    it('should exist and match the error signature', async () => {
        const error = new _1.EntityNotPersisted();
        expect(error).toBeDefined;
        expect(error).toBeInstanceOf(Error);
    });
});
describe('NotConfiguredError', () => {
    it('should exist and match the error signature', async () => {
        const error = new _1.NotConfiguredError();
        expect(error).toBeDefined;
        expect(error).toBeInstanceOf(Error);
    });
});
//# sourceMappingURL=index.test.js.map