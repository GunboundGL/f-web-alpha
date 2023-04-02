import { getStatus } from "@/infraestructure/services/get-status.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(() => getStatus());

export default controller.routes([
    '/api/get_status'
])