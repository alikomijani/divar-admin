import { getCities } from "@/app/server-api/city";
import { TableCell, TableRow } from "@mui/material";

export default async function CityTable() {
  const cities = await getCities();
  return (
    <>
      {cities.results.map((city) => (
        <TableRow key={city.id}>
          <TableCell>{city.id}</TableCell>
          <TableCell>{city.code}</TableCell>
          <TableCell>{city.name}</TableCell>
          <TableCell>{city.slug}</TableCell>
          <TableCell>{new Date(city.createdAt).toLocaleDateString()}</TableCell>
          <TableCell>{new Date(city.updatedAt).toLocaleDateString()}</TableCell>
        </TableRow>
      ))}
    </>
  );
}
