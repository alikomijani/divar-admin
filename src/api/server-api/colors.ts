"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IColor, PaginatedResultApi } from "./types";
import { revalidateTag } from "next/cache";
import { apiFetch } from "./base";

// Create a new Color
export const createColor = async (body: Partial<IColor>): Promise<IColor> => {
  return apiFetch<IColor>(`${BASE_URL}/colors`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// Update an existing city
export const updateColor = async (
  id: string,
  body: Partial<IColor>
): Promise<IColor> => {
  const data = await apiFetch<IColor>(`${BASE_URL}/colors/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  revalidateTag(`colors-${id}`);
  return data;
};

// Get a paginated list of colors
export const getColors = async (
  params?: unknown
): Promise<PaginatedResultApi<IColor>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IColor>>(
    `${BASE_URL}/colors?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Delete a Color
export const deleteColor = async (id: string): Promise<{ message: string }> => {
  return apiFetch<{ message: string }>(`${BASE_URL}/colors/${id}`, {
    method: "DELETE",
  });
};

// Get a Color by its ID
export const getColorById = async (id: string): Promise<IColor> => {
  return apiFetch<IColor>(`${BASE_URL}/colors/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleColor", `colors-${id}`],
    },
  });
};
