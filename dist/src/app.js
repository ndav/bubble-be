"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
const compression_1 = __importDefault(require("compression"));
const swagger_1 = __importDefault(require("./middleware/swagger"));
const routers_1 = __importDefault(require("./routers"));
const config_1 = __importDefault(require("./config"));
const services_1 = require("./services");
const db_1 = require("./db");
dotenv.config();
const app = express_1.default();
async function start() {
    const configureSecurityMiddleware = (app) => {
        app.use(helmet_1.default());
    };
    services_1.log.info('Using Config');
    services_1.log.info(JSON.stringify(config_1.default));
    services_1.log.info('Configuring Swagger.');
    const swaggerFile = path.resolve(__dirname, 'config/swagger.yaml');
    services_1.log.info(`Using: ${swaggerFile}`);
    await swagger_1.default(app, swaggerFile);
    configureSecurityMiddleware(app);
    const logFormat = ':date[iso] :method :url :status :res[content-length] - :response-time ms';
    app.use(morgan_1.default(logFormat, {}));
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    app.use(express_1.default.json({
        limit: '1mb',
    }));
    app.use(compression_1.default());
    app.use(config_1.default.basePath, routers_1.default);
    services_1.log.info(`Initalising database connections`);
    const db = db_1.Db.getInstance();
    const connections = await db.initialiseDatabaseConnections();
    connections.map((connection) => {
        services_1.log.info(`${connection.name}: ${connection.options.username}@${connection.options.host}:${connection.options.port}\n`, `connected: ${connection.isConnected}`);
    });
    if (process.env.NODE_ENV !== 'test') {
        app.listen(5008, () => {
            services_1.log.info(`Express server listening on port 5008 in development mode (liveness probe / readyness probe) (basepath: ${config_1.default.basePath}).`);
        });
    }
    return app.listen(config_1.default.port, () => {
        services_1.log.info(`Express server listening on port ${config_1.default.port} in development mode (basepath: ${config_1.default.basePath}).`);
    });
}
exports.start = start;
exports.default = app;
//# sourceMappingURL=app.js.map