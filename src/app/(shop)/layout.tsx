"use server";
import { Box, Container, TextField } from "@mui/material";
import Image from "next/image";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box component="header">
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Image alt="logo" src="/logo.svg" width={195} height={30} />
            <TextField
              name="search"
              fullWidth
              placeholder="جست و جو در بیش از ۲۰ ملیون کالا"
              label="جست و جو"
            />
          </Box>
        </Container>
      </Box>
      <main>{children}</main>
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container>
          <Image alt="logo" src="/logo.svg" width={195} height={30} />
        </Container>
      </Box>
    </>
  );
}
