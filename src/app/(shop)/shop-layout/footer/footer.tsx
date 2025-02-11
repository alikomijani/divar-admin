import { ArrowUpward } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default async function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Image alt="logo" height={30} src="/logo.svg" width={195} />
          <Button
            color="inherit"
            endIcon={<ArrowUpward />}
            size="small"
            variant="outlined"
          >
            بازگشت به بالا
          </Button>
        </Box>
        <Box
          component="ul"
          sx={{
            display: 'flex',
            gap: 3,
            padding: 0,
            margin: 0,
            my: 2,
            listStyle: 'none',
            '&>*': {
              typography: 'body2',
            },
          }}
        >
          <Box component="li">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</Box>
          <Box component="li">۰۲۱-۹۱۰۰۰۱۰۰</Box>
          <Box component="li">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</Box>
        </Box>
        <Box display="flex" justifyContent="space-between" my={4}>
          {footerItems.map((item) => (
            <Stack key={item.text} alignItems="center">
              <Image alt="" height={56} src={item.image} width={56} />
              <Typography variant="caption">{item.text}</Typography>
            </Stack>
          ))}
        </Box>
        <Divider />
        <Box textAlign="center">
          <Typography variant="overline">
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

const footerItems = [
  {
    image: '/images/express-delivery.svg',
    text: 'امکان تحویل اکسپرس',
  },
  {
    image: '/images/cash-on-delivery.svg',
    text: 'امکان پرداخت در محل',
  },
  {
    image: '/images/support.svg',
    text: '۷ روز هفته، ۲۴ ساعته',
  },
  {
    image: '/images/days-return.svg',
    text: 'هفت روز ضمانت بازگشت کالا',
  },
  {
    image: '/images/original-products.svg',
    text: 'ضمانت اصل  بودن کالا',
  },
];
