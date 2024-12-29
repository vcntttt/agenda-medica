import { AppSidebar } from "@/components/doctor/navigation/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-4">{children}</main>
    </SidebarProvider>
  );
}
