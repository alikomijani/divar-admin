"use client";
import { deleteBadgeAction } from "@/actions/badges";
import { IUser, PaginatedResultApi } from "@/api/server-api/types";
import AlertDialog from "@/components/DeleteAlertDialog";
import AITable from "@/components/tables/AITable";
import { Edit, Delete } from "@mui/icons-material";
import { Stack, Tooltip, IconButton } from "@mui/material";
import Link from "next/link";
import { use } from "react";

export function UsersTable({
  users,
}: {
  users: Promise<PaginatedResultApi<IUser>>;
}) {
  const allUsers = use(users);
  return (
    <>
      <AITable
        actions={(p) => (
          <Stack direction={"row"}>
            <Tooltip title="ویرایش">
              <IconButton
                color="secondary"
                component={Link}
                href={"/dashboard/badges/update/" + p.id}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="حذف">
              <AlertDialog onConfirm={async () => deleteBadgeAction(p.id)}>
                <IconButton color="error">
                  <Delete />
                </IconButton>
              </AlertDialog>
            </Tooltip>
          </Stack>
        )}
        data={allUsers}
        schema={[
          {
            title: "شناسه",
            render: (row) => row.id,
          },
          {
            title: "ایمیل",
            render: (row) => row.email,
          },
          {
            title: "وضعیت",
            render: (row) => (row.isActive ? "فعال" : "غیرفعال"),
          },
          {
            title: "نقش",
            render: (row) => RoleMap[row.role - 1],
          },
        ]}
      />
    </>
  );
}
const RoleMap = ["مشتری", "فروشنده", "ادمین"];
