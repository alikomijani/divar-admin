import { SHOP_BASE_URL } from "@/config.server";
import type { IProduct, PaginatedResultApi } from "../types";
import { apiFetch } from "../base";

// Get a paginated list of products
export const getProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${SHOP_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Get a Product by its ID
export const getProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${SHOP_BASE_URL}/products/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProduct", `products-${id}`],
    },
  });
};
