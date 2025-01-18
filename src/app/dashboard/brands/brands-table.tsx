"use client";
import { IBrand, PaginatedResultApi } from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";

export function BrandsTable({
  brands,
}: {
  brands: PaginatedResultApi<IBrand>;
}) {
  return (
    <AITable
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
