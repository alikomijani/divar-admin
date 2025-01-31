"use server";
import "server-only";

import { BASE_URL } from "@/config.server";
import { IUser, PaginatedResultApi } from "./types";
import { apiFetch } from "./base";

// Get a paginated list of users
export const getAllUsers = async (
  params?: unknown
): Promise<PaginatedResultApi<IUser>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IUser>>(
    `${BASE_URL}/auth/users?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

// Get a users by its ID
export const getUsersById = async (id: string): Promise<IUser> => {
  return apiFetch<IUser>(`${BASE_URL}/auth/users/${id}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleusers", `users-${id}`],
    },
  });
};

// change user status
export const changeUserStatus = async (
  id: string,
  data: { isActive: boolean }
): Promise<IUser> => {
  return apiFetch<IUser>(`${BASE_URL}/auth/users/${id}/change-status`, {
    method: "post",
    cache: "force-cache",
    body: JSON.stringify(data),
  });
};
