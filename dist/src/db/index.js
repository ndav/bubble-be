"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const DbManager_1 = require("./DbManager");
const db_1 = require("../config/db");
class Db {
    constructor(readConnectionOptions, writeConnectionOptions) {
        this.readConnectionOptions = readConnectionOptions;
        this.writeConnectionOptions = writeConnectionOptions;
        this.dbManager = new DbManager_1.DbManager(readConnectionOptions, writeConnectionOptions);
    }
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db(db_1.readConnection, db_1.writeConnection);
        }
        return Db.instance;
    }
    getDbManager() {
        return this.dbManager;
    }
    async closeDatabaseConnections() {
        return this.getDbManager().close();
    }
    async initialiseDatabaseConnections() {
        return this.getDbManager().setup();
    }
    async getTransaction(readOnly = true, isolationLevel = 'SERIALIZABLE') {
        const connection = readOnly
            ? this.getDbManager().readOnlyDbConnection
            : this.getDbManager().readWriteDbConnection;
        const queryRunner = connection.createQueryRunner();
        await queryRunner.startTransaction(isolationLevel);
        if (readOnly && isolationLevel === 'SERIALIZABLE') {
            queryRunner.query('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE READ ONLY DEFERRABLE');
        }
        return queryRunner;
    }
    async getQueryRunner() {
        const connection = this.getDbManager().readOnlyDbConnection;
        const queryRunner = await connection.createQueryRunner();
        return queryRunner;
    }
    getCustomRepository(queryRunner, customRepository) {
        const entityManager = queryRunner.manager;
        return entityManager.getCustomRepository(customRepository);
    }
}
exports.Db = Db;
//# sourceMappingURL=index.js.map