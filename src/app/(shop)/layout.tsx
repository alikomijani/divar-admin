import Header from './shop-layout/header';
import Footer from './shop-layout/footer';
import { Box } from '@mui/material';
import { CartStoreProvider } from '@/store/cart-provider';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartStoreProvider>
      <Box bgcolor="background.paper">
        <Header />
        {/* header is fixed so main component must be careful about margin */}
        <Box mt={16} />
        <Box component="main">{children}</Box>
        <Footer />
      </Box>
    </CartStoreProvider>
  );
}
