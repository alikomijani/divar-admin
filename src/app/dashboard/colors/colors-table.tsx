"use client";
import { IColor, PaginatedResultApi } from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";
import { Box } from "@mui/material";

export function ColorsTable({
  colors,
}: {
  colors: PaginatedResultApi<IColor>;
}) {
  return (
    <AITable
      data={colors}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "نام",
          render: (row) => row.title,
        },
        {
          title: " رنگ",
          render: (row) => (
            <Box sx={{ bgcolor: row.hexCode, height: 20, width: 20 }} />
          ),
        },
        {
          title: "کد رنگ",
          render: (row) => row.hexCode,
        },
        {
          title: "بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString("fa"),
        },
      ]}
    />
  );
}
