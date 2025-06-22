"use server";

import { API_URL } from "@/lib/api";
import { del, get, getHeaders, patch, post } from "@/lib/fetch";
import { Cabin } from "@/types";
import { revalidateTag } from "next/cache";

// Get all cabins
export async function getAllCabins() {
  return get<Cabin[]>("cabin", ["cabins"]);
}

// Get featured cabins
export async function getFeaturedCabins() {
  return get<Cabin[]>("cabin/featured", ["featuredCabins"]);
}

// Get cabin by slug
export async function getCabinBySlug(slug: string) {
  return get<Cabin>(`cabin/slug/${slug}`);
}

// Get cabin by id
export const getCabinById = async (id: string): Promise<Cabin> => {
  return get<Cabin>(`cabin/id/${id}`, ["getCabinId"]);
};

// Post cabin details
export async function AddCabin(formData: FormData) {
  const imageFile = formData.get("imageFile") as File | null;
  formData.delete("imageFile");

  const response = await post("cabin", formData);
  if (response.error) return response;

  if (imageFile && imageFile.size > 0) {
    await uploadCabinImage(response.data.id, imageFile, response.data.slug);
  }

  console.log(response.data);
  revalidateTag("cabins");
  return { error: "", data: response.data };
}

// Post cabin Image
export async function uploadCabinImage(
  cabinId: string,
  file: File,
  slug: string
) {
  const form = new FormData();
  form.append("imageFile", file);
  form.append("slug", slug);

  const headers = await getHeaders();

  await fetch(`${API_URL}/cabin/${cabinId}/image`, {
    method: "POST",
    body: form,
    headers,
  });
}

// Update Cabin
export async function UpdateCabin(id: string, formData: FormData) {
  const body = Object.fromEntries(formData.entries());
  const result = await patch(`cabin/${id}`, body);

  revalidateTag("cabins");
  return { error: "", data: result };
}

// Delete Cabin
export async function deleteCabin(id: string) {
  const result = await del(`cabin/${id}`);

  if (!result.error) {
    revalidateTag("cabins");
  }
  return result;
}
