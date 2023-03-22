import { SignupSupplierIamRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";
import { Iam } from "@/shared/types/model-supplier";


export const signup = async (data: SignupSupplierIamRequest, supplier: Supplier): Promise<Iam> => {
    const response = await supplier('/iam/internal/signup', data);
    return response;
}