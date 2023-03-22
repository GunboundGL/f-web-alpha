import { Logger, TemplateController } from "gunbound-typescript-sdk";

const controller = new TemplateController(async ({ meta }) => {
    Logger.info(meta);

    return {
        data: {},
        template: "pages/index"
    }
});

export default controller.routes([
    '/'
]);