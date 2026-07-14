import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import HttpStatus from "http-status";
import { rentalRequestServices } from "./rental_request.service";

const createRequest = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const tenantId = req.user?.id;
        const payload = { ...req.body, tenantId };
        const result = await rentalRequestServices.createRequestIntoDB(payload);

        sendResponse(res, {
            success: true,
            statusCode: HttpStatus.CREATED,
            message: "successfully",
            data: result,
        });
    },
);

const getAllRequests = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        sendResponse(res, {
            success: true,
            statusCode: HttpStatus.OK,
            message: "all requests retrived successfully",
            data: {},
        });
    },
);

const getSingleRequest = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "successfully",
            data: {},
        });
    },
);

const updateRequestStatus = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "request status updated successfully",
            data: {},
        });
    },
);

const deleteRequest = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        sendResponse(res, {
            success: true,
            statusCode: 200,
            message: "request deleted successfully",
            data: {},
        });
    },
);

export const rentalRequestController = {
    createRequest,
    getAllRequests,
    getSingleRequest,
    updateRequestStatus,
    deleteRequest,
};
