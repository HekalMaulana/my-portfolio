// /actions/projectAction.ts

"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Tipe untuk state yang dikembalikan
export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    imageUrl?: string[];
    projectUrl?: string[];
    tags?: string[];
  };
  message?: string;
};

// Skema Zod untuk validasi
const ProjectSchema = z.object({
  title: z
    .string()
    .min(6, { message: "Judul harus memiliki minimal 6 karakter" }),
  description: z
    .string()
    .min(20, { message: "Deskripsi harus memiliki minimal 20 karakter" }),
  imageUrl: z.string().min(1, { message: "URL Gambar tidak boleh kosong" }),
  projectUrl: z.string().optional(),
  tags: z.string().transform((val) => val.split(",").map((tag) => tag.trim())),
});

// --- FUNGSI CREATE ---
export const createProject = async (
  prevState: State | null,
  formData: FormData
) => {
  const validatedFields = ProjectSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.project.create({
      data: validatedFields.data,
    });
  } catch (error) {
    return { message: "Database Error: Gagal membuat proyek." };
  }

  revalidatePath("/projects");
  redirect("/projects");
};

// --- FUNGSI UPDATE ---
const UpdateProjectSchema = ProjectSchema.extend({
  id: z.string().cuid(),
});

export const updateProject = async (
  prevState: State | null,
  formData: FormData
) => {
  const validatedFields = UpdateProjectSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { id, ...dataToUpdate } = validatedFields.data;

  try {
    await prisma.project.update({
      where: { id },
      data: dataToUpdate,
    });
  } catch (error) {
    return { message: "Database Error: Gagal mengupdate proyek." };
  }

  revalidatePath("/projects");
  redirect("/projects");
};

// --- FUNGSI DELETE ---
export const deleteProject = async (id: string) => {
  try {
    await prisma.project.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Database Error: Gagal menghapus proyek." };
  }

  revalidatePath("/projects");
};
