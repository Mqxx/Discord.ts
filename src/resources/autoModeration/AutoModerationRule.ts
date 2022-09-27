import { snowflake } from '../../constants/types.ts'
import { AutoModerationAction } from "./AutoModerationAction.ts";

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure

export interface AutoModerationRule {
    id : snowflake
    guild_id : snowflake
    name : string
    creator_id : snowflake
    event_type : eventTypes
    trigger_type : triggerTypes
    trigger_metadata : TriggerMetadata
    actions : AutoModerationAction[]
    enabled : boolean
    exempt_roles : snowflake[]
    exempt_channels : snowflake[]
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata

export interface TriggerMetadata {
    keyword_filter : string[]
    presets	: keywordPresetTypes
    allow_list : string[]
    mention_total_limit : number

}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types

export const enum triggerTypes {
    KEYWORD = 1,
    SPAM = 3,
    KEYWORD_PRESET = 4,
    MENTION_SPAM = 5
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types

export const enum keywordPresetTypes {
    PROFANITY = 1,
    SEXUAL_CONTENT= 2,
    SLURS = 3
}

// https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types

export const enum eventTypes {
    MESSAGE_SEND = 1
}


