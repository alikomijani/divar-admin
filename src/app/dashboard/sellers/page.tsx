import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { SellerTable } from "./seller-table";
import { getAllUsers } from "@/api/server-api/users";
import { getAllSellers } from "@/api/server-api/sellers";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const sellers = getAllSellers(params);
  return (
    <TableContainer title="فروشگاه ها" createLink="/dashboard/sellers/create">
      <SellerTable sellers={sellers} />
    </TableContainer>
  );
}
