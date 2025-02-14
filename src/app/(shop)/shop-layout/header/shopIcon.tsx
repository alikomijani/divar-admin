'use client';
import Popover from '@mui/material/Popover';

import { ShoppingCartOutlined } from '@mui/icons-material';
import { Box, ClickAwayListener, IconButton } from '@mui/material';
import React from 'react';
import { Cart } from './cart';

export default function ShopIcon() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Box onMouseEnter={handlePopoverOpen}>
      <IconButton
        aria-haspopup="true"
        aria-owns={open ? 'mouse-over-popover' : undefined}
      >
        <ShoppingCartOutlined />
      </IconButton>
      <ClickAwayListener onClickAway={handlePopoverClose}>
        <Popover
          disableRestoreFocus
          disableScrollLock
          anchorEl={anchorEl}
          elevation={2}
          id="mouse-over-popover"
          open={open}
          sx={{ pointerEvents: 'none' }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Cart />
        </Popover>
      </ClickAwayListener>
    </Box>
  );
}
