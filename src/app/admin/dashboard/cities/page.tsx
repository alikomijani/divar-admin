"use server";
import { getCities } from "@/api/server-api/city";
import CityTable from "./CityTable";
import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";

export default async function Cities({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const cities = getCities(params);
  return (
    <TableContainer createLink="/admin/dashboard/cities/create" title="شهر">
      <CityTable cities={cities} />
    </TableContainer>
  );
}
