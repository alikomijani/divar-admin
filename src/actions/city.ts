"use server";
import { createCity, deleteCity, updateCity } from "@/api/server-api/city";
import { ApiError } from "@/api/server-api/base";
import { ensureAuthenticated } from "@/lib/session";
import { CityFormState, CitySchemaZod } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";

export async function createOrUpdateCityAction(
  _: CityFormState,
  formData: FormData
) {
  /// validate input
  await ensureAuthenticated();
  const id = formData.get("id");
  const validatedFields = CitySchemaZod.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    if (id) {
      await updateCity(id.toString(), validatedFields.data);
    } else {
      await createCity(validatedFields.data);
    }
  } catch (e) {
    console.log(e);
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body?.errors as CityFormState["errors"],
        success: false,
      };
    } else {
      return {
        errors: {},
        message: "failed with call api",
        success: false,
      };
    }
  }
  redirect("/dashboard/cities");
}

export async function deleteCityAction(id: string) {
  await ensureAuthenticated();
  try {
    await deleteCity(id);
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
  revalidatePath("/dashboard/cities");
}
