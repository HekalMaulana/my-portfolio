import prisma from "./prisma";

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects data");
  }
};

export const getProjectsById = async (id: string) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    return project;
  } catch (error) {
    throw new Error("Failed to fetch projects data by id");
  }
};
