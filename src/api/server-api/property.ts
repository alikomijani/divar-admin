import { BASE_URL } from "@/config.server";
import { IProperty, PaginatedResultApi } from "./types";
import { auth } from "@/lib/session";

export const getProperties = async (
  params: any
): Promise<PaginatedResultApi<IProperty>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/properties?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
