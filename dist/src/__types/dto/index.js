"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStatusTypes = void 0;
__exportStar(require("./BookingDto"), exports);
__exportStar(require("./InsightDto"), exports);
var BookingStatusTypes;
(function (BookingStatusTypes) {
    BookingStatusTypes[BookingStatusTypes["Requested"] = 0] = "Requested";
    BookingStatusTypes[BookingStatusTypes["Accepted"] = 1] = "Accepted";
    BookingStatusTypes[BookingStatusTypes["CompletedNotPaid"] = 2] = "CompletedNotPaid";
    BookingStatusTypes[BookingStatusTypes["Rejected"] = 3] = "Rejected";
    BookingStatusTypes[BookingStatusTypes["CompletedAndPaid"] = 4] = "CompletedAndPaid";
    BookingStatusTypes[BookingStatusTypes["Cancelled"] = 5] = "Cancelled";
    BookingStatusTypes[BookingStatusTypes["Bidded"] = 6] = "Bidded";
    BookingStatusTypes[BookingStatusTypes["BiddedTooLate"] = 7] = "BiddedTooLate";
    BookingStatusTypes[BookingStatusTypes["WithdrewBid"] = 8] = "WithdrewBid";
    BookingStatusTypes[BookingStatusTypes["PendingInterviews"] = 9] = "PendingInterviews";
    BookingStatusTypes[BookingStatusTypes["LongTermBookingsCreated"] = 10] = "LongTermBookingsCreated";
})(BookingStatusTypes = exports.BookingStatusTypes || (exports.BookingStatusTypes = {}));
//# sourceMappingURL=index.js.map