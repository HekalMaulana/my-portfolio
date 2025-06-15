// /app/(admin)/reviews/page.tsx

import ReviewsTable from "@/components/features/reviews/ReviewsTable";
import { getReviews } from "@/lib/data";

const ReviewPage = async () => {
  const reviews = await getReviews();

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full py-5 px-3">
      <ReviewsTable reviews={reviews} />
    </div>
  );
};

export default ReviewPage;
