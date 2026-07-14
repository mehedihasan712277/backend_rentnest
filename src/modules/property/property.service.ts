import { Role } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { IPropertyPayload } from "./property.interface";

const createPropertyIntoDB = async (
    payload: IPropertyPayload,
    landlordId: string,
) => {
    const result = await prisma.property.create({
        data: {
            landlordId,
            categoryId: payload.categoryId,

            title: payload.title,
            description: payload.description,
            location: payload.location,
            price: payload.price,
            area: payload.area,
            thumbnail: payload.thumbnail,

            amenities: {
                connect: payload.amenityIds.map((id) => ({ id })),
            },
        },
    });

    return result;
};

const getAllPropertyFromDB = async () => {
    const result = await prisma.property.findMany({
        include: {
            reviews: true,
            landlord: {
                select: {
                    name: true,
                },
            },
            amenities: {
                select: {
                    name: true,
                    description: true,
                },
            },
        },
    });
    return result;
};

const getMyOwnPropertyListFromDB = async (creatorId: string) => {
    const result = await prisma.property.findMany({
        where: {
            landlordId: creatorId,
        },
    });
    return result;
};

const getOnePropertyFromDB = async (propertyId: string) => {
    const result = await prisma.property.findUniqueOrThrow({
        where: {
            id: propertyId,
        },
        include: {
            landlord: true,
            category: true,
            amenities: true,
            rentalRequests: true,
            reviews: true,
        },
    });

    return result;
};

const updatePropertyIntoDB = async (
    payload: IPropertyPayload,
    propertyId: string,
) => {
    const result = await prisma.property.update({
        where: {
            id: propertyId,
        },
        data: {
            categoryId: payload.categoryId,

            title: payload.title,
            description: payload.description,
            location: payload.location,
            price: payload.price,
            area: payload.area,
            thumbnail: payload.thumbnail,
            status: payload.status,
            amenities: {
                set: payload.amenityIds.map((id) => ({ id })),
            },
        },
        include: {
            category: true,
            amenities: true,
        },
    });

    return result;
};

const togglePropertyStatusIntoDB = async (
    propertyId: string,
    role: Role,
    userId: string,
) => {
    // Check if property exists
    const property = await prisma.property.findUniqueOrThrow({
        where: {
            id: propertyId,
        },
        select: {
            status: true,
            landlordId: true,
        },
    });

    if (role !== "ADMIN" && property.landlordId !== userId) {
        throw new Error(
            "you cannot change it as you dont own it. Only admin and its landord are allowed to change status",
        );
    }

    const result = await prisma.property.update({
        where: {
            id: propertyId,
        },
        data: {
            status:
                property.status === "AVAILABLE" ? "NOTAVAILABLE" : "AVAILABLE",
        },
        select: {
            title: true,
            status: true,
        },
    });

    return result;
};

const deletePropertyFromDB = async (
    propertyId: string,
    userId: string,
    role: Role,
) => {
    const property = await prisma.property.findUniqueOrThrow({
        where: {
            id: propertyId,
        },
        include: {
            rentals: true,
        },
    });

    if (role !== "ADMIN" && property.landlordId !== userId) {
        throw new Error(
            "you cannot delete it as you dont own it. Only admin and its landord are allowed to delete",
        );
    }

    if (property.rentals.length > 0) {
        throw new Error("the property is in used by tenant");
    }

    await prisma.property.delete({
        where: {
            id: propertyId,
        },
    });
};

export const propertyService = {
    createPropertyIntoDB,
    getAllPropertyFromDB,
    getMyOwnPropertyListFromDB,
    getOnePropertyFromDB,
    updatePropertyIntoDB,
    togglePropertyStatusIntoDB,
    deletePropertyFromDB,
};
