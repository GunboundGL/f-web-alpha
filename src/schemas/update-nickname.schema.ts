import { BADWORDS } from "@/shared/enum/badwords";
import { LOCALE } from "@/shared/enum/locale";
import * as yup from "yup";

export const updateNicknameSchema = yup.object().shape({
    short: yup.string().test(
        "",
        LOCALE.NICKNAME_TOO_SHORT,
        function () {
            return this.parent.nickname.length >= 4
        }
    ),
    long: yup.string().test(
        "",
        LOCALE.NICKNAME_TOO_LONG,
        function () {
            return this.parent.nickname.length <= 11
        }
    ),
    badCharacters: yup.string().test(
        "",
        LOCALE.NICKNAME_HAS_INVALID_CHARACTERS,
        function () {
            const regex = /^[a-zA-Z0-9]+$/;
            return regex.test(this.parent.nickname)
        }
    ),
    equalToLastname: yup.string().test(
        "",
        LOCALE.NICKNAME_AS_EQUAL_TO_ACTUAL_NICKNAME,
        function () {
            return this.parent.nickname !== this.parent.lastname
        }
    ),
    existNickname: yup.string().test(
        "",
        LOCALE.NICKNAME_ALREADY_EXISTS,
        function () {
            return !this.parent.existOtherNickname
        }
    ),
    badWord: yup.string().test(
        "",
        LOCALE.HAS_PROHIBITED_WORDS,
        function () {
            return !BADWORDS.includes(this.parent.nickname.toLowerCase())
        }
    )
})