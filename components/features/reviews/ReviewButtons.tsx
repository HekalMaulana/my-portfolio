import { approveReview, deleteReview } from "@/lib/actions/reviewAction";
import { IoCheckmarkSharp, IoTrashOutline } from "react-icons/io5";

// Approve Review
export const ApproveButtonReview = ({ id }: { id: string }) => {
  const approveReviewById: any = approveReview.bind(null, id);

  return (
    <form action={approveReviewById}>
      <button className="rounded-sm border cursor-pointer bg-green-500 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoCheckmarkSharp size={25} />
      </button>
    </form>
  );
};

// Delete Review
export const DeleteButtonReview = ({ id }: { id: string }) => {
  const deleteReviewById: any = deleteReview.bind(null, id);

  return (
    <form action={deleteReviewById}>
      <button className="rounded-sm border cursor-pointer bg-red-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoTrashOutline size={25} />
      </button>
    </form>
  );
};
