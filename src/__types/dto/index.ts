export * from './BookingDto'
export * from './InsightDto'

export const enum BookingStatusTypes {
  Requested = 0,
  Accepted = 1,
  CompletedNotPaid = 2,
  Rejected = 3,
  CompletedAndPaid = 4,
  Cancelled = 5,
  Bidded = 6,
  BiddedTooLate = 7,
  WithdrewBid = 8,
  PendingInterviews = 9,
  LongTermBookingsCreated = 10,
}
export interface BookingSummary {
  id: string
  parentId: string
  bookingStatus: BookingStatusTypes
  requestStatus?: BookingStatusTypes
  scheduledStart: Date
  scheduledDuration: number
  imageUrl: string

  otherUserFullName: string
  lookingForVolunteer?: boolean
}
export interface ActiveBookingSummary {
  requestedBookings: BookingSummary[]
  confirmedBookings: BookingSummary[]
}
export interface IBooking {
  id: string
  bookingProcess: unknown
  scheduledStart: Date
  scheduledDateTime: string
  bookingStatus: BookingStatusTypes
  scheduledDuration: number
  specialRequirements: string
  parent: {
    id: string
    referralCodeNumber?: number
    firstName: string
    lastName: string
    profileImageUrl: string
    fullName?: string
    mobileNumber?: string
    address?: {
      houseNo: string
      street: string
      town: string
      postcode: string
    }
  }
  sitterRequests: unknown[]
  bookedSitter: unknown
}
export interface IUser {
  id?: string
  email: string
  firstName: string
  lastName: string
  accountType: unknown
  address?: {
    houseNo: string
    street: string
    town: string
    postcode: string
  }
  profileImageUrl?: string
  hourlyRate?: number
  specialHourlyRate?: number
  numberOfChildren?: number
  children?: unknown[]
  hasPets?: string
  hasWifi?: boolean
  hasNetflix?: boolean
  hasTV?: boolean
  parking?: unknown
  allergies?: unknown[]
  otherAllergies?: string
  biography?: string
  referralCodeNumber?: number
  mobileNumber?: string
  secondaryMobileNumbers?: string[]
  passwordResetCode?: string
  approvalStatus?: unknown
  premiumUser?: boolean
  bookingsCompleted?: {
    total: number
    postajob: number
    shortlist: number
    longterm: number
    volunteered: number
  }
  numberOfReviews?: {
    total: number
    positive: number
    negative: number
  }
}
