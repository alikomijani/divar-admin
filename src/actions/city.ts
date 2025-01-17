"use server";
import "server-only";
import { auth } from "@/lib/session";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/config.server";
import { z } from "zod";
import { revalidateTag } from "next/cache";

const CityFormSchema = z.object({
  code: z.string().trim(),
  slug: z.string().trim(),
  name: z.string().trim(),
});

type CityFormState =
  | {
      errors?: {
        code?: string[];
        slug?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;

export async function createCityAction(
  state: CityFormState,
  formData: FormData
) {
  /// validate input
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
  const validatedFields = CityFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${BASE_URL}/cities`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      message: data.message,
      errors: data.errors,
    };
  }
  revalidateTag("cities");
  redirect("/dashboard/cities");
}
