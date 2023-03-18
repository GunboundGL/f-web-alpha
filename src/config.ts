import { Config } from "gunbound-typescript-sdk";
import * as path from "path"

export const config = Config.instance(path.join(__dirname));