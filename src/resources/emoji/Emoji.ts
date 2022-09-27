import { snowflake } from "../../constants/types.ts";
import { Role } from "../permissions/Role.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure

export interface Emoji {
    id : snowflake
    name : string
    roles? : Role[]
    user? : User
    require_colons? : boolean
    managed? : boolean
    animated? : boolean
    available? : boolean
}
