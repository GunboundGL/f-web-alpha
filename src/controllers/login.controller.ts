import { login } from "@/infraestructure/services/login.service";
import { LoginRequest } from "@/shared/types/request";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller<LoginRequest>(({ data, supplier }) => login(data, supplier));

export default controller.routes([
    '/ajaxLogin'
])