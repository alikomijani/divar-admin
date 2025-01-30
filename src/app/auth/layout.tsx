import { Box, Card, CardContent } from "@mui/material";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100svh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: 500 }} elevation={8}>
        <CardContent
          sx={{
            padding: 4,
          }}
        >
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}
