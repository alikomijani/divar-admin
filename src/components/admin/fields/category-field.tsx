"use client";
import { useCategoriesQuery } from "@/api/client-api/categories";
import type { ICategory } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";

type Props = {
  name: string;
  defaultValue?: ICategory;
  error?: boolean;
  helperText?: string | string[];
  onChange?: (value: ICategory | null) => void;
};

export default function CategoryField({
  name,
  defaultValue,
  error,
  helperText,
  onChange,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
      defaultValue={defaultValue}
      error={error}
      getOptionLabel={(o) => o.titleFa}
      groupBy={(o) => o.parent?.titleFa ?? "root"}
      helperText={helperText}
      isLoading={isLoading}
      label="دسته بندی"
      name={name}
      options={data?.results ?? []}
      setQuery={setQuery}
      onChange={onChange}
    />
  );
}
