import { snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure

export interface StageInstance {
    id : snowflake
    guild_id : snowflake
    channel_id : snowflake
    topic : string
    privacy_level : privacyLevels
    discoverable_disabled : boolean
    guild_scheduled_event_id : snowflake
}

// https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level

export const enum privacyLevels {
    PUBLIC = 1,
    GUILD_ONLY = 2
}
