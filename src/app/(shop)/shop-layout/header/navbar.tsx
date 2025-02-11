import { Box } from "@mui/material";
import ScrollTriggerCollapse from "./scroll-trigger-collapse";

export default async function Navbar() {
  return (
    <ScrollTriggerCollapse>
      <Box component="nav">
        <Box
          component="ul"
          sx={{
            p: 0,
            m: 0,
            display: "flex",
            listStyleType: "none",
            gap: 1,
            "&>*": {
              cursor: "pointer",
              p: 1,
            },
          }}
        >
          <Box component="li">دسته بندی کالاها</Box>
          <Box component="li">شگفت انگیز</Box>
          <Box component="li">سوپرمارکت</Box>
          <Box component="li">طلای دیجیتال</Box>
          <Box component="li">پرفروش‌ترین‌ها</Box>
          <Box component="li">خرید کالای کارکرده</Box>
          <Box component="li">سوالی دارید؟</Box>
          <Box component="li">در دیجی‌کلا بفروشید</Box>
        </Box>
      </Box>
    </ScrollTriggerCollapse>
  );
}
