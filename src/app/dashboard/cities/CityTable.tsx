"use client";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import AITable from "../../../components/tables/AITable";
import { ICity, PaginatedResultApi } from "@/api/server-api/types";
import { use } from "react";
import { deleteCityAction } from "@/actions/city";

export default function CityTable({
  cities,
}: {
  cities: Promise<PaginatedResultApi<ICity>>;
}) {
  const allCity = use(cities);
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
            <IconButton
              color="error"
              onClick={async () => {
                await deleteCityAction(p.id);
              }}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      )}
      data={allCity}
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
