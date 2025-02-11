import React from 'react';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { auth } from '@/lib/session';
import { Button, IconButton } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import Link from 'next/link';

export default async function UserIcon() {
  const { isLogin } = await auth();

  if (isLogin) {
    return (
      <IconButton component={Link} href="/profile">
        <PersonOutlineOutlinedIcon />
      </IconButton>
    );
  }
  return (
    <Button
      color="inherit"
      component={Link}
      href="/auth/login"
      size="small"
      startIcon={<LoginOutlined />}
      variant="outlined"
      sx={{
        flexShrink: 0,
        borderColor: 'divider',
      }}
    >
      ورود | ثبت‌نام
    </Button>
  );
}
