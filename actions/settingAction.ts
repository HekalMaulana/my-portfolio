// /actions/settingAction.ts
"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const settingSchema = z.object({
  key: z.string().min(4),
  value: z.string().min(4),
  label: z.string().min(4),
  group: z.string().min(4),
});

// --- FUNGSI CREATE ---
export const CreateSetting = async (prevState: any, data: FormData) => {
  const validatedData = settingSchema.safeParse(
    Object.fromEntries(data.entries())
  );

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.setting.create({
      data: validatedData.data,
    });
  } catch (error) {
    return { message: "Database Error: Gagal membuat settings." };
  }

  revalidatePath("/settings");
  redirect("/settings");
};

// --- Fungsi Update ---
export const UpdateSetting = async (
  id: string,
  prevSate: any,
  data: FormData
) => {
  const validatedData = settingSchema.safeParse(
    Object.fromEntries(data.entries())
  );

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.setting.update({
      where: { key: id },
      data: validatedData.data,
    });
  } catch (error) {
    return { message: "Database Error: Gagal membuat setting." };
  }

  revalidatePath("/settings");
  redirect("/settings");
};

//  --- Fungsi Delete ---
export const deleteSetting = async (key: string) => {
  try {
    await prisma.setting.delete({
      where: { key },
    });
  } catch (error) {
    return { message: "Database Error: Gagal menghapus setting." };
  }

  revalidatePath("/settings");
};
