import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createUser = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const payload = req.body;

        const user = await userService.createUserIntoDB(payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "user registered successfully",
            data: { user },
        });
    },
);

const getMyProfile = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const profile = await userService.getMyProfileFromDB(
            req.user?.id as string,
        );

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "user profile retrived successfully",
            data: profile,
        });
    },
);

const updateMyprofile = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const id = req.user?.id as string;
        const payload = req.body;

        const updatedUser = await userService.updateMyprofileInDB(id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "user profile updated successfully",
            data: { updatedUser },
        });
    },
);

const getAllUsers = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await userService.getAllUsersFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "all users retrived successfully",
            data: result,
        });
    },
);

const deleteUsers = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const payload = req.body;

        const result = await userService.deleteUserFromDB(payload as string[]);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "user profile deleted successfully",
            data: result,
        });
    },
);
export const userController = {
    getMyProfile,
    updateMyprofile,
    getAllUsers,
    deleteUsers,
    createUser,
};
