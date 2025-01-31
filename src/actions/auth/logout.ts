"use server";
import "server-only";

import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await deleteSession();
  redirect("/auth/login");
}
