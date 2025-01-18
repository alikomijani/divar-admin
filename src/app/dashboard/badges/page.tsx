import { ServerPageProps } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { BadgesTable } from "./badges-table";
import { getBadges } from "@/app/server-api/badges";

export default async function BadgesPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const badges = await getBadges(params);
  return (
    <TableContainer title="برچسب ها" createLink="/dashboard/badges/create">
      <BadgesTable badges={badges} />
    </TableContainer>
  );
}
