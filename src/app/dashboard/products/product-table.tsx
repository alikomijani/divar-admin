"use client";
import { IProduct, PaginatedResultApi } from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";

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
            <IconButton color="secondary">
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton color="error">
              <Delete />
            </IconButton>
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
