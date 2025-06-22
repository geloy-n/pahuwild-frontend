"use server";

import { cookies } from "next/headers";
import { API_URL } from "@/lib/api";
import { getErrorMessage } from "@/lib/error";
import { get, post } from "@/lib/fetch";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

//sign-up
export async function createUser(_prevState: unknown, formData: FormData) {
  const { error } = await post("users", formData);

  if (error) {
    return { error };
  }

  redirect("/sign-in");
}

// Sign-in

export async function signInUser(_prevState: unknown, formData: FormData) {
  const res = await fetch(`${API_URL}/auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const parsedRes = await res.json();

  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }

  const setCookieHeader = res.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    const cookiesStore = await cookies();
    cookiesStore.set({
      name: "Authentication",
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }

  const callbackUrl = formData.get("callbackUrl")?.toString() || "/";
  redirect(callbackUrl);
}

// Sign out

export async function signout() {
  (await cookies()).delete("Authentication");
  redirect("/sign-in");
}

// Get user info
export async function getMe() {
  return get("users/me");
}
