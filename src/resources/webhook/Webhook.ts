import { image_hash, snowflake, url } from "../../constants/types.ts";
import { Channel } from "../channel/Channel.ts";
import { Guild } from "../guild/Guild.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure

export interface Webhook {
    id : snowflake
    type : webhookTypes
    guild_id? : snowflake
    channel_id : snowflake
    user? : User
    name : string
    avatar : image_hash
    token? : string
    application_id : snowflake
    source_guild? : Guild
    source_channel? : Channel
    url? : url
}

// https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types

export const enum webhookTypes {
    INCOMING = 1,
    CHANNEL_FOLLOWER = 2,
    APPLICATION = 3
}
