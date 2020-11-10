"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_express_middleware_1 = __importDefault(require("swagger-express-middleware"));
const configureSwaggerMiddleware = (app, swaggerFile) => {
    return new Promise((resolve, reject) => {
        console.info('Swagger Middleware starting...');
        swagger_express_middleware_1.default(swaggerFile, app, (err, middleware) => {
            if (err) {
                console.error('Swagger Middleware failed!');
                reject(err);
            }
            app.use(middleware.metadata(), middleware.CORS(), middleware.files(), middleware.parseRequest(), middleware.validateRequest());
            console.info('Swagger Middleware started!');
            resolve(middleware);
        });
    });
};
exports.default = configureSwaggerMiddleware;
//# sourceMappingURL=swagger.js.map