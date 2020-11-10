"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightController = void 0;
const http2_1 = require("http2");
const services_1 = require("../services");
class InsightController {
    constructor(insightsService) {
        this.insightsService = insightsService;
        this.get = async (req, res, next) => {
            try {
                services_1.log.info('[InsightsController::get]');
                const response = await this.insightsService.getBookingInsights();
                res.status(http2_1.constants.HTTP_STATUS_OK).send(response);
            }
            catch (err) {
                services_1.log.error(err);
                next(err);
            }
        };
    }
}
exports.InsightController = InsightController;
//# sourceMappingURL=InsightController.js.map