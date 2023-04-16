import { Web } from "gunbound-typescript-sdk"
import { config } from "./config"
import "module-alias/register";
import { t } from "./translator";

Web.createRoot(config)

console.log(t("2882"))