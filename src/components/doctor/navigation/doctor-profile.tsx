import Image from "next/image";
import { auth } from "@/auth";
import Link from "next/link";

export default async function DoctorProfile() {
  const session = await auth();

  const name = session?.user?.name ?? "Desconocido";
  const imgUrl = session?.user?.image ?? "/person.png";
  const role = session?.user?.roles ?? "Desconocido";

  return (
    <div id="profile" className="py-4">
      <Image
        src={imgUrl}
        alt="Avatar user"
        width={50}
        height={100}
        className="w-10 md:w-16 rounded-full mx-auto"
      />
      <div>
        <Link href="/doctor/profile">
          <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
            {name}
          </h2>
        </Link>
        <p className="text-xs text-gray-500 text-center">{role}</p>
      </div>
    </div>
  );
}
