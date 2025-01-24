"use client";
import { useCategoriesQuery } from "@/api/client-api/categories";
import { IBrand } from "@/api/server-api/types";
import React, { useState } from "react";
import AsyncListField from "./async-list-filed";
import { useBrandsQuery } from "@/api/client-api/brand";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useBrandsQuery("");
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      isLoading={isLoading}
      label="برند"
      name={name}
      setQuery={setQuery}
      defaultValue={defaultValue}
    />
  );
}
