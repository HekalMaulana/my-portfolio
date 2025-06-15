// components/settings/settingGroup.tsx

import type { Setting } from "@/app/generated/prisma";
import SettingCard from "@/components/settings/settingCard";

interface SettingsGroupProps {
  groupName: string;
  settings: Setting[];
}

const SettingGroup = ({ groupName, settings }: SettingsGroupProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{groupName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settings.map((setting) => (
          <SettingCard key={setting.key} setting={setting} />
        ))}
      </div>
    </section>
  );
};

export default SettingGroup;
