import type { Setting } from "@/app/generated/prisma";
import { EditButton, DeleteButton } from "@/components/settings/button";

// /components/admin/projectTable
const SettingsTable = ({ settings }: { settings: Setting[] }) => {
  return (
    <div className="relative w-full overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left table-fixed rtl:text-right text-gray-500 border-2 border-gray-600">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 w-[5%] text-center items-center"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Key
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[25%] text-center items-center"
            >
              Value
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Label
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[25%] text-center items-center"
            >
              Group
            </th>
            <th
              scope="col"
              className="px-6 py-4 w-[15%] text-center items-center"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting, index) => (
            <tr
              key={setting.key}
              className="bg-gray-200 border-b-2 text-gray-600"
            >
              <td className="px-6 py-4 text-center">{index + 1}</td>
              <th className="font-medium text-gray-900 break-words text-center items-center">
                {setting.key}
              </th>
              <td className="px-6 py-4">
                <p className="truncate" title={setting.value}>
                  {setting.value}
                </p>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900">
                {setting.label}
              </td>
              <td className="px-6 py- text-center">
                <span className="px-3 py-1 text-base font-semibold rounded-full bg-sky-100 text-sky-800">
                  {setting.group}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  <EditButton id={setting.key} />
                  <DeleteButton id={setting.key} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SettingsTable;
