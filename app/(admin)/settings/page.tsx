// /app/(admin)/settings/page.tsx

import { getSettings } from "@/lib/data";
import { CreateButtonSetting } from "@/components/features/settings/SettingButtons";
import SettingGroup from "@/components/features/settings/SettingGroup";
import type { Setting } from "@/app/generated/prisma";

const SettingsPage = async () => {
  const settings = await getSettings();

  // Logika untuk mengelompokkan settings berdasarkan 'group'
  const groupedSettings = settings.reduce(
    (acc: Record<string, Setting[]>, setting) => {
      // Jika grup null/kosong, masukkan ke grup "Lainnya"
      const group = setting.group || "Lainnya";

      if (!acc[group]) {
        // Jika tidak ada groupnya
        acc[group] = []; // Maka membuat group baru
      }

      acc[group].push(setting); // Meletakan setting kedalam group
      return acc; // Menngembalikan group
    },
    {} as Record<string, Setting[]>
  ); // Tipe untuk accumulator

  return (
    <div className="flex flex-col gap-8 w-full py-5 px-3">
      <CreateButtonSetting />
      {/* Render setiap grup setting */}
      {Object.entries(groupedSettings).map(([groupName, settingsInGroup]) => (
        <SettingGroup
          key={groupName}
          groupName={groupName}
          settings={settingsInGroup}
        />
      ))}
    </div>
  );
};

export default SettingsPage;
