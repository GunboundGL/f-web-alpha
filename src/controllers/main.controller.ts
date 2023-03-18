import { TemplateController } from "gunbound-typescript-sdk";

const controller = new TemplateController(async (req) => {
    return {
        data: {

        },
        template: "pages/index"
    }
});

export default controller.routes([
    '/'
]);