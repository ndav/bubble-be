"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjestService = void 0;
const _1 = require(".");
const BaseService_1 = __importDefault(require("./BaseService"));
class InjestService extends BaseService_1.default {
    constructor(bookingService) {
        super();
        this.bookingService = bookingService;
    }
    async injestBookings() {
        try {
            const bookings = await this.getBookingsToInjest();
            bookings.forEach(async (booking) => {
                await this.bookingService.create(booking);
            });
        }
        catch (error) {
            _1.log.error(error);
            throw error;
        }
    }
    async getBookingsToInjest() {
        const bookings = await this.bookingService.getActiveSummary();
        const bookingInformation = [];
        bookings.confirmedBookings.forEach((booking) => {
            if (booking.bookingStatus === 1) {
                bookingInformation.push({
                    externalId: booking.id,
                    parentId: booking.parentId,
                    start: booking.scheduledStart,
                    duration: booking.scheduledDuration,
                });
            }
        });
        return bookingInformation;
    }
}
exports.InjestService = InjestService;
//# sourceMappingURL=InjestService.js.map