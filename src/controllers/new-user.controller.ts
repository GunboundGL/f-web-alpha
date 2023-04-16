import { newUser } from "@/infraestructure/services/new-user.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(async ({ data, meta, session, supplier }) => newUser(data, meta, session, supplier));

export default controller.routes([
    '/is-new-user'
])