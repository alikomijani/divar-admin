"use server";
import "server-only";
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
const BASE_URL = process.env.BASE_URL;

export async function login(state: LoginFormState, formData: FormData) {
  /// validate input
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      message: data.message,
      errors: data.errors,
    };
  }
  await createSession({
    accessToken: data.tokens.accessToken,
    refreshToken: data.tokens.refreshToken,
  });
  redirect("/dashboard");
}
