import {
  Category,
  Label,
  People,
  Store,
  ShoppingBasket,
  Dashboard,
  LocationCity,
  ColorLens,
  Apple,
  EditAttributes,
  PhoneAndroid,
} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  { href: "/admin/dashboard", Icon: Dashboard, text: "داشبورد" },
  { href: "/admin/dashboard/badges", Icon: Label, text: "برچسب‌ها" },
  { href: "/admin/dashboard/brands", Icon: Apple, text: "برند" },
  {
    href: "/admin/dashboard/categories",
    Icon: Category,
    text: "دسته‌بندی کالاها",
  },
  { href: "/admin/dashboard/cities", Icon: LocationCity, text: "شهرها" },
  { href: "/admin/dashboard/colors", Icon: ColorLens, text: "رنگ‌ها" },
  {
    href: "/admin/dashboard/properties",
    Icon: EditAttributes,
    text: "ویژگی‌ها",
  },
  { href: "/admin/dashboard/products", Icon: PhoneAndroid, text: "محصولات" },
  { href: "/admin/dashboard/users", Icon: People, text: "کاربران" },
  { href: "/admin/dashboard/sellers", Icon: Store, text: "فروشندگان" },
  { href: "/admin/dashboard/orders", Icon: ShoppingBasket, text: "سفارشات" },
];
