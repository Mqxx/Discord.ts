import { snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/guild#unavailable-guild-object

export interface UnavailableGuild {
    id : snowflake
    unavailable : boolean
}
