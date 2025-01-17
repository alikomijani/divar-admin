"use server";
import "server-only";
import { auth } from "@/lib/session";
import { redirect } from "next/navigation";
import { BASE_URL } from "@/config.server";
import { z } from "zod";
import { formDataToObject } from "@/lib/utils";

const PropertySchemaZod = z.object({
  name: z.string().min(1, "Name is required").trim(),
  label: z.string().min(1, "Label is required").trim(),
  type: z.string().min(1, "Type is required").trim(),
  options: z
    .array(
      z.object({
        label: z.string().min(1, "Option label is required").trim(),
        value: z.string().min(1, "Option value is required").trim(),
      })
    )
    .optional(), // Options array is optional
});
type PropertyFormState =
  | {
      errors?: {
        type?: string[];
        label?: string[];
        name?: string[];
        options?: string[];
      };
      message?: string;
    }
  | undefined;

export async function createPropertyAction(
  state: PropertyFormState,
  formData: FormData
) {
  /// validate input
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
  const validatedFields = PropertySchemaZod.safeParse(
    formDataToObject(formData)
  );
  console.log(validatedFields.data);
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${BASE_URL}/properties`, {
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
  redirect("/dashboard/properties");
}
