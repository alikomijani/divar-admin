"use client";
import { TablePagination as MuiTablePagination } from "@mui/material";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  count: number;
};

export default function TablePagination({ count }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const page = parseInt(searchParams.get("page") ?? "1") - 1;

  const createQueryString = useCallback(
    (newParams: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.keys(newParams).forEach((key) => {
        params.set(key, newParams[key]);
      });

      return params.toString();
    },
    [searchParams]
  );
  return (
    <MuiTablePagination
      component="div"
      count={count}
      labelRowsPerPage="تعداد آیتم های هر صفحه"
      page={page}
      rowsPerPage={pageSize}
      rowsPerPageOptions={[5, 10, 25]}
      labelDisplayedRows={({ count, from, to }) =>
        `نمایش ${from} تا ${to} از ${count} آیتم`
      }
      onPageChange={(event, newPage) => {
        router.push(
          pathname + "?" + createQueryString({ page: `${newPage + 1}` })
        );
      }}
      onRowsPerPageChange={(event) => {
        const pageSize = parseInt(event.target.value, 10);
        router.push(
          pathname +
            "?" +
            createQueryString({ pageSize: `${pageSize}`, page: "1" })
        );
      }}
    />
  );
}
