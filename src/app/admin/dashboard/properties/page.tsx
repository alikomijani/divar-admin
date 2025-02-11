"use server";
import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import React from "react";
import { PropertiesTable } from "./PropertiesTable";
import { getProperties } from "@/api/server-api/property";

export default async function Properties({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const properties = await getProperties(params);
  return (
    <TableContainer
      createLink="/admin/dashboard/properties/create"
      title="مشخصات"
    >
      <PropertiesTable properties={properties} />
    </TableContainer>
  );
}
