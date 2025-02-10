"use server";
import { getCities } from "@/api/server-api/city";
import CityTable from "./CityTable";
import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";

export default async function Cities({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const cities = getCities(params);
  return (
    <TableContainer title="شهر" createLink="/admin/dashboard/cities/create">
      <CityTable cities={cities} />
    </TableContainer>
  );
}
