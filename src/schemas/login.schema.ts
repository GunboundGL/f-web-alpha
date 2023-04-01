import * as yup from "yup"

export const LoginSchema = yup.object().shape({
    username: yup.string().required().min(3).max(15),
    password: yup.string().required().min(6).max(100),
    resave: yup.number().required().min(0).max(1),
});