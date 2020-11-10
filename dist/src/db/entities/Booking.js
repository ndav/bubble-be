"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingEntity = void 0;
const typeorm_1 = require("typeorm");
const tableName = 'booking';
let BookingEntity = class BookingEntity {
    constructor({ externalId, parentId, start, duration, } = {}) {
        if (externalId !== undefined) {
            this.externalId = externalId;
        }
        if (parentId !== undefined) {
            this.parentId = parentId;
        }
        if (start !== undefined) {
            this.start = start;
        }
        if (duration !== undefined) {
            this.duration = duration;
        }
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], BookingEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: '255', unique: true }),
    typeorm_1.Index(`IDX_${tableName}:externalId`),
    __metadata("design:type", String)
], BookingEntity.prototype, "externalId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: '255' }),
    typeorm_1.Index(`IDX_${tableName}:parentId`),
    __metadata("design:type", String)
], BookingEntity.prototype, "parentId", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], BookingEntity.prototype, "start", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], BookingEntity.prototype, "duration", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], BookingEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], BookingEntity.prototype, "updatedAt", void 0);
BookingEntity = __decorate([
    typeorm_1.Entity({ name: tableName }),
    __metadata("design:paramtypes", [Object])
], BookingEntity);
exports.BookingEntity = BookingEntity;
//# sourceMappingURL=Booking.js.map