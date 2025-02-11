"use client";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import type { ICity, PaginatedResultApi } from "@/api/server-api/types";
import { use } from "react";
import { deleteCityAction } from "@/actions/city";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import Link from "next/link";
import AITable from "@/components/admin/tables/AITable";

export default function CityTable({
  cities,
}: {
  cities: Promise<PaginatedResultApi<ICity>>;
}) {
  const allCity = use(cities);
  return (
    <AITable
      data={allCity}
      actions={(p) => (
        <Stack direction="row">
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/admin/dashboard/cities/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => {
                deleteCityAction(p.id);
              }}
            >
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
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
