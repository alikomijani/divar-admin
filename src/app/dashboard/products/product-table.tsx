"use client";
import { deleteProductAction } from "@/actions/products";
import { IProduct, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IProduct>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/dashboard/products/update/" + p.code}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => deleteProductAction(p.id)}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
      data={products}
      schema={[
        {
          title: "کد",
          render: (row) => row.code,
        },
        {
          title: "نام فارسی",
          render: (row) => row.titleFa,
        },
        {
          title: "نام انگلیسی",
          render: (row) => row.titleEn,
        },
        {
          title: "دسته بندی",
          render: (row) => row.category.titleFa,
        },
        {
          title: "برند",
          render: (row) => row.brand.titleFa,
        },
        {
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
