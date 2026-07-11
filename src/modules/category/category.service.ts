import { prisma } from "../../lib/prisma";
import { ICategoryPayload } from "./category.interface";

const createCategoryIntoDB = async (payload: ICategoryPayload) => {
    const result = await prisma.category.create({
        data: payload,
    });

    return result;
};

const getAllCategoriesFromDB = async () => {
    const result = await prisma.category.findMany({
        include: {
            properties: true,
            _count: {
                select: {
                    properties: true,
                },
            },
        },
    });

    return result;
};

const getOneCategoryFromDb = async (categoryId: string) => {
    const result = await prisma.category.findUniqueOrThrow({
        where: {
            id: categoryId,
        },
        include: {
            properties: {
                include: {
                    landlord: true,
                },
            },
            _count: {
                select: {
                    properties: true,
                },
            },
        },
    });

    return result;
};

const deleteCategoryFromDB = async (categoryId: string) => {
    await prisma.category.delete({
        where: {
            id: categoryId,
        },
    });
    return null;
};

export const categoryService = {
    createCategoryIntoDB,
    getAllCategoriesFromDB,
    getOneCategoryFromDb,
    deleteCategoryFromDB,
};
