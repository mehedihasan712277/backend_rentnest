import { prisma } from "../../lib/prisma";
import { IPropertyPayload } from "./property.interface";

const createPropertyIntoDB = async (
    payload: IPropertyPayload,
    landlordId: string,
) => {
    const result = await prisma.property.create({
        data: {
            ...payload,
            landlordId,
        },
    });

    return result;
};

const getAllPropertyFromDB = async () => {};

const getOnePropertyFromDB = async (propertyId: string) => {};

const updatePropertyIntoDB = async (propertyId: string) => {};

const deletePropertyFromDB = async (propertyId: string) => {};

export const propertyService = {
    createPropertyIntoDB,
    getAllPropertyFromDB,
    getOnePropertyFromDB,
    updatePropertyIntoDB,
    deletePropertyFromDB,
};
