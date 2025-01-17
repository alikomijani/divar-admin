import { getProperties } from "@/app/server-api/property";
import { ServerPageProps } from "@/app/server-api/types";
import AITable from "@/components/tables/AITable";

export async function PropertiesTable({
  searchParams,
}: Pick<ServerPageProps, "searchParams">) {
  const params = await searchParams;
  const properties = await getProperties(params);
  return (
    <AITable
      data={properties}
      schema={[
        {
          title: "شماره",
          render: (row) => row.id,
        },
        {
          title: "نام",
          render: (row) => row.name,
        },
        {
          title: "برچسب",
          render: (row) => row.label,
        },
        {
          title: "نوع داده",
          render: (row) => row.type,
        },
      ]}
    />
  );
}
