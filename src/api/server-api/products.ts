"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IProduct, PaginatedResultApi } from "./types";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import { ProductType } from "@/lib/validations";

// Create a new Product
export const createProduct = async (
  body: Partial<ProductType>
): Promise<IProduct> => {
  return apiFetch<IProduct>(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// Update an existing city
export const updateProduct = async (
  id: string,
  body: Partial<ProductType>
): Promise<IProduct> => {
  try {
    const data = await apiFetch<IProduct>(`${BASE_URL}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    revalidateTag(`products-${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};

// Get a paginated list of products
export const getProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a Product
export const deleteProduct = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
};

// Get a Product by its ID
export const getProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${BASE_URL}/products/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProduct", `products-${id}`],
    },
  });
};
