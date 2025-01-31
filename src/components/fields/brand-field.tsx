"use client";
import { IBrand } from "@/api/server-api/types";
import React from "react";
import AsyncListField from "./async-list-filed";
import { useBrandsQuery } from "@/api/client-api/brand";

type Props = {
  name: string;
  defaultValue?: IBrand;
};

export default function BrandField({ name, defaultValue }: Props) {
  const { data, isLoading } = useBrandsQuery("");
  return (
    <AsyncListField
      options={data?.results ?? []}
      getOptionLabel={(o) => o.titleFa}
      isLoading={isLoading}
      label="برند"
      name={name}
      setQuery={() => {}}
      defaultValue={defaultValue}
    />
  );
}
