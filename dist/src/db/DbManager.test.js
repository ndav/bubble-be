"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbManager_1 = require("./DbManager");
const jest_mock_extended_1 = require("jest-mock-extended");
describe('DbManager', () => {
    it('should exist', async () => {
        const readConnectionMock = jest_mock_extended_1.mock();
        const writeConnectionMock = jest_mock_extended_1.mock();
        const db = new DbManager_1.DbManager(readConnectionMock, writeConnectionMock);
        expect(db).toBeDefined();
    });
    it('should throw an error if the read connection is not initialised', async () => {
        const readConnectionMock = jest_mock_extended_1.mock({ type: 'postgres' });
        const writeConnectionMock = jest_mock_extended_1.mock({ type: 'postgres' });
        const db = new DbManager_1.DbManager(readConnectionMock, writeConnectionMock);
        expect(db).toBeDefined();
        expect(() => {
            db.readOnlyDbConnection;
        }).toThrow(new Error('Database connections not initialised'));
    });
    it('should throw an error if the write connection is not initialised', async () => {
        const readConnectionMock = jest_mock_extended_1.mock();
        const writeConnectionMock = jest_mock_extended_1.mock();
        const db = new DbManager_1.DbManager(readConnectionMock, writeConnectionMock);
        expect(db).toBeDefined();
        expect(() => {
            db.readWriteDbConnection;
        }).toThrow(new Error('Database connections not initialised'));
    });
});
//# sourceMappingURL=DbManager.test.js.map