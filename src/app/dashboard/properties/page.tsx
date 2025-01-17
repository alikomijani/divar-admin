import { ServerPageProps } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import React from "react";
import { PropertiesTable } from "./PropertiesTable";

export default function Properties({ searchParams }: ServerPageProps) {
  return (
    <TableContainer title="مشخصات" createLink="/dashboard/properties/create">
      <PropertiesTable searchParams={searchParams} />
    </TableContainer>
  );
}
