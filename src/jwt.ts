import { JWT } from "gunbound-typescript-sdk";
import { config } from "./config";

export const jwt = JWT.createInstance(config);