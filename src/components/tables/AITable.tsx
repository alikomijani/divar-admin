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
import React, { ReactNode } from "react";
import { Column, PaginatedResultApi } from "@/api/server-api/types";
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
            {!!subTable && <TableCell></TableCell>}
            {schema.map((item) => (
              <TableCell key={item.title}>{item.title}</TableCell>
            ))}
            {!!actions && <TableCell key={"actions"}>عملیات</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.length === 0 && (
            <TableRow>
              <TableCell
                sx={{ textAlign: "center" }}
                colSpan={schema.length + +!!actions + +!!subTable}
              >
                دیتایی وجود ندارد
              </TableCell>
            </TableRow>
          )}
          {data.results.map((row) => (
            <AITableRow
              key={row.id}
              schema={schema}
              data={row}
              subTable={subTable}
              actions={actions}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination count={data.total} />
    </TableContainer>
  );
}
