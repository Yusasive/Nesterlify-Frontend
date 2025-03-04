import Sidebar from "@/components/user-dashboard/Sidebar";
import Providers from "@/app/user-dashboard/providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="flex bg-[#FFFFFF]">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </Providers>
  );
}
