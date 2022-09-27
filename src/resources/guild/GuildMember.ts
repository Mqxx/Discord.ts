import { image_hash, snowflake, timestamp } from "../../constants/types.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure

export interface GuildMember {
    user? : User
    nick? : string
    avatar? : image_hash
    roles : snowflake[]
    joined_at : timestamp
    premium_since? : timestamp
    deaf : boolean
    mute : boolean
    pending? : boolean
    permissions? : string
    communication_disabled_until? : timestamp
}
