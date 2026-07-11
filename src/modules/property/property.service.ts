import { prisma } from "../../lib/prisma";
import { IPropertyPayload } from "./property.interface";

const createPropertyIntoDB = async (payload: IPropertyPayload) => {
    // const result = await prisma.property.create()
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
