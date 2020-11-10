"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const config_1 = __importDefault(require("../config"));
const _1 = require(".");
const BaseService_1 = __importDefault(require("./BaseService"));
const repositories_1 = require("../db/repositories");
class BookingService extends BaseService_1.default {
    constructor(dbSchema) {
        super();
        this.dbSchema = dbSchema;
    }
    async getActiveSummary() {
        try {
            const requestUrl = `${config_1.default.externalServiceBaseUrl}/booking/activesummary`;
            const response = await (await this.getClient()).get(requestUrl, {});
            return response.data;
        }
        catch (error) {
            _1.log.error(error);
            throw error;
        }
    }
    async getBookingInformation(id) {
        try {
            const requestUrl = `${config_1.default.externalServiceBaseUrl}/booking/${id}`;
            const response = await (await this.getClient()).get(requestUrl, {});
            return response.data;
        }
        catch (error) {
            _1.log.error(error);
            throw error;
        }
    }
    async create(request) {
        const readOnly = false;
        const transaction = await this.dbSchema.getTransaction(readOnly);
        try {
            const categoryRepository = this.dbSchema.getCustomRepository(transaction, repositories_1.BookingRepository);
            _1.log.info(`[CategoryService::create] Creating Category`);
            const category = categoryRepository.create({
                ...request,
            });
            const created = await categoryRepository.save(category);
            await transaction.commitTransaction();
            return created;
        }
        catch (error) {
            _1.log.error(error);
            await transaction.rollbackTransaction();
            throw error;
        }
        finally {
            transaction.release();
        }
    }
    async get() {
        const queryRunner = await this.dbSchema.getQueryRunner();
        try {
            const bookingRepository = this.dbSchema.getCustomRepository(queryRunner, repositories_1.BookingRepository);
            const bookings = await bookingRepository.findAll();
            return bookings;
        }
        catch (error) {
            _1.log.error(error);
            throw error;
        }
        finally {
            queryRunner.release();
        }
    }
}
exports.BookingService = BookingService;
//# sourceMappingURL=BookingService.js.map