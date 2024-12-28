import { Calendar, LayoutDashboardIcon, HospitalIcon } from "lucide-react";

export const navLinks = [
  {
    path: "/doctor",
    label: "Dashboard",
    icon: <LayoutDashboardIcon className="size-4" />,
  },
  {
    path: "/doctor/agenda",
    label: "Agenda",
    icon: <Calendar className="size-4" />,
  },
  {
    path: "/doctor/dates",
    label: "Dates",
    icon: <HospitalIcon className="size-4" />,
  },
];
