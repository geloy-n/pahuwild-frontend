"use server";

import { post, get } from "@/lib/fetch";
import { getBookingType } from "@/types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Add Booking

export async function bookCabin(_prevState: unknown, formData: FormData) {
  const { error } = await post("booking/add", formData);

  if (error) {
    return { error };
  }

  revalidateTag("bookings");
  redirect("/user/current-bookings");
}

// Get Booking
export async function getBookings() {
  return get<getBookingType[]>("booking", ["bookings"]);
}
