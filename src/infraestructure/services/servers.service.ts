import { Supplier } from "gunbound-typescript-sdk/dist/shared/types"
import { getAll } from "../suppliers/servers/get-all.supplier"
import { Server } from "@/shared/types/model-supplier";

export const getServers = async (supplier: Supplier) => {

    const servers = await getAll(supplier);

    const response = [
        133,
        9022,
        83276,
        servers.map((server: Server) => [
            server.number,
            server.isActive ? server.name : "Mantenimiento",
            server.isActive ? server.description.item : "",
            server.isActive ? server.description.event : "",
            server.batery ?? 1,
            server.rank.up,
            server.rank.down,
            server.playerOnline === server.maxPlayer,
            server.typeAvatar,
            server.isActive
        ]),
        Date.now()
    ]

    return response;
}