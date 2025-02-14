import { Box } from '@mui/material';
import ScrollTriggerCollapse from './scroll-trigger-collapse';
import MenuIcon from '@mui/icons-material/Menu';
import PercentIcon from '@mui/icons-material/Percent';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import StayPrimaryPortraitOutlinedIcon from '@mui/icons-material/StayPrimaryPortraitOutlined';

export default async function Navbar() {
  return (
    <ScrollTriggerCollapse>
      <Box component="nav">
        <Box
          component="ul"
          sx={{
            p: 0,
            m: 0,
            display: 'flex',
            listStyleType: 'none',
            gap: 1,
            '&> li': {
              cursor: 'pointer',
              p: 1,
              typography: 'body2',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            },
          }}
        >
          <Box component="li">
            <MenuIcon />
            دسته‌بندی کالاها
          </Box>
          <Box component="li">
            <PercentIcon />
            شگفت‌انگیز
          </Box>
          <Box component="li">
            <StorefrontIcon />
            سوپرمارکت
          </Box>
          <Box component="li">
            <LocalFireDepartmentOutlinedIcon />
            پرفروش‌ترین‌ها
          </Box>
          <Box component="li">
            <StayPrimaryPortraitOutlinedIcon />
            خرید کالای کارکرده
          </Box>
          <Box component="li">سوالی دارید؟</Box>
          <Box component="li">در دیجی‌کلا بفروشید</Box>
        </Box>
      </Box>
    </ScrollTriggerCollapse>
  );
}
