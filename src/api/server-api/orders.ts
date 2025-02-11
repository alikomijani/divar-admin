import { ADMIN_BASE_URL } from "@/config.server";
import { apiFetch } from "./base";
import type { IOrder, PaginatedResultApi } from "./types";

// Get a paginated list of colors
export const getOrders = async (
  params?: unknown
): Promise<PaginatedResultApi<IOrder>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IOrder>>(
    `${ADMIN_BASE_URL}/orders?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
