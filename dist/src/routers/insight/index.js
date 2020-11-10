"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../../db");
const controllers_1 = require("../../controllers");
const services_1 = require("../../services");
const bookingService = new services_1.BookingService(db_1.Db.getInstance());
const insightsSerivce = new services_1.InsightService(bookingService);
const insightController = new controllers_1.InsightController(insightsSerivce);
const insightRouter = express_1.default.Router();
insightRouter.get('/', insightController.get);
exports.default = insightRouter;
//# sourceMappingURL=index.js.map