import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { SellerTable } from "./seller-table";
import { getAllSellers } from "@/api/server-api/sellers";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const sellers = getAllSellers(params);
  return (
    <TableContainer
      title="فروشگاه ها"
      createLink="/admin/dashboard/sellers/create"
    >
      <SellerTable sellers={sellers} />
    </TableContainer>
  );
}
