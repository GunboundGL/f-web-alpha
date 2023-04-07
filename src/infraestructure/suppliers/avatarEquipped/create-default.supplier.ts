import { CreateDefaultSupplierAvatarEquippedRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const createDefault = async (data: CreateDefaultSupplierAvatarEquippedRequest, supplier: Supplier): Promise<void> => {
    const response = await supplier('/avatar-equipped/internal/create-default', data);
    return response;
}