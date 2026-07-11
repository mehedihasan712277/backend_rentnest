import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

import { propertyService } from "./property.service";

const createProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.createPropertyIntoDB(req.body);
        sendResponse(res, {
            success: true,
            statusCode: 200,
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
            statusCode: 200,
            message: "all properties retrived successfully",
            data: result,
        });
    },
);
const getOneProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        if (propertyId) {
            throw new Error("property id not provided");
        }
        const result = await propertyService.getOnePropertyFromDB(
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "property retrived successfully",
            data: result,
        });
    },
);
const updateProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        if (propertyId) {
            throw new Error("property id not provided");
        }

        const result = await propertyService.updatePropertyIntoDB(
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "successfully",
            data: result,
        });
    },
);
const deleteProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const propertyId = req.params.propertyId;
        if (propertyId) {
            throw new Error("property id not provided");
        }
        const result = await propertyService.deletePropertyFromDB(
            propertyId as string,
        );
        sendResponse(res, {
            success: true,
            statusCode: 200,
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
