"use client";
import { IBrand, PaginatedResultApi } from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";

export function BrandsTable({
  brands,
}: {
  brands: PaginatedResultApi<IBrand>;
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
      data={brands}
      schema={[
        {
          title: "نشانک",
          render: (row) => row.slug,
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
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
