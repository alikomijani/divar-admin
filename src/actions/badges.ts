"use server";
import { createBadge, deleteBadge } from "@/app/server-api/badges";
import { auth } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const BadgeFormSchema = z.object({
  icon: z.string().url().trim(),
  title: z.string().min(1, "Title is required").trim(),
});

type BadgeFormState =
  | {
      errors?: {
        icon?: string[];
        title?: string[];
      };
      message?: string;
    }
  | undefined;
export async function createBadgeAction(
  state: BadgeFormState,
  formData: FormData
) {
  /// validate input
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
  const validatedFields = BadgeFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { res, data } = await createBadge(validatedFields.data, accessToken);
  if (!res.ok) {
    return {
      message: data.message,
      errors: data.errors,
    };
  }
  redirect("/dashboard/badges");
}

interface DeleteFormState {
  message?: string;
}
export async function deleteBadgeAction(
  state: DeleteFormState,
  formData: FormData
) {
  const id = (formData.get("id") || "").toString();
  const res = await deleteBadge(id);

  if (res.ok) {
    revalidatePath("/dashboard/badges");
    return {
      message: "ok",
    };
  }
  const data = await res.json();

  return {
    message: data.message as string,
  };
}
