import { BASE_URL } from "@/config.server";
import { IBrand, PaginatedResultApi } from "./types";
import { auth } from "@/lib/session";

export const getBrands = async (
  params?: any
): Promise<PaginatedResultApi<IBrand>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/brands?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
