"use client";
import AITable from "./AITable";
import { ICity, PaginatedResultApi } from "@/app/server-api/types";

export default function CityTable({
  cities,
}: {
  cities: PaginatedResultApi<ICity>;
}) {
  return (
    <AITable
      data={cities}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "کد شهر",
          render: (row) => row.slug,
        },
        {
          title: "نام فارسی",
          render: (row) => row.name,
        },
        {
          title: "پیش شماره",
          render: (row) => row.code,
        },
        {
          title: "تاریخ ساخت",
          render: (row) => new Date(row.createdAt).toLocaleDateString("fa"),
        },
        {
          title: "آخرین بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
