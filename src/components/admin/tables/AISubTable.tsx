import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import React from "react";

type Props<T extends { id?: string; _id?: string }> = {
  open: boolean;
  header: string;
  data: T[];
  colSpan: number;
  subTitleSchema: {
    title: string;
    render: (row: T) => ReactNode;
  }[];
};

export default function AISubTable<T extends { id?: string; _id?: string }>({
  open,
  header,
  data,
  subTitleSchema,
  colSpan,
}: Props<T>) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} style={{ paddingBottom: 0, paddingTop: 0 }}>
        <Collapse unmountOnExit in={open} timeout="auto">
          <Box sx={{ margin: 1 }}>
            <Typography gutterBottom component="div" variant="h6">
              {header}
            </Typography>
            <Table aria-label="purchases" size="small">
              <TableHead>
                <TableRow>
                  {subTitleSchema.map((item) => (
                    <TableCell key={item.title}>{item.title}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={subTitleSchema.length}
                      sx={{ textAlign: "center", p: 2 }}
                    >
                      <Typography variant="h5">اینجا چیزی نیست</Typography>
                    </TableCell>
                  </TableRow>
                )}
                {data.map((row: T) => (
                  <TableRow key={row._id || row.id}>
                    {subTitleSchema.map((item) => (
                      <TableCell key={(row._id || row.id) + item.title}>
                        {item.render(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
