import Sidebar from "@/components/user/Sidebar";
import Topbar from "@/components/user/Topbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f7f5] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-[250px]">
        <Topbar />

        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}