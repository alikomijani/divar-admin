import { BASE_URL } from "@/config.server";
import { ICity, PaginatedResultApi } from "./types";
import { cookies } from "next/headers";

export const getCities = async (): Promise<PaginatedResultApi<ICity>> => {
  const token = await (await cookies()).get("accessToken")?.value;
  console.log(token);
  const data = await fetch(`${BASE_URL}/cities`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["cities"],
    },
  }).then((res) => res.json());
  console.log(data);
  return data;
};
