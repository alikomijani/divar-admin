'use server';
import 'server-only';

import { ADMIN_BASE_URL } from '@/config.server';
import type { IProduct, PaginatedResultApi } from './types';
import { revalidateTag } from 'next/cache';
import { apiFetch } from './base';
import type { ProductType } from '@/lib/validations';

// Create a new Product
export const createProduct = async (
  body: Partial<ProductType>
): Promise<IProduct> => {
  return apiFetch<IProduct>(`${ADMIN_BASE_URL}/products`, {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

// Update an existing city
export const updateProduct = async (
  id: string,
  body: Partial<ProductType>
): Promise<IProduct> => {
  const data = await apiFetch<IProduct>(`${ADMIN_BASE_URL}/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
  revalidateTag(`products-${id}`);
  return data;
};

// Get a paginated list of products
export const getProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${ADMIN_BASE_URL}/products?${search.toString()}`,
    {
      cache: 'no-store',
    }
  );
};

// Get a Product by its ID
export const getProductById = async (id: string): Promise<IProduct> => {
  return apiFetch<IProduct>(`${ADMIN_BASE_URL}/products/${id}`, {
    cache: 'no-store',
    next: {
      tags: ['allSingleProduct', `products-${id}`],
    },
  });
};

// Delete a Product
export const deleteProduct = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${ADMIN_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
};
