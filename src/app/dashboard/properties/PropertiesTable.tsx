"use client";
import {
  IProperty,
  IPropertyOption,
  PaginatedResultApi,
} from "@/api/server-api/types";
import AITable from "@/components/tables/AITable";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";

export function PropertiesTable({
  properties,
}: {
  properties: PaginatedResultApi<IProperty>;
}) {
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
            <IconButton color="error">
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      )}
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
