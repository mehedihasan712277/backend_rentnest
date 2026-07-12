import { PropertyStatus } from "../../../generated/prisma/enums";

export interface IPropertyPayload {
    categoryId: string;
    title: string;
    description: string;
    location: string;
    price: number;
    area?: number;
    thumbnail?: string;
    amenityIds: string[];
    status?: PropertyStatus;
}
