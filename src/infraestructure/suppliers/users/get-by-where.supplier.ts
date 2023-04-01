import { User } from "@/shared/types/model-supplier";
import { GetByWhereSupplierIamRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const getByWhere = async (data: GetByWhereSupplierIamRequest, supplier: Supplier): Promise<User> => {

    const response = await supplier('/user/internal/get-by-where', { where: data.where })

    if(!response) {
        console.log(response?.data)
    }

    return response;
}