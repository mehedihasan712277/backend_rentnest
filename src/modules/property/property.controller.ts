import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

import { propertyService } from "./property.service";

const createProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.createPropertyIntoDB();
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
            data: "",
        });
    },
);
const getOneProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.getOnePropertyFromDB();
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "property retrived successfully",
            data: "",
        });
    },
);
const updateProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.updatePropertyIntoDB();
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "successfully",
            data: "property updated successfully",
        });
    },
);
const deleteProperty = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await propertyService.deletePropertyFromDB();
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "propert deleted successfully",
            data: "",
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
