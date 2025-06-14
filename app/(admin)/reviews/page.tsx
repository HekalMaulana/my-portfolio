// /app/(admin)/reviews/page.tsx

import ReviewsTable from "@/components/reviews/reviewsTable";
import { getReviews } from "@/lib/data";

const DashboardPage = async () => {
  const reviews = await getReviews();

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full py-5 px-3">
      <ReviewsTable reviews={reviews} />
    </div>
  );
};

export default DashboardPage;
