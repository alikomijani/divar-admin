"use client";
import { deleteBrandAction } from "@/actions/brands";
import type { IBrand, PaginatedResultApi } from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/admin/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function BrandsTable({
  brands,
}: {
  brands: Promise<PaginatedResultApi<IBrand>>;
}) {
  const brandsList = use(brands);
  return (
    <AITable
      data={brandsList}
      actions={(p) => (
        <Stack direction="row">
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/admin/dashboard/brands/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="حذف">
            <DeleteAlertDialog onConfirm={async () => deleteBrandAction(p.id)}>
              <IconButton color="error">
                <Delete />
              </IconButton>
            </DeleteAlertDialog>
          </Tooltip>
        </Stack>
      )}
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
