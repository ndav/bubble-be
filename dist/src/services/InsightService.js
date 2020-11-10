"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsightService = void 0;
const moment_1 = __importDefault(require("moment"));
const _1 = require(".");
class InsightService {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async getBookingInsights() {
        _1.log.info('[InsightsService::getBookingInsights] Getting booking insights');
        const bookings = await this.bookingService.get();
        const aggregate = {};
        bookings.map((booking) => {
            const key = moment_1.default(booking.start).format('YYYY-MM');
            aggregate[key] = {
                month: key,
                durationAggregate: (aggregate[key] ? aggregate[key].durationAggregate : 0) +
                    booking.duration,
            };
        });
        return aggregate;
    }
}
exports.InsightService = InsightService;
//# sourceMappingURL=InsightService.js.map