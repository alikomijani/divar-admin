"use client";
import { useUserQuery } from "@/api/client-api/user";
import type { IUser } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";

type Props = {
  name: string;
  defaultValue?: IUser;
  error?: boolean;
  helperText?: string | string[];
};

export default function UserField({
  name,
  defaultValue,
  error,
  helperText,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useUserQuery(query);
  return (
    <AsyncListField
      defaultValue={defaultValue}
      error={error}
      getOptionLabel={(o) => o.email}
      helperText={helperText}
      isLoading={isLoading}
      label="کاربر"
      name={name}
      options={data?.results ?? []}
      setQuery={setQuery}
    />
  );
}
