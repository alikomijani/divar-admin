import CityTable from "../../../components/tables/CityTable";
import { PageParams } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";

export default async function Cities({ searchParams }: PageParams) {
  return (
    <TableContainer title="شهر" createLink="/dashboard/cities/create">
      <CityTable searchParams={searchParams} />
    </TableContainer>
  );
}
