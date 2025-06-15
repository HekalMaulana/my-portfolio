// /app/(admin)/projects/[id]/page.tsx

import ProjectForm from "@/components/features/projects/ProjectForm";
import { getProjectsById } from "@/lib/data";

const EditProjectsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const project = await getProjectsById(id);

  return (
    <div>
      <ProjectForm initialData={project} label="update" />
    </div>
  );
};

export default EditProjectsPage;
