// /components/icons/starRating.tsx
"use client";

import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const StarRating = ({
  initialRating = 0,
}: {
  initialRating?: number | null;
}) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <input type="hidden" name="rating" value={rating} />

      <div
        className="flex items-center space-x-1"
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((starIndex) => {
          return (
            <button
              key={starIndex}
              type="button"
              className="bg-transparent border-non cursor-pointer"
              onClick={() => setRating(starIndex === rating ? 0 : starIndex)}
              onMouseEnter={() => setHover(starIndex)}
            >
              {starIndex <= (hover || rating) ? (
                <IoStar className="w-6 h-6 text-yellow-400" />
              ) : (
                <IoStarOutline className="w-6 h-6 text-yellow-400" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
