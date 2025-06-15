// /components/admin/updateSettingForm.tsx
"use client";

import { SubmitButton } from "@/components/settings/button";
import type { Setting } from "@/app/generated/prisma";
import { useActionState } from "react";
import { UpdateSetting } from "@/actions/settingAction";

const UpdateSettingForm = ({ setting }: { setting: Setting }) => {
  const availableGroups = [
    "Konten Halaman",
    "Sosial Media & Kontak",
    "Pengaturan Umum",
    "Lainnya",
  ];

  const updateSettingByKey = UpdateSetting.bind(null, setting.key);
  const [state, formState] = useActionState(updateSettingByKey, null);

  return (
    <div>
      <form action={formState}>
        {/* Key */}
        <div className="mb-5">
          <label
            htmlFor="key"
            className="block text-sm font-medium text-gray-900"
          >
            Key Content
          </label>
          <p className="mt-1 text-xs text-gray-500">
            Gunakan format camelCase, tanpa spasi. Contoh: aboutMeContent,
            githubUrl.
          </p>
          <input
            type="text"
            name="key"
            id="key"
            defaultValue={setting.key}
            required
            readOnly
            placeholder="aboutMeContent"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="key-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">{state?.errors?.key}</p>
          </div>
        </div>

        {/* Value Content */}
        <div className="mb-5">
          <label
            htmlFor="value"
            className="block text-sm font-medium text-gray-900"
          >
            Value Content
          </label>
          <textarea
            name="value"
            id="value"
            defaultValue={setting.value}
            required
            placeholder="Value Content..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="value-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">{state?.errors?.value}</p>
          </div>
        </div>

        {/* Label */}
        <div className="mb-5">
          <label
            htmlFor="label"
            className="block text-sm font-medium text-gray-900"
          >
            Label Content
          </label>
          <input
            type="text"
            name="label"
            id="label"
            defaultValue={setting.label ?? ""}
            required
            placeholder="Nomor Whatsapp"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {/* Error */}
          <div id="label-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">{state?.errors?.label}</p>
          </div>
        </div>

        {/* Group */}
        <div className="mb-5">
          <label
            htmlFor="group"
            className="block text-sm font-medium text-gray-900"
          >
            Group Content
          </label>
          <select
            name="group"
            id="group"
            defaultValue={setting.group ?? ""}
            className="w-full rounded-full border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          >
            <option value="" disabled>
              Pilih Group
            </option>
            {availableGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
          {/* Error */}
          <div id="group-error" aria-live="polite" aria-atomic="true">
            <p className="pt-2 text-sm text-red-500">{state?.errors?.group}</p>
          </div>
        </div>

        {/* Submit Button */}
        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default UpdateSettingForm;
