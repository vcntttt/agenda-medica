import { EventCard } from "@/components/doctor/dates/card";
import prisma from "@/lib/prisma";

export default async function DatePage() {
  const dates = await prisma.event.findMany();
  return (
    <>
      {/* <h1 className="text-3xl font-bold">Dates</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dates.map((date) => (
          <EventCard key={date.id} {...date} />
        ))}
      </div>
    </>
  );
}
