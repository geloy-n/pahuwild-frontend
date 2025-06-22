"use server";

import { cookies } from "next/headers";
import { API_URL } from "./api";
import { getErrorMessage } from "./error";

export const getHeaders = async () => ({
  Cookie: (await cookies()).toString(),
});

// Post
export const post = async (path: string, formData: FormData) => {
  const headers = await getHeaders();
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes };
};

// Get
export const get = async <T>(path: string, tags?: string[]) => {
  const headers = await getHeaders();
  const res = await fetch(`${API_URL}/${path}`, {
    headers: { ...headers },
    next: { tags },
  });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }

  return res.json() as T;
};

// Patch
export const patch = async (path: string, body: unknown) => {
  const headers = await getHeaders();
  const res = await fetch(`${API_URL}/${path}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });

  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes };
};

// Delete
export const del = async (path: string) => {
  const headers = await getHeaders();

  const res = await fetch(`${API_URL}/${path}`, {
    method: "DELETE",
    headers: { ...headers },
  });

  if (!res.ok) {
    const parsedRes = await res.json().catch(() => ({}));
    return { error: getErrorMessage(parsedRes) };
  }

  return { error: "", data: null };
};
