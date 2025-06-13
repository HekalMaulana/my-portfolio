"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (formdata: FormData) => {
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};

export const updateProject = async (id: string, formdata: FormData) => {
  revalidatePath("/admin/projects");
  redirect("/admin/projects");
};

export const deleteProject = async (id: string, formdata: FormData) => {
  revalidatePath("/admin/projects");
};
