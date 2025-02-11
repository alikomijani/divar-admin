import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { OrdersTable } from "./order-table";
import { getOrders } from "@/api/server-api/orders";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const orders = getOrders(params);
  return (
    <TableContainer title="سفارش ها">
      <OrdersTable orders={orders} />
    </TableContainer>
  );
}
