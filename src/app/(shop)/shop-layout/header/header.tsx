import {
  Box,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Navbar from './navbar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import UserIcon from './user-icon';
import { Search } from '@mui/icons-material';

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
      <Container maxWidth="xl">
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
          <Box alignItems="center" display="flex" flexGrow={1} gap={2}>
            <Image alt="logo" height={30} src="/logo.svg" width={195} />
            <TextField
              name="search"
              placeholder="جست و جو در بیش از ۲۰ ملیون کالا"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                width: 600,
                bgcolor: 'background.default',
              }}
            />
          </Box>
          <Box alignItems="center" display="flex" gap={1}>
            <UserIcon />
            <Divider flexItem orientation="vertical" variant="middle" />
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
