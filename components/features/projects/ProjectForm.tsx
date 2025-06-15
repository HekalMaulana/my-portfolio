// /components/admin/projectForm.tsx
"use client";

import {
  createProject,
  updateProject,
  type State,
} from "@/lib/actions/projectAction";
import { SubmitButton } from "@/components/ui/SubmitButton";
import type { Project } from "@/app/generated/prisma";
import { useActionState } from "react";

const ProjectForm = ({
  initialData,
  label,
}: {
  initialData?: Project | null;
  label: string;
}) => {
  const actionToUse: (
    prevState: State | null,
    formData: FormData
  ) => Promise<State> = initialData ? updateProject : createProject;

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

        {/* Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900"
          >
            Judul Project
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={initialData?.title}
            required
            placeholder="Judul Project..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.title && (
              <p className="pt-2 text-sm text-red-500">{state.errors?.title}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-900"
          >
            Deskripsi Project
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={initialData?.description}
            required
            placeholder="Deskripsi Project..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">
              {state?.errors?.description}
            </p>
          </div>
        </div>
        {/* Image Url */}
        <div className="mb-5">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-900"
          >
            URL Image
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            defaultValue={initialData?.imageUrl}
            required
            placeholder="https://example.com/..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">
              {state?.errors?.imageUrl}
            </p>
          </div>
        </div>
        {/* Project Url */}
        <div className="mb-5">
          <label
            htmlFor="projectUrl"
            className="block text-sm font-medium text-gray-900"
          >
            URL Project (Opsional)
          </label>
          <input
            type="text"
            name="projectUrl"
            id="projectUrl"
            defaultValue={initialData?.projectUrl ?? ""}
            placeholder="https://example.com/..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">
              {state?.errors?.projectUrl}
            </p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-900"
          >
            Tags
          </label>
          <input
            type="text"
            name="tags"
            id="tags"
            defaultValue={initialData?.tags.join(", ")}
            required
            placeholder="Nextjs, Machine Learning, Tailwind CSS ...."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">{state?.errors?.tags}</p>
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

export default ProjectForm;
