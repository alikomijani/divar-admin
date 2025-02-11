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
      <Card elevation={8} sx={{ width: 500 }}>
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
