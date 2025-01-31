"use client";
import { useCategoriesQuery } from "@/api/client-api/categories";
import { ICategory } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";
import { error } from "console";

type Props = {
  name: string;
  defaultValue?: ICategory;
  error?: boolean;
  helperText?: string;
};

export default function CategoryField({
  name,
  defaultValue,
  error,
  helperText,
}: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useCategoriesQuery(query);
  return (
    <AsyncListField
      error={error}
      helperText={helperText}
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      groupBy={(o) => o.parent?.titleFa ?? "root"}
      isLoading={isLoading}
      label="دسته بندی"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
