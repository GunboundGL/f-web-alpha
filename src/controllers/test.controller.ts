import { TestModel } from "@/domain/models/test.model";
import { Controller } from "gunbound-typescript-sdk";
import { StatusCodes } from "http-status-codes";

const controller = new Controller(
    async (req) => {

        const create = await TestModel.create({
            name: 'test'
        })

        return {
            status: StatusCodes.OK,
            data: create
        }
    }
);

export default controller.routes([
    '/test'
])