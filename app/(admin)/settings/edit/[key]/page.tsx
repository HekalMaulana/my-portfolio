import UpdateSettingForm from "@/components/settings/updateSettingForm";
import { getSettingsByKey } from "@/lib/data";
import { notFound } from "next/navigation";

interface UpdataPageProps {
  params: {
    key: string;
  };
}

const UpdateSetting = async ({ params }: UpdataPageProps) => {
  const { key } = await params;
  const setting = await getSettingsByKey(key);

  if (!setting) {
    notFound();
  }

  return (
    <div>
      <UpdateSettingForm setting={setting} />
    </div>
  );
};

export default UpdateSetting;
