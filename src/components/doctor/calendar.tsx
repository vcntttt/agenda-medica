/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Event } from "@prisma/client";
import dayGridPlugin from "@fullcalendar/daygrid";
import es from "@fullcalendar/core/locales/es";
import FullCalendar from "@fullcalendar/react";
import timegridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  events: Event[];
}
import "./calendar.css";

export default function Calendar({ events }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>({});

  const handleClick = (info: { event: any }) => {
    const event: Event = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr,
      createdAt: info.event.extendedProps.createdAt,
      updatedAt: info.event.extendedProps.updatedAt,
    };
    setOpen(true);
    setSelectedEvent(event);
  };

  return (
    <>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        plugins={[dayGridPlugin, timegridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale={es}
        height={900}
        slotMinTime="08:00:00"
        slotMaxTime="23:00:00"
        eventClick={handleClick}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex flex-col gap-y-4">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <p>Event ID: {selectedEvent?.id}</p>
          <p>Event Start: {selectedEvent?.start}</p>
          <p>Event End: {selectedEvent?.end}</p>
        <div className="flex gap-x-2 *:w-1/2 pt-4 col-span-2">
          <Button variant="destructive">Retirar producto</Button>
          <Button type="submit">Guardar cambios</Button>
        </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
