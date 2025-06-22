"use server";

import { get, post } from "@/lib/fetch";
import { Review } from "@/types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

// Add Booking

export async function addReview(_prevState: unknown, formData: FormData) {
  console.log(formData);

  const { error } = await post("reviews/add", formData);

  if (error) {
    return { error };
  }

  revalidateTag("bookings");
  redirect("/user/completed-bookings");
}

// get reviews
export async function getReviewsByCabinId(id: string) {
  const reviews = await get<Review[]>(`reviews/${id}`, ["reviews"]);
  return reviews;
}
