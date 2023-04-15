import { newUser } from "@/infraestructure/services/new-user.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(async ({ data, meta, session }) => newUser(data, meta, session));

export default controller.routes([
    '/is-new-user'
])