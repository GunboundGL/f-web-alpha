import { service } from "@/services/service.service";
import { Controller } from "gunbound-typescript-sdk";
import { StatusCodes } from "http-status-codes";

const controller = new Controller(service);

export default controller.routes([
    '/s'
])