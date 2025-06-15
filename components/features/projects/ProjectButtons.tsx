import { deleteProject } from "@/lib/actions/projectAction";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

// Create Button Project
export const CreateButtonProject = () => {
  return (
    <Link
      href={"/projects/new"}
      className="inline-flex items-center justify-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={25} />
      Create
    </Link>
  );
};

// Edit Button Project
export const EditButtonProject = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/projects/edit/${id}`}
      className="rounded-sm border bg-blue-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300"
    >
      <IoPencil size={25} />
    </Link>
  );
};

// Delete Button Project
export const DeleteButtonProject = ({ id }: { id: string }) => {
  const deleteProjectById: any = deleteProject.bind(null, id);

  return (
    <form action={deleteProjectById}>
      <button className="rounded-sm border cursor-pointer bg-red-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoTrashOutline size={25} />
      </button>
    </form>
  );
};
