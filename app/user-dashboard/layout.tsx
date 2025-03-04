import type { Metadata } from "next";
import Sidebar from "@/components/user-dashboard/Sidebar";
import Providers from "@/app/user-dashboard/providers";

export const metadata: Metadata = {
  title: "Nesterlify Users' Dashboard",
  description: "The dashboard for users of Nesterlify",
};

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
