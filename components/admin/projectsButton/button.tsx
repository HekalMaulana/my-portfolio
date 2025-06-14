// /components/admin/button/button.tsx

"use client";

import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteProject } from "@/actions/projectAction";

export const CreateButton = () => {
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

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/projects/edit/${id}`}
      className="rounded-sm border bg-blue-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300"
    >
      <IoPencil size={25} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteProjectById: any = deleteProject.bind(null, id);

  return (
    <form action={deleteProjectById}>
      <button className="rounded-sm border cursor-pointer bg-red-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoTrashOutline size={25} />
      </button>
    </form>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  const className = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-sm px-5 py-3 text-center w-full",
    {
      "opacity-50 cursor-progress": pending,
    }
  );

  return (
    <button type="submit" className={className} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
