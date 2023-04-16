import { Session } from "gunbound-typescript-sdk/dist/web/session"
import { getByWhere } from "../suppliers/users"
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";

export const newUser = async (data: any, request: any, session: Session, supplier: Supplier) => {
    const userSlug = session.get("user");

    const user = await getByWhere({
        where: {
            slug: userSlug
        }
    }, supplier)

    return {
        is: user?.isNew ? 1 : 0
    }
}