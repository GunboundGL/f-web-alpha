import { getServers } from "@/infraestructure/services/servers.service";
import { RegisterRequest } from "@/shared/types/request";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller<RegisterRequest>(({ supplier }) => getServers(supplier));

export default controller.routes([
    '/w2'
])