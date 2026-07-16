import { prisma } from "../../lib/prisma";
import { IRentalRequestPayload } from "./rental_request.interface";

const createRequestIntoDB = async (payload: IRentalRequestPayload) => {
    const property = await prisma.property.findFirstOrThrow({
        where: {
            id: payload.propertyId,
        },
    });

    if (property.landlordId === payload.tenantId) {
        throw new Error("you cannot request for your own pro[erty");
    }

    if (property.status === "NOTAVAILABLE") {
        throw new Error("the property is not available anymore");
    }
    const result = await prisma.rentalRequest.create({
        data: payload,
    });
    return result;
};

const getAllRequestsFromDB = async () => {
    const result = await prisma.rentalRequest.findMany({
        include: {
            tenant: {
                select: {
                    name: true,
                },
            },
            property: {
                select: {
                    landlord: {
                        select: {
                            name: true,
                        },
                    },
                    title: true,
                    area: true,
                    price: true,
                },
            },
        },
    });
    console.log("result", result);

    return result;
};

const getSingleRequestFromDB = async () => {};

const getMySentRequestFromDB = async () => {};

const getRentalRequestToMyPropertyFromDB = async () => {};

const updateRequestStatusIntoDB = async () => {};

const deleteRequestFromDB = async () => {};

export const rentalRequestServices = {
    createRequestIntoDB,
    getAllRequestsFromDB,
    getSingleRequestFromDB,
    getMySentRequestFromDB,
    getRentalRequestToMyPropertyFromDB,
    updateRequestStatusIntoDB,
    deleteRequestFromDB,
};
