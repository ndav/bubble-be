"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http2_1 = require("http2");
const config_1 = __importDefault(require("../config"));
const insight_1 = __importDefault(require("./insight"));
const event_1 = __importDefault(require("./event"));
const router = express_1.default.Router();
router.get('/', (_, res) => res.sendStatus(200));
router.get('/healthcheck/ping', (_, res) => res.sendStatus(200));
router.get('/healthcheck/ready', async (_, res) => {
    res.status(http2_1.constants.HTTP_STATUS_OK).send({
        message: 'ok',
        version: process.env.npm_package_version,
        service: config_1.default.name,
    });
});
router.use('/insight', insight_1.default);
router.use('/event', event_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map