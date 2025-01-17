import { BASE_URL } from "@/config.server";
import { ICity, PaginatedResultApi } from "./types";
import { auth } from "@/lib/session";

export const getCities = async (params: {
  [key: string]: string | string[] | undefined;
}): Promise<PaginatedResultApi<ICity>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params as any);
  const data = await fetch(`${BASE_URL}/cities?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};
