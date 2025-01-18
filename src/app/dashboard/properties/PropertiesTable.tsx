"use client";
import {
  IProperty,
  IPropertyOption,
  PaginatedResultApi,
} from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";

export function PropertiesTable({
  properties,
}: {
  properties: PaginatedResultApi<IProperty>;
}) {
  return (
    <AITable
      subTable={{
        header: "مقادیر پیشنهادی",
        key: "options",
        schema: [
          {
            title: "شماره",
            render: (row: IPropertyOption) => row.id,
          },
          {
            title: "برچسب",
            render: (row) => row.label,
          },
          {
            title: "مقدار",
            render: (row) => row.value,
          },
        ],
      }}
      data={properties}
      schema={[
        {
          title: "شماره",
          render: (row) => row.id,
        },
        {
          title: "نام",
          render: (row) => row.name,
        },
        {
          title: "برچسب",
          render: (row) => row.label,
        },
        {
          title: "نوع داده",
          render: (row) => row.type,
        },
      ]}
    />
  );
}
