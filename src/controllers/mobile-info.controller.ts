import { mobileInfo } from "@/infraestructure/services/mobile-info.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(mobileInfo);

export default controller.routes([
    '/mobile-info'
])