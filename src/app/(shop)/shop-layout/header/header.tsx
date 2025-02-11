import { Box, Container, IconButton, TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Navbar from './navbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import UserIcon from './user-icon';

export default async function Header() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        m: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'appBar',
      }}
    >
      <Container>
        <Box
          sx={{
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            py: 2,
            m: 0,
          }}
        >
          <Image alt="logo" height={30} src="/logo.svg" width={195} />
          <TextField
            fullWidth
            label="جست و جو"
            name="search"
            placeholder="جست و جو در بیش از ۲۰ ملیون کالا"
            size="small"
          />
          <Box alignItems="center" display="flex" gap={1}>
            <UserIcon />
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
        <Navbar />
      </Container>
    </Box>
  );
}
