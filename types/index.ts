import { ReactNode } from "react";

// Provider
export type ProviderProps = {
  children: ReactNode;
  authenticated: boolean;
};

// User

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// Cabins

export type Cabin = {
  id: string;
  name: string;
  location: string;
  guests: number;
  slug: string;
  description: string;
  price: number;
  image: string;
  isFeatured: boolean;
  wifi: boolean;
  parking: boolean;
  kitchen: boolean;
  hotTub: boolean;
  fireplace: boolean;
  hiking: boolean;
  isAvailable: boolean;
  rating: number;
  numReviews: number;
  CreatedAt: Date;
};

// Booking Details
export type BookingDetailsProps = {
  cabinId: string;
  cabinName: string;
  cabinGuests: number;
  cabinImage: string;
  totalAmount: number;
  checkInDate: Date;
  checkInTime: string;
  checkOutDate: Date;
  checkOutTime: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  requests: string;
};

export type CreateBookingDtoInterface = {
  userId: string;
  cabinId: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  nights: number;
  total: number;
  cabinName: string;
  cabinImage: string;
  cabinLocation: string;
  cabinGuests: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  requests: string;
};

// Get Bookings

export type getBookingType = {
  id: string;
  cabinId: string;
  cabinName: string;
  cabinImage: string;
  cabinLocation: string;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  cabinGuests: number;
  cabinSlug: string;
  total: number;
  status: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  requests: string;
  isCancelledBy: string;
  isCancelledReason: string;
  hasReview: boolean;
  cabin: Cabin;
};

// Get Review

export type Review = {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  cabinId: string;
  user: User;
  booking: getBookingType;
};

// handle status change

export type HandleStatusChangeType = (
  bookingId: string,
  newStatus: string
) => Promise<void>;
