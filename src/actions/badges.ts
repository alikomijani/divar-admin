"use server";
import { createBadge, deleteBadge, updateBadge } from "@/api/server-api/badges";
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
export async function createOrUpdateBadgeAction(
  state: BadgeFormState,
  formData: FormData
) {
  /// validate input
  const { accessToken } = await auth();
  if (!accessToken) {
    redirect("/auth/login");
  }
  const id = formData.get("id");
  const validatedFields = BadgeFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  if (id) {
    const { res, data } = await updateBadge(
      id.toString(),
      validatedFields.data,
      accessToken
    );

    if (!res.ok) {
      return {
        message: data.message,
        errors: data.errors,
      };
    }
  } else {
    const { res, data } = await createBadge(validatedFields.data, accessToken);
    if (!res.ok) {
      return {
        message: data.message,
        errors: data.errors,
      };
    }
  }

  redirect("/dashboard/badges");
}

export async function deleteBadgeAction(id: string) {
  const res = await deleteBadge(id);
  if (res.ok) {
    revalidatePath("/dashboard/badges");
    return {
      success: true,
      message: "ok",
    };
  }
  const data = await res.json();
  return {
    success: false,
    message: data.message as string,
  };
}
