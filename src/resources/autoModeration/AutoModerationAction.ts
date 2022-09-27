import { snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object

export interface AutoModerationAction {
    type : actionTypes
    metadata? : ActionMetadata
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata

export interface ActionMetadata {
    channel_id : snowflake
    duration_seconds : number
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types

export const enum actionTypes {
    BLOCK_MESSAGE = 1,
    SEND_ALERT_MESSAGE = 2,
    TIMEOUT = 3
}
