// /components/admin/button/button.tsx
"use client";

import { IoCheckmarkSharp, IoTrashOutline } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteReview } from "@/actions/reviewAction";
import { approveReview } from "@/actions/reviewAction";

// export const CreateButton = () => {
//   return (
//     <Link
//       href={"/reviews/new"}
//       className="inline-flex items-center justify-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
//     >
//       <IoAddSharp size={25} />
//       Create
//     </Link>
//   );
// };

export const ApproveButton = ({ id }: { id: string }) => {
  const approveReviewById: any = approveReview.bind(null, id);

  return (
    <form action={approveReviewById}>
      <button className="rounded-sm border cursor-pointer bg-green-500 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoCheckmarkSharp size={25} />
      </button>
    </form>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteReviewById: any = deleteReview.bind(null, id);

  return (
    <form action={deleteReviewById}>
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
