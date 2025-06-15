// /actions/reviewAction.ts
"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Tipe untuk state yang dikembalikan
export type State = {
  errors?: {
    name?: string[];
    comment?: string[];
    rating?: Int16Array[];
    isApproved?: boolean[];
  };
  message?: string;
};

// Skema Zod untuk validasi
const ReviewSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Judul harus memiliki minimal 4 karakter" }),
  comment: z
    .string()
    .min(10, { message: "Deskripsi harus memiliki minimal 10 karakter" }),
  rating: z.number().min(1, { message: "Rating Tidak Boleh Kosong" }),
  isApproved: z.boolean(),
});

// --- FUNGSI CREATE ---
export const createReview = async (
  prevState: State | null,
  formData: FormData
) => {
  const validatedFields = ReviewSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.ulasan.create({
      data: validatedFields.data,
    });
  } catch (error) {
    return { message: "Database Error: Gagal membuat ulasan." };
  }

  revalidatePath("/reviews");
  redirect("/reviews");
};

// --- FUNGSI UPDATE ---
export const approveReview = async (id: string) => {
  try {
    await prisma.ulasan.update({
      where: {
        id,
      },
      data: {
        isApproved: true,
      },
    });
  } catch (error) {
    return { message: "Database Error: Gagal mengupdate ulasan." };
  }

  revalidatePath("/reviews");
};

// --- FUNGSI DELETE ---
export const deleteReview = async (id: string) => {
  try {
    await prisma.ulasan.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Database Error: Gagal menghapus ulasan." };
  }

  revalidatePath("/reviews");
};
