import Link from "next/link";
import DoctorProfile from "./doctor-profile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  HospitalIcon,
  LayoutDashboardIcon,
  SquareActivityIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

const items = [
  {
    title: "Dashboard",
    url: "/doctor",
    icon: <LayoutDashboardIcon className="size-4" />,
  },
  {
    title: "Agenda",
    url: "/doctor/agenda",
    icon: <Calendar className="size-4" />,
  },
  {
    title: "Dates",
    url: "/doctor/dates",
    icon: <HospitalIcon className="size-4" />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex h-14 justify-between items-center px-4 lg:h-[60px] lg:px-6 text-black">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <SquareActivityIcon className="h-8 w-8" />
            <span>Agenda Médica</span>
          </Link>
        </div>
        <DoctorProfile />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/api/auth/signin" });
          }}
        >
          <Button type="submit" className="w-full">
            Cerrar sesión
          </Button>
        </form>
      </SidebarFooter>
    </Sidebar>
  );
}
