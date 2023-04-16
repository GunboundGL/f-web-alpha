import { UpdateByWhereSupplierUserRequest } from "@/shared/types/request-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const updateByWhere = async (data: UpdateByWhereSupplierUserRequest, supplier: Supplier): Promise<void> => {

    const response = await supplier('/user/internal/update-by-where', { where: data.where, data: data.data })

    if (!response) {
        console.log(response?.data)
    }
}