// /app/(admin)/projects/page.tsx

import ProjectTable from "@/components/features/projects/ProjectsTable";
import { getProjects } from "@/lib/data";
import { CreateButtonProject } from "@/components/features/projects/ProjectButtons";

const DashboardPage = async () => {
  const projects = await getProjects();

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full py-5 px-3">
      <CreateButtonProject />
      <ProjectTable projects={projects} />
    </div>
  );
};

export default DashboardPage;
