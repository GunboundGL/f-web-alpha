import { SigninSupplierIamRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";
import { Iam } from "@/shared/types/model-supplier";


export const signin = async (data: SigninSupplierIamRequest, supplier: Supplier): Promise<Iam> => {
    const response = await supplier('/iam/internal/signin', data);
    return response;
}