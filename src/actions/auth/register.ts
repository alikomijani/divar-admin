"use server";
import "server-only";

import type {
  RegisterFormState,
  RegisterType,
  FormState} from "@/lib/validations";
import {
  RegisterFormSchema
} from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import { ApiError } from "@/api/server-api/base";
import { chooseAuthRedirectPath } from "./helper";
import type { LoginResponse } from "@/api/server-api/types";
import {
  registerAdminRequest,
  registerShopRequest,
  registerUserRequest,
} from "@/api/server-api/auth";

export async function registerAction(
  state: RegisterFormState,
  formData: FormData
) {
  const validatedFields = RegisterFormSchema.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  let data: LoginResponse | undefined = undefined;
  try {
    if (validatedFields.data.role === 2) {
      data = await registerShopRequest(validatedFields.data);
    } else if (validatedFields.data.role === 3) {
      data = await registerAdminRequest(validatedFields.data);
    } else {
      data = await registerUserRequest(validatedFields.data);
    }

    await createSession({
      accessToken: data.tokens.accessToken,
      refreshToken: data.tokens.refreshToken,
      role: data.user.role,
    });
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body as FormState<RegisterType>["errors"],
      };
    }
  }
  const path = chooseAuthRedirectPath(data?.user.role);
  redirect(path);
}
