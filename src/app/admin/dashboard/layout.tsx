import AuthProvider from "@/components/AuthProvider";
import DrawerHeader from "@/components/dashboard-layout/components/DrawerHeader";
import DashboardHeader from "@/components/dashboard-layout/DashboardHeader";
import DrawerProvider from "@/components/dashboard-layout/DrawerProvider";
import MiniDrawer from "@/components/dashboard-layout/MiniDrawer";
import QueryProvider from "@/components/QueryProvider";
import { auth } from "@/lib/session";
import { Box } from "@mui/material";

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken } = await auth();
  return (
    <AuthProvider accessToken={accessToken || ""}>
      <QueryProvider>
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
      </QueryProvider>
    </AuthProvider>
  );
}

export default DashboardLayout;
