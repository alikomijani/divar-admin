import { BASE_URL } from "@/config.server";
import { ICity, PaginatedResultApi } from "./types";
import { auth } from "@/lib/session";

export const getCities = async (
  params: any
): Promise<PaginatedResultApi<ICity>> => {
  const { accessToken } = await auth();
  const search = new URLSearchParams(params);
  const data = await fetch(`${BASE_URL}/cities?${search.toString()}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};

export const deleteCity = async (id: string): Promise<Response> => {
  const { accessToken } = await auth();
  const res = await fetch(`${BASE_URL}/cities/${id}`, {
    method: "delete",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return res;
};
