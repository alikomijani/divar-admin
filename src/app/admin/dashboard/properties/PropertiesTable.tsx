"use client";
import { deletePropertyAction } from "@/actions/property";
import type {
  IProperty,
  IPropertyOption,
  PaginatedResultApi,
} from "@/api/server-api/types";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/admin/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import Link from "next/link";

export function PropertiesTable({
  properties,
}: {
  properties: PaginatedResultApi<IProperty>;
}) {
  return (
    <AITable
      data={properties}
      actions={(p) => (
        <Stack direction="row">
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/admin/dashboard/properties/update/" + p.id}
            >
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <DeleteAlertDialog
              onConfirm={async () => deletePropertyAction(p.id)}
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
    />
  );
}
