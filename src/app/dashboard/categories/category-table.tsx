"use client";
import {
  ICategory,
  IProperty,
  PaginatedResultApi,
} from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";

export function CategoriesTable({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
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
      subTable={{
        header: "ویژگی ها",
        key: "properties",
        schema: [
          {
            title: "شماره",
            render: (row: IProperty) => row.id,
          },
          {
            title: "برچسب",
            render: (row) => row.label,
          },
          {
            title: "نام",
            render: (row) => row.name,
          },
          {
            title: "نوع داده",
            render: (row) => row.type,
          },
        ],
      }}
      data={categories}
      schema={[
        {
          title: "نشانک",
          render: (row) => row.slug,
        },
        {
          title: "دسته بندی مادر",
          render: (row) => row.parent?.slug ?? "-",
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
