import { checkNameService } from "@/infraestructure/services/check-name.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(async ({ query, supplier }) => checkNameService(query, supplier));

export default controller.routes([
    '/checkName'
])