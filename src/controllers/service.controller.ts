import { service } from "@/infraestructure/services/service.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(service);

export default controller.routes([
    '/s'
])