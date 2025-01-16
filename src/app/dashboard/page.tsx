import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  return <div>Dashboard</div>;
}
