// /components/settings/SettingCard.tsx
"use client";

import type { Setting } from "@/app/generated/prisma";
import { HiOutlineKey } from "react-icons/hi";
import { DeleteButton, EditButton } from "@/components/settings/button";

const SettingCard = ({ setting }: { setting: Setting }) => {
  return (
    // WADAH KARTU: Perubahan ada di sini (shadow dan border)
    <div className="flex h-full gap-3 flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* --- AREA KONTEN UTAMA --- */}
      <div className="flex-grow p-6 space-y-4">
        {/* Judul (Label) */}
        <h5 className="text-lg font-semibold tracking-tight text-slate-800">
          {setting.label || "Tanpa Label"}
        </h5>

        {/* Key dibuat seperti "Badge" dengan outline */}
        <div className="inline-flex items-center rounded-md border border-slate-300 bg-white px-2.5 py-1">
          <HiOutlineKey className="h-4 w-4 text-slate-500" />
          <p className="ml-2 text-xs font-mono text-slate-700">{setting.key}</p>
        </div>

        {/* Isi Konten (Value) */}
        <p className="text-sm font-normal text-slate-600" title={setting.value}>
          <span className="line-clamp-3">{setting.value}</span>
        </p>
      </div>

      {/* --- AREA AKSI (FOOTER): Dibuat putih bersih sebagai pemisah --- */}
      <div className="flex items-center justify-end gap-3 border-t-2 border-slate-200 bg-white px-6 py-4">
        <DeleteButton id={setting.key} />
        <EditButton id={setting.key} />
      </div>
    </div>
  );
};

export default SettingCard;
