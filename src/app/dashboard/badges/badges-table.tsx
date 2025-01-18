"use client";
import { IBadge, PaginatedResultApi } from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";

export function BadgesTable({
  badges,
}: {
  badges: PaginatedResultApi<IBadge>;
}) {
  return (
    <AITable
      data={badges}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "عنوان",
          render: (row) => row.title,
        },
        {
          title: "icon",
          render: (row) => row.icon,
        },
        {
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
