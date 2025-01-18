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
