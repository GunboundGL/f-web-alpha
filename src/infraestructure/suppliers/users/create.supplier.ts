import { User } from "@/shared/types/model-supplier";
import { CreateSupplierUserRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const create = (data: CreateSupplierUserRequest, supplier: Supplier): Promise<User> => {
    const response = supplier('/user/internal/create', data);
    return response;
}