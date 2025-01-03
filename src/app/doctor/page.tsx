import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DoctorPage() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
