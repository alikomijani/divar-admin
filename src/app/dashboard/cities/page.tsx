"use server";
import { getCities } from "@/app/server-api/city";
import CityTable from "../../../components/tables/CityTable";
import { ServerPageProps } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";

export default async function Cities({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const cities = await getCities(params);
  return (
    <TableContainer title="شهر" createLink="/dashboard/cities/create">
      <CityTable cities={cities} />
    </TableContainer>
  );
}
