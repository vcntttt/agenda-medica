import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { format } from "@formkit/tempo";
import { Event } from "@prisma/client";

export function EventCard({ title, start, end }: Event) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{format(start, "DD/MM/YYYY")} </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Hora de inicio: {format(start, "HH:mm")}</p>
        <p>Hora de finalización: {format(end, "HH:mm")}</p>
      </CardContent>
    </Card>
  );
}
