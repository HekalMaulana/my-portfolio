// app/(admin)/layout.tsx
import Sidebar from "@/components/admin/sidebar";
import Navbar from "@/components/admin/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Tambahkan logika pengamanan di sini nanti
  return (
    <div className="flex sm:grid sm:grid-cols-[256px_1fr]">
      <div className="sm:block hidden">
        <Sidebar />
      </div>
      <div className="">
        <div className="sm:hidden">
          <Navbar />
        </div>
        <main className="bg-gray-50 pt-24 sm:p-1">{children}</main>
      </div>
    </div>
  );
}
