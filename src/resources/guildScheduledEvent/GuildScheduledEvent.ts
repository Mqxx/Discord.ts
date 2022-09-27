import { image_hash, snowflake, timestamp } from "../../constants/types.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure

export interface GuildScheduledEvent {
    id : snowflake
    guild_id : snowflake
    channel_id : snowflake
    creator_id? : snowflake
    name : string
    description? : string
    scheduled_start_time : timestamp
    scheduled_end_time : timestamp
    privacy_level : guildScheduledEventPrivacyLevels
    status : guildScheduledEventStatus
    entity_type : guildScheduledEventEntityTypes
    entity_id : snowflake
    entity_metadata : GuildScheduledEventEntityMetadata
    creator? : User
    user_count? : number
    image? : image_hash
}

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata

export interface GuildScheduledEventEntityMetadata {
    location? : string
}

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level

export const enum guildScheduledEventPrivacyLevels {
    GUILD_ONLY = 2
}

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types

export const enum guildScheduledEventEntityTypes {
    STAGE_INSTANCE = 1,
    VOICE = 2,
    EXTERNAL = 3
}

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status

export const enum guildScheduledEventStatus {
    SCHEDULED = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    CANCELED = 4
}
