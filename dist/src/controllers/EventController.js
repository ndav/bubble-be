"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const http2_1 = require("http2");
const services_1 = require("../services");
class EventController {
    constructor(injestService) {
        this.injestService = injestService;
        this.injestBookings = async (req, res, next) => {
            try {
                services_1.log.info('[EventController::injestBookings]');
                await this.injestService.injestBookings();
                res.sendStatus(http2_1.constants.HTTP_STATUS_OK);
            }
            catch (err) {
                services_1.log.error(err);
                next(err);
            }
        };
    }
}
exports.EventController = EventController;
//# sourceMappingURL=EventController.js.map