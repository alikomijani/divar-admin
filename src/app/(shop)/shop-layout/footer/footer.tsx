import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

export default async function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container>
        <Box display="flex">
          <Image alt="logo" height={30} src="/logo.svg" width={195} />
        </Box>
      </Container>
    </Box>
  );
}
