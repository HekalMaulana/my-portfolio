import type { Project } from "@/app/generated/prisma";
import {
  EditButtonProject,
  DeleteButtonProject,
} from "@/components/features/projects/ProjectButtons";

// /components/admin/projectTable
const ProjectTable = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left table-fixed rtl:text-right text-gray-500 border-2 border-gray-600">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4 w-[5%]">
              No
            </th>
            <th scope="col" className="px-6 py-4 w-[15%]">
              Judul Proyek
            </th>
            <th scope="col" className="px-6 py-4 w-[30%]">
              Deskripsi
            </th>
            <th scope="col" className="px-6 py-4 w-[15%]">
              Image URL
            </th>
            <th scope="col" className="px-6 py-4 w-[15%]">
              Project Url
            </th>
            <th scope="col" className="px-6 py-4 w-[15%]">
              Tags
            </th>
            <th scope="col" className="px-6 py-4 w-[15%]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={project.id}
              className="bg-gray-200 border-b-2 text-gray-600"
            >
              <td className="px-4 py-2">{index + 1}</td>
              <th className="px-4 py-2 font-medium text-gray-900 break-words">
                {project.title}
              </th>
              <td className="px-4 py-2">{project.description}</td>
              <td className="px-4 py-2 truncate">{project.imageUrl}</td>
              <td className="px-4 py-2 truncate">{project.projectUrl}</td>
              <td className="px-4 py-2">{project.tags.join(", ")}</td>
              <td className="flex justify-center gap-3 py-3 mt-2 items-center">
                <EditButtonProject id={project.id} />
                <DeleteButtonProject id={project.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
