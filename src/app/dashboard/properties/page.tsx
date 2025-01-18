"use server";
import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import React from "react";
import { PropertiesTable } from "./PropertiesTable";
import { getProperties } from "@/api/server-api/property";

export default async function Properties({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const properties = await getProperties(params);
  return (
    <TableContainer title="مشخصات" createLink="/dashboard/properties/create">
      <PropertiesTable properties={properties} />
    </TableContainer>
  );
}
