import { deleteSetting } from "@/lib/actions/settingAction";
import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

// Create Button Setting
export const CreateButtonSetting = () => {
  return (
    <Link
      href={"/settings/new"}
      className="inline-flex items-center justify-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
    >
      <IoAddSharp size={25} />
      Create
    </Link>
  );
};

// Edit button Setting
export const EditButtonSetting = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/settings/edit/${id}`}
      className="rounded-sm border bg-blue-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300"
    >
      <IoPencil size={25} />
    </Link>
  );
};

// Delete Button Setting
export const DeleteButtonSetting = ({ id }: { id: string }) => {
  const deleteSettingByKey: any = deleteSetting.bind(null, id);

  return (
    <form action={deleteSettingByKey}>
      <button className="rounded-sm border cursor-pointer bg-red-300 border-gray-700 p-1 transition-colors duration-300 hover:bg-gray-300">
        <IoTrashOutline size={25} />
      </button>
    </form>
  );
};
