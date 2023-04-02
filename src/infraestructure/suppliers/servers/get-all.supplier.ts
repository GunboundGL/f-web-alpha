import { Server } from "@/shared/types/model-supplier";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const getAll = async (supplier: Supplier): Promise<Server[]> => {

    const response = await supplier('/servers/internal/get-all', {});

    if (!response) {
        console.log(response?.data)
    }

    return response;
}