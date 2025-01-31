"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IBrand, PaginatedResultApi } from "./types";
import { apiFetch } from "./base";
import { revalidateTag } from "next/cache";

export const createBrand = async (body: Partial<IBrand>): Promise<IBrand> => {
  return apiFetch<IBrand>(`${BASE_URL}/brands`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// Update an existing brand
export const updateBrand = async (
  id: string,
  body: Partial<IBrand>
): Promise<IBrand> => {
  const data = await apiFetch<IBrand>(`${BASE_URL}/brands/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`brands-${id}`);
  return data;
};

// Get a paginated list of brands
export const getBrands = async (
  params?: unknown
): Promise<PaginatedResultApi<IBrand>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IBrand>>(
    `${BASE_URL}/brands?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a brand
export const deleteBrand = async (id: string): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/brands/${id}`, {
    method: "DELETE",
  });
};

// Get a brand by its ID
export const getBrandById = async (id: string): Promise<IBrand> => {
  return apiFetch<IBrand>(`${BASE_URL}/brands/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleBrand", `brands-${id}`],
    },
  });
};
