import { Iam } from "@/shared/types/model-supplier";
import { GetSupplierIamRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const getByUsername = async (data: GetSupplierIamRequest, supplier: Supplier): Promise<Iam> => {
    const { username } = data;
    const response = await supplier('/iam/internal/get', { username });
    return response;
}   