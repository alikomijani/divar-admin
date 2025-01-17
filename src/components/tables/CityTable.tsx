import { getCities } from "@/app/server-api/city";
import AITable from "./AITable";
import { ServerPageProps } from "@/app/server-api/types";

export default async function CityTable({
  searchParams,
}: Pick<ServerPageProps, "searchParams">) {
  const params = await searchParams;
  const cities = await getCities(params);
  return (
    <AITable
      data={cities}
      schema={[
        {
          title: "شناسه",
          render: (row) => row.id,
        },
        {
          title: "کد شهر",
          render: (row) => row.slug,
        },
        {
          title: "نام فارسی",
          render: (row) => row.name,
        },
        {
          title: "پیش شماره",
          render: (row) => row.code,
        },
        {
          title: "تاریخ ساخت",
          render: (row) => new Date(row.createdAt).toLocaleDateString(),
        },
        {
          title: "آخرین بروزرسانی",
          render: (row) => new Date(row.updatedAt).toLocaleDateString(),
        },
      ]}
    />
  );
}
