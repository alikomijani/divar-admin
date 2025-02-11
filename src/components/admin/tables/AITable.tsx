"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from "./TablePagination";
import type { ReactNode } from "react";
import React from "react";
import type { Column, PaginatedResultApi } from "@/api/server-api/types";
import AITableRow from "./AITableRow";

interface AITableProps<T extends { id: string }, G extends { id: string }> {
  schema: Column<T>[];
  data: PaginatedResultApi<T>;
  subTable?: { header: string; schema: Column<G>[]; key: keyof T };
  actions?: (row: T) => ReactNode;
}

export default function AITable<
  T extends { id: string },
  G extends { id: string }
>({ schema, data, subTable, actions }: AITableProps<T, G>) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {!!subTable && <TableCell />}
            {schema.map((item) => (
              <TableCell key={item.title}>{item.title}</TableCell>
            ))}
            {!!actions && <TableCell key="actions">عملیات</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={schema.length + +!!actions + +!!subTable}
                sx={{ textAlign: "center" }}
              >
                دیتایی وجود ندارد
              </TableCell>
            </TableRow>
          )}
          {data.results.map((row) => (
            <AITableRow
              key={row.id}
              actions={actions}
              data={row}
              schema={schema}
              subTable={subTable}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination count={data.total} />
    </TableContainer>
  );
}
