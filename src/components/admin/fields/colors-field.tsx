import type { IColor } from "@/api/server-api/types";
import React, { useState } from "react";
import MultiAsyncListField from "./multi-async-list-field";
import { useColorsQuery } from "@/api/client-api/colors";

type ColorFieldProps = {
  name: string;
  defaultValue?: IColor[];
};

export default function ColorsField({ defaultValue, name }: ColorFieldProps) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useColorsQuery(query);
  return (
    <MultiAsyncListField
      defaultValue={defaultValue}
      getOptionLabel={(o) => o.title}
      isLoading={isLoading}
      label="رنگ ها"
      name={name}
      options={data?.results ?? []}
      setQuery={setQuery}
    />
  );
}
