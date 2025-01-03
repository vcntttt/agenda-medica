import { auth } from "@/auth";

export default async function DoctorProfilePage() {
  const session = await auth()
  
  return (
    <div>
      <h1>Doctor Profile</h1>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
      <p>Image: {session?.user?.image}</p>
    </div>
  );
}