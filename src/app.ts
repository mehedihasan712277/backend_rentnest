import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";

import { notFound } from "./middleware/notfound";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

// -----------routes import---------
import { userRoutes } from "./modules/user/user.routes";
import { authRoutes } from "./modules/auth/auth.routes";
import { categoryRouter } from "./modules/category/category.route";
import { amenityRouter } from "./modules/amenity/amenity.routes";
import { propertyRouter } from "./modules/property/property.route";
import { rentalRequestRouter } from "./modules/rental_request/rental_request.routes";

const app: Application = express();

app.use(
    cors({
        origin: config.app_url,
        credentials: true,
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRouter);
app.use("/api/amenities", amenityRouter);
app.use("/api/properties", propertyRouter);
app.use("/api/rental-requests", rentalRequestRouter);

app.use(notFound);
app.use(globalErrorHandler);

export default app;
