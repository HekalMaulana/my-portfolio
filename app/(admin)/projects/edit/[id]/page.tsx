// /app/(admin)/projects/[id]/page.tsx

import ProjectForm from "@/components/admin/projectForm";
import { getProjectsById } from "@/lib/data";

const editProjectsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const project = await getProjectsById(id);

  return (
    <div>
      <ProjectForm initialData={project} label="update" />
    </div>
  );
};

export default editProjectsPage;
