import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { BadgesTable } from "./badges-table";
import { getBadges } from "@/api/server-api/badges";

export default async function BadgesPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const badges = getBadges(params);
  return (
    <TableContainer
      createLink="/admin/dashboard/badges/create"
      title="برچسب ها"
    >
      <BadgesTable badges={badges} />
    </TableContainer>
  );
}
