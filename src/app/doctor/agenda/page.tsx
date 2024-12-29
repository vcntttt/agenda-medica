import Calendar from "@/components/doctor/calendar";
import prisma from "@/lib/prisma";

export default async function AgendaPage() {
  const dates = await prisma.event.findMany();

  return (
    <div>
      <Calendar events={dates} />
    </div>
  );
}