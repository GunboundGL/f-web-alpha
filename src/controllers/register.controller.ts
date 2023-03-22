import { register } from "@/infraestructure/services/register.service";
import { RegisterRequest } from "@/shared/types/request";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller<RegisterRequest>(async ({ data, supplier }) => register(data, supplier));

export default controller.routes([
    '/ajaxRegister'
])