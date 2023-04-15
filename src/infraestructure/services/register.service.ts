import { errorList } from "@/shared/functions/errorList"
import { RegisterRequest } from "@/shared/types/request"
import { Supplier } from "gunbound-typescript-sdk/dist/shared/types"
import * as iamSupplier from "../suppliers/iam"
import * as avatarEquippedSupplier from "../suppliers/avatarEquipped"
import * as yup from "yup"
import { RegiterSchema } from "@/schemas/register.schema"
import { ERROR_VALIDATION_MESSAGE } from "@/shared/enum/messages"
import { create } from "../suppliers/users/create.supplier"
import { jwt } from "@/jwt"
import { Session } from "gunbound-typescript-sdk/dist/web/session"

export const register = async (data: RegisterRequest, supplier: Supplier, session: Session) => {
    const existIam = await iamSupplier.getByUsername({ username: data.name }, supplier)

    if (existIam) return errorList({
        name: [ERROR_VALIDATION_MESSAGE.USERNAME_ALREADY_EXIST]
    })

    try {
        await RegiterSchema.validate(data, { abortEarly: false })
    } catch (error) {
        const { inner } = error as yup.ValidationError
        let errorValues = {}

        inner.forEach((error) => {
            errorValues[error.path] = error.errors;
        })

        return errorList(errorValues)
    }

    const userCreated = await create({
        username: data.name,
        rank: 1,
        gold: 0,
        cash: 0,
        gp: 0,
        gender: data.gender,
    }, supplier)

    await avatarEquippedSupplier.createDefault({ userSlug: userCreated.slug, gender: data.gender }, supplier)

    const payload = {
        token: "wilmer"
    }

    const { token } = await jwt.generate(payload);

    await iamSupplier.signup({
        username: data.name,
        password: data.password,
        userId: userCreated._id as any
    }, supplier);

    try {
        session.set("test", 1);
    } catch (ex) {
        console.log(ex)
    }

    return [0, userCreated.rank, token, userCreated.slug, userCreated.username]
}