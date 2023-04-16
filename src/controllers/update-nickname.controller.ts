import { updateNickname } from "@/infraestructure/services/update-nickname.service";
import { Controller } from "gunbound-typescript-sdk";

const controller = new Controller(async ({
    data,
    session,
    supplier
}) => updateNickname({
    data,
    session,
    supplier
}))

export default controller.routes([
    '/update-nickname'
])