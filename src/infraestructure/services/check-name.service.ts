import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";
import * as iamSupplier from "@/infraestructure/suppliers/iam";
import { NameRequiredException } from "@/shared/exceptions";
import { CHECK_NAME_STATUS } from "@/shared/enum";

export const checkNameService = async (query: any = {}, supplier: Supplier) => {

    if (!query?.name) {
        throw new NameRequiredException();
    }

    const existIam = await iamSupplier.getByUsername({ username: query.name }, supplier)

    if (existIam) return CHECK_NAME_STATUS.NAME_EXISTS

    return CHECK_NAME_STATUS.OK
}