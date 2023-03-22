import { GENDER_LETTER } from "@/shared/enum";
import { ERROR_VALIDATION_MESSAGE } from "@/shared/enum/messages";
import * as yup from "yup"

export const RegiterSchema = yup.object().shape({
    name: yup.string().required().min(3).max(15),
    password: yup.string().required().min(6).max(100),
    gender: yup.string().required().min(1).max(1).test((value: GENDER_LETTER) => {
        return [GENDER_LETTER.FEMALE, GENDER_LETTER.MALE].includes(value)
    }),
    todo: yup.string().test(
        ERROR_VALIDATION_MESSAGE.PASSWORD_AND_NAME_CANNOT_BE_EQUAL,
        ERROR_VALIDATION_MESSAGE.PASSWORD_AND_NAME_CANNOT_BE_EQUAL, function () {
            return this.parent.password !== this.parent.name
        })
});