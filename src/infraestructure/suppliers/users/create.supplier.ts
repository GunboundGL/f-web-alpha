import { User } from "@/shared/types/model-supplier";
import { CreateSupplierUserRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const create = (data: CreateSupplierUserRequest, supplier: Supplier): Promise<User> => {
    const { username, rank, gold, cash, gp } = data;
    const response = supplier('/user/internal/create', { username, rank, gold, cash, gp });
    return response;
}