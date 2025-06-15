import type { Ulasan } from "@/app/generated/prisma";
import {
  ApproveButtonReview,
  DeleteButtonReview,
} from "@/components/features/reviews/ReviewButtons";
import { IoStar, IoStarOutline } from "react-icons/io5";

// /components/admin/projectTable
const ReviewsTable = ({ reviews }: { reviews: Ulasan[] }) => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left table-fixed rtl:text-right text-gray-500 border-2 border-gray-600">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 w-[5%] text-center items-center"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[30%] text-center items-center"
            >
              Comment
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Rating
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr
              key={review.id}
              className="bg-gray-200 border-b-2 text-gray-600"
            >
              <td className="text-center items-center">{index + 1}</td>
              <th className="font-medium text-gray-900 break-words text-center items-center">
                {review.name}
              </th>
              <td className="px-4 py-2">{review.comment}</td>
              <td className="flex justify-center items-center text-xl py-5 text-yellow-400">
                {[1, 2, 3, 4, 5].map((_, index) => {
                  return index < review.rating ? (
                    <IoStar key={index} />
                  ) : (
                    <IoStarOutline key={index} />
                  );
                })}
              </td>
              <td className="text-center items-center">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    review.isApproved
                      ? "bg-green-300 text-green-900"
                      : "bg-yellow-300 text-yellow-900"
                  }`}
                >
                  {review.isApproved ? "Approved" : "Pending"}
                </span>
              </td>
              <td className="flex justify-center gap-3 py-5 items-center text-center">
                {!review.isApproved && <ApproveButtonReview id={review.id} />}
                <DeleteButtonReview id={review.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewsTable;
