"use client";
import { useUserQuery } from "@/api/client-api/user";
import { IUser } from "@/api/server-api/types";
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
      error={error}
      helperText={helperText}
      options={data?.results ?? []}
      getOptionLabel={(o) => o.email}
      isLoading={isLoading}
      label="کاربر"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
