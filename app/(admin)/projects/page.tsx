// /app/(admin)/projects/page.tsx

import ProjectTable from "@/components/admin/projectsTable";
import { getProjects } from "@/lib/data";
import { CreateButton } from "@/components/admin/button";

const DashboardPage = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full py-5 px-3">
      <CreateButton />
      <ProjectTable projects={projects} />
    </div>
  );
};

export default DashboardPage;
