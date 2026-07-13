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
        // include: {
        //     landlord: true,
        //     category: true,
        //     amenities: true,
        // },
    });

    return result;
};

const getAllPropertyFromDB = async () => {
    const result = await prisma.property.findMany({
        include: {
            rentalRequests: true,
            reviews: true,
            landlord: true,
            amenities: true,
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

            amenities: {
                set: payload.amenityIds.map((id) => ({ id })),
            },
        },
        include: {
            landlord: true,
            category: true,
            amenities: true,
        },
    });

    return result;
};

const deletePropertyFromDB = async (propertyId: string) => {
    const rental = await prisma.property.findUniqueOrThrow({
        where: {
            id: propertyId,
        },
        include: {
            rentals: true,
        },
    });

    if (rental.rentals.length > 0) {
        throw new Error("the property is in used by tenant");
    }

    const result = await prisma.property.delete({
        where: {
            id: propertyId,
        },
    });

    return result;
};

export const propertyService = {
    createPropertyIntoDB,
    getAllPropertyFromDB,
    getOnePropertyFromDB,
    updatePropertyIntoDB,
    deletePropertyFromDB,
};
