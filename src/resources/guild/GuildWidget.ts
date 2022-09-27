import { snowflake } from "../../constants/types.ts";
import { Channel } from "../channel/Channel.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure

export interface GuildWidget {
    id : snowflake
    name : string
    instant_invite : string
    channels : Channel[]
    members : User[]
    presence_count : number
}
