"use server";
import "server-only";
import { BASE_URL } from "@/config.server";
import { IBadge, PaginatedResultApi } from "./types";
import { auth } from "@/lib/session";

export const getBadges = async (
  params?: any
): Promise<PaginatedResultApi<IBadge>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/badges?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};

export const deleteBadge = async (id: string): Promise<Response> => {
  const { accessToken } = await auth();
  const res = await fetch(`${BASE_URL}/badges/${id}`, {
    method: "delete",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
