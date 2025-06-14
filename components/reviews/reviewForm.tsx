// /components/admin/projectForm.tsx
"use client";

import { createReview, updateReview, type State } from "@/actions/reviewAction";
import { SubmitButton } from "@/components/reviews/button";
import type { Ulasan } from "@/app/generated/prisma";
import { useActionState } from "react";
import StarRating from "@/components/icons/starRating";

const ReviewForm = ({
  initialData,
  label,
}: {
  initialData?: Ulasan | null;
  label: string;
}) => {
  const actionToUse: (
    prevState: State | null,
    formData: FormData
  ) => Promise<State> = initialData ? updateReview : createReview;

  const [state, formAction] = useActionState<State, FormData>(
    actionToUse,
    null
  );

  return (
    <div>
      <form action={formAction}>
        {/* 2. Jika mode edit, tambahkan input tersembunyi untuk ID */}
        {initialData && (
          <input type="hidden" name="id" defaultValue={initialData.id} />
        )}

        {/* name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Nama
          </label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={initialData?.name}
            required
            placeholder="Name..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.name && (
              <p className="pt-2 text-sm text-red-500">{state.errors?.name}</p>
            )}
          </div>
        </div>

        {/* comment */}
        <div className="mb-5">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-900"
          >
            Komentar
          </label>
          <textarea
            name="comment"
            id="comment"
            defaultValue={initialData?.comment}
            required
            placeholder="Komentar..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">
              {state?.errors?.comment}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-5">
          <legend className="mb-4 block text-sm font-medium text-gray-900">
            Rating
          </legend>
          <StarRating initialRating={initialData?.rating} />
        </div>

        {/* Error */}
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="pt-2 text-sm text-red-500">{state?.errors?.rating}</p>
        </div>

        {/* Status */}
        <div className="mb-5">
          <label
            htmlFor="isApproved"
            className="block text-sm font-medium text-gray-900"
          >
            Status
          </label>
          <input
            type="text"
            name="isApproved"
            id="isApproved"
            defaultValue={initialData?.isApproved ? "Approved" : "Pending"}
            placeholder="Approved / Pending"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">
              {state?.errors?.isApproved}
            </p>
          </div>
        </div>

        {/* Error Message */}
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="pt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        {/* Submit Button */}
        {label == "save" ? (
          <SubmitButton label="save" />
        ) : (
          <SubmitButton label={label} />
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
