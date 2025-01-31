"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IProperty, PaginatedResultApi } from "./types";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";
import { PropertyType } from "@/lib/validations";

// Create a new Properties
export const createProperties = async (
  body: Partial<PropertyType>
): Promise<IProperty> => {
  return apiFetch<IProperty>(`${BASE_URL}/properties`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// Update an existing city
export const updateProperties = async (
  id: string,
  body: Partial<PropertyType>
): Promise<IProperty> => {
  const data = await apiFetch<IProperty>(`${BASE_URL}/properties/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`properties-${id}`);
  return data;
};

// Get a paginated list of properties
export const getProperties = async (
  params?: unknown
): Promise<PaginatedResultApi<IProperty>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProperty>>(
    `${BASE_URL}/properties?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a Properties
export const deleteProperties = async (
  id: string
): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/properties/${id}`, {
    method: "DELETE",
  });
};

// Get a Properties by its ID
export const getPropertiesById = async (id: string): Promise<IProperty> => {
  return apiFetch<IProperty>(`${BASE_URL}/properties/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProperties", `properties-${id}`],
    },
  });
};
