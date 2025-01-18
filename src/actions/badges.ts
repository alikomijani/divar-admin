"use server";
import { deleteBadge } from "@/app/server-api/badges";
import { revalidatePath } from "next/cache";

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
