import { UpdateNicknameRequest } from "@/shared/types/request";
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types";
import { Session } from "gunbound-typescript-sdk/dist/web/session";
import { getByWhere } from "../suppliers/users";
import { updateNicknameSchema } from "@/schemas/update-nickname.schema";
import { t } from "@/translator";
import { updateByWhere } from "../suppliers/users/update-by-where.supplier";
import { LOCALE } from "@/shared/enum/locale";

export const updateNickname = async ({
    data, session,
    supplier
}: {
    data: UpdateNicknameRequest,
    session: Session,
    supplier: Supplier
}) => {
    const userSlug = session.get('user');

    if (!userSlug) {
        console.log("sesión inexistente")
    }

    const userActual = await getByWhere({
        where: {
            slug: userSlug
        }
    }, supplier);

    if (!userActual) {
        return t(LOCALE.DATA_MODIFIED_AND_CLOSE_SESSION)
    }

    const otherUserWithEqualName = await getByWhere({
        where: {
            username: data.nickname
        }
    }, supplier);

    const existOtherNickname = otherUserWithEqualName ? true : false;

    try {
        await updateNicknameSchema.validate({
            nickname: data.nickname,
            lastname: userActual.username,
            existOtherNickname
        })
    } catch (ex) {
        return {
            error: t(ex.errors[0])
        }
    }

    await updateByWhere({
        where: {
            slug: userSlug
        },
        data: {
            username: data.nickname,
            isNew: false
        }
    }, supplier);

    return {
        ok: true
    }
}