"use client";
import { IOrder, IOrderItem, PaginatedResultApi } from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { use } from "react";
export function OrdersTable({
  orders,
}: {
  orders: Promise<PaginatedResultApi<IOrder>>;
}) {
  const allOrders = use(orders);
  return (
    <>
      <AITable
        data={allOrders}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "کاربر",
            render: (row) => row.user.email,
          },
          {
            title: "وضعیت",
            render: (row) => row.orderStatus,
          },
          {
            title: "شهر",
            render: (row) => row.shippingAddress.city,
          },
        ]}
        subTable={{
          header: "کالاها",
          key: "orderItems",
          schema: [
            {
              title: "کالا",
              render: (row: IOrderItem) => row.productSeller.product.titleFa,
            },
            {
              title: "فروشنده",
              render: (row: IOrderItem) => row.seller.name,
            },
            {
              title: "تعداد",
              render: (row: IOrderItem) => row.quantity,
            },
            {
              title: "قیمت",
              render: (row: IOrderItem) => row.productSeller.price,
            },
          ],
        }}
      />
    </>
  );
}
export const RoleMap = ["مشتری", "فروشنده", "ادمین"];
