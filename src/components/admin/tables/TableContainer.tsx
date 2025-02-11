import { Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import type { ReactNode} from "react";
import { Suspense } from "react";
import TableLoading from "./TableLoading";

export type TableContainerProps = {
  title: string;
  createLink?: string;
  children: ReactNode;
};
export async function TableContainer({
  title,
  createLink,
  children,
}: TableContainerProps) {
  return (
    <Box component={Paper}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flex: "1 1 100%",
          }}
        >
          {title}
        </Typography>
        {createLink && (
          <Button
            component={Link}
            href={createLink}
            variant="contained"
            sx={{
              flexShrink: 0,
            }}
          >
            {title} جدید
          </Button>
        )}
      </Toolbar>
      <Suspense fallback={<TableLoading colCount={6} />}>{children}</Suspense>
    </Box>
  );
}
