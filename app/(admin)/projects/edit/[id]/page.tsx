import ProjectForm from "@/components/admin/projectForm";
// import { getProjectsById } from "@/lib/data";

const editProjectsPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  //   const contact = await getProjectsById(id);

  return (
    <div>
      <ProjectForm />
    </div>
  );
};

export default editProjectsPage;
