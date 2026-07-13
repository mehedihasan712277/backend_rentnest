import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { propertyService } from "./property.service";
import httpStatus from "http-status";

const createProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const landlordId = req.user?.id;
        const result = await propertyService.createPropertyIntoDB(
            req.body,
            landlordId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "properties created successfully",
            data: result,
        });
    },
);

const getAllProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.getAllPropertyFromDB();
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "all properties retrived successfully",
            data: result,
        });
    },
);
const getOneProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        console.log(req.params);
        if (!propertyId) {
            throw new Error("property id not provided");
        }
        const result = await propertyService.getOnePropertyFromDB(
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "property retrived successfully",
            data: result,
        });
    },
);
const updateProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        if (!propertyId) {
            throw new Error("property id not provided");
        }

        const result = await propertyService.updatePropertyIntoDB(
            req.body,
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "property updated successfully",
            data: result,
        });
    },
);
const deleteProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        if (!propertyId) {
            throw new Error("property id not provided");
        }
        const result = await propertyService.deletePropertyFromDB(
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "propert deleted successfully",
            data: result,
        });
    },
);

export const propertyController = {
    createProperty,
    getAllProperty,
    getOneProperty,
    updateProperty,
    deleteProperty,
};
