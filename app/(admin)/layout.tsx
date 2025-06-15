// app/(admin)/layout.tsx
import Breadcrumbs from "@/components/layout/BreadCrumbs";
import Sidebar from "@/components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Tambahkan logika pengamanan di sini nanti
  return (
    <div className="grid grid-cols-[256px_1fr]">
      <div className="min-h-screen">
        <Sidebar />
      </div>
      <div className="min-h-screen">
        <div></div>
        <main className="bg-gray-50 p-8 min-h-screen">
          <Breadcrumbs />
          {children}
        </main>
      </div>
    </div>
  );
}
