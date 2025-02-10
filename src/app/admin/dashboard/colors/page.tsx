import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { ColorsTable } from "./colors-table";
import { getColors } from "@/api/server-api/colors";

export default async function ColorsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const colors = await getColors(params);
  return (
    <TableContainer title="رنگ" createLink="/dashboard/colors/create">
      <ColorsTable colors={colors} />
    </TableContainer>
  );
}
