import { LoginRequest } from "@/shared/types/request";
import * as iamSupplier from "../suppliers/iam"
import * as userSupplier from "../suppliers/users"
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";
import { jwt } from "@/jwt";

export const login = async (data: LoginRequest, supplier: Supplier) => {
    const { u: username, p: password } = data;

    const iam = await iamSupplier.signin({
        username,
        password
    }, supplier)

    /**
     * If iam is null, it means that the user is not logged in
     */
    if (!iam) {
        return [0]
    }

    const userId = iam.userId;

    const user = await userSupplier.getByWhere({
        where: {
            _id: userId
        }
    }, supplier);

    /**
     * If user is null, it means that the user is not logged in
     */
    if (!user) {
        return [0]
    }

    const payload = {
        user: user.slug,
        iam: iam.slug
    }

    const { token } = await jwt.generate(payload);

    return [0, user.rank, token, user.slug, username];
}