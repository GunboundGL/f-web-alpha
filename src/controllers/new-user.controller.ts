import { newUser } from "@/infraestructure/services/new-user.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(() => newUser());

export default controller.routes([
    '/is-new-user'
])