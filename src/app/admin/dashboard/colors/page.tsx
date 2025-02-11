import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { ColorsTable } from "./colors-table";
import { getColors } from "@/api/server-api/colors";

export default async function ColorsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const colors = await getColors(params);
  return (
    <TableContainer createLink="/admin/dashboard/colors/create" title="رنگ">
      <ColorsTable colors={colors} />
    </TableContainer>
  );
}
