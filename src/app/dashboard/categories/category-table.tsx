"use client";
import {
  ICategory,
  IProperty,
  PaginatedResultApi,
} from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";

export function CategoriesTable({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
}) {
  return (
    <AITable
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
