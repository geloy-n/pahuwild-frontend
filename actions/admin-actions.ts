"use server";

import { get, patch } from "@/lib/fetch";
import { getBookingType } from "@/types";
import { revalidateTag } from "next/cache";

// get all current bookings

export async function getAllBookings() {
  return get<getBookingType[]>("booking/all-bookings", ["allBookings"]);
}

// Update booking status
export const updateBookingStatus = async (
  bookingId: string,
  newStatus: string
) => {
  const { error } = await patch(`booking/${bookingId}/status`, {
    status: newStatus,
  });

  if (error) {
    return { error };
  }

  revalidateTag("allBookings");

  return { error: "" };
};

// Update booking status to cancel

export const updateBookingStatusCancel = async (
  bookingId: string,
  newStatus: string,
  cancellationReason: string
) => {
  const { error } = await patch(`booking/${bookingId}/status/cancel`, {
    status: newStatus,
    isCancelledReason: cancellationReason,
  });

  if (error) {
    return { error };
  }

  revalidateTag("allBookings");

  return { error: "" };
};
