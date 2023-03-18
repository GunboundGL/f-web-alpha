import { Controller } from "gunbound-typescript-sdk";
import { StatusCodes } from "http-status-codes";

const controller = new Controller(
    async (req) => {
        return {
            status: StatusCodes.OK,
            data: [0]
        }
    }
);

export default controller.routes([
    '/s'
])