import { image_hash, snowflake } from "../../constants/types.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure

export interface iIntegrationApplication {
    id : snowflake
    name : string
    icon : image_hash
    description : string
    bot? : User
}
