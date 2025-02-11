import { SHOP_BASE_URL } from "@/config.server";
import { apiFetch } from "../base";
import type { ICategory, PaginatedResultApi } from "../types";

// Get a paginated list of categories
export const getCategories = async (
  params?: unknown
): Promise<PaginatedResultApi<ICategory>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<ICategory>>(
    `${SHOP_BASE_URL}/categories?${search.toString()}`
  );
};
