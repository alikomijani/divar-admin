"use client";
import { deleteBadgeAction } from "@/actions/badges";
import { IOrder, IOrderItem, PaginatedResultApi } from "@/api/server-api/types";
import AlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
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
const RoleMap = ["مشتری", "فروشنده", "ادمین"];
