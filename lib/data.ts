import prisma from "./prisma";

// Get Projects
export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany();
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects data");
  }
};

// Get Reviews
export const getReviews = async () => {
  try {
    const review = await prisma.ulasan.findMany();
    return review;
  } catch (error) {
    throw new Error("Failed to fetch ulasan data");
  }
};

// Get ProjectsById
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

// Get ReviewsById
// export const getReviewsById = async (id: string) => {
//   try {
//     const project = await prisma.ulasan.findUnique({
//       where: { id },
//     });

//     return project;
//   } catch (error) {
//     throw new Error("Failed to fetch reviews data by id");
//   }
// };
