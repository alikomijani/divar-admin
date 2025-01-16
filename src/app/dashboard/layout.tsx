import DrawerHeader from "@/components/dashboard-layout/components/DrawerHeader";
import DashboardHeader from "@/components/dashboard-layout/DashboardHeader";
import DrawerProvider from "@/components/dashboard-layout/DrawerProvider";
import MiniDrawer from "@/components/dashboard-layout/MiniDrawer";
import { Box } from "@mui/material";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerProvider>
        <DashboardHeader />
        <MiniDrawer />
      </DrawerProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default DashboardLayout;
