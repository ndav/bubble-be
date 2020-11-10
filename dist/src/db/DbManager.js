"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbManager = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("./entities");
class DbManager {
    constructor(readConnectionOptions, writeConnectionOptions) {
        this.readConnectionOptions = readConnectionOptions;
        this.writeConnectionOptions = writeConnectionOptions;
    }
    get readOnlyDbConnection() {
        if (!this.readConnection) {
            throw new Error('Database connections not initialised');
        }
        return this.readConnection;
    }
    get readWriteDbConnection() {
        if (!this.writeConnection) {
            throw new Error('Database connections not initialised');
        }
        return this.writeConnection;
    }
    async setup() {
        return await this.initTypeOrm();
    }
    async close() {
        if (!this.readConnection && !this.writeConnection) {
            throw new Error('Database connections not initialised');
        }
        try {
            if (this.readConnection) {
                await this.readConnection.close();
            }
            if (this.writeConnection) {
                await this.writeConnection.close();
            }
        }
        catch (e) {
            throw e;
        }
    }
    async initTypeOrm() {
        try {
            const entities = [entities_1.BookingEntity];
            const connections = await typeorm_1.createConnections([
                {
                    ...this.readConnectionOptions,
                    entities,
                },
                {
                    ...this.writeConnectionOptions,
                    entities,
                },
            ]);
            this.readConnection = typeorm_1.getConnection('read-connection');
            this.writeConnection = typeorm_1.getConnection('write-connection');
            return connections;
        }
        catch (e) {
            throw e;
        }
    }
}
exports.DbManager = DbManager;
//# sourceMappingURL=DbManager.js.map