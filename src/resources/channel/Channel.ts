import { snowflake, timestamp } from '../../constants/types.ts'
import { Overwrite } from "./Overwrite.ts";
import { ThreadMetadata } from './ThreadMetadata.ts'
import { ThreadMember } from './ThreadMember.ts'
import { DefaultReaction } from './DefaultReaction.ts'
import { ForumTag } from "./ForumTag.ts";
import { User } from "../user/User.ts";
import { VoiceRegion } from "../voice/VoiceRegion.ts";

// https://discord.com/developers/docs/resources/channel#channel-object-channel-structure

export interface Channel {
    id : snowflake
    type : channelTypes
    guild_id? : snowflake
    position? : number
    permission_overwrites? : Overwrite[]
    name? : string
    topic? : string
    nsfw? : boolean
    last_message_id? : snowflake
    bitrate? : number
    user_limit? : number
    rate_limit_per_user? : number
    recipients? : User[]
    icon? : string
    owner_id? : snowflake
    application_id? : snowflake
    parent_id? : snowflake
    last_pin_timestamp? : timestamp
    rtc_region? : VoiceRegion
    video_quality_mode? : videoQualityModes
    message_count? : number
    member_count? : number
    thread_metadata? : ThreadMetadata
    member? : ThreadMember
    default_auto_archive_duration? : number
    permissions? : string
    flags? : channelFlags
    total_message_sent? : number
    available_tags? : ForumTag
    applied_tags? : snowflake[]
    default_reaction_emoji? : DefaultReaction
    default_thread_rate_limit_per_user? : number
    default_sort_order? : sortOrderTypes
}

// https://discord.com/developers/docs/resources/channel#channel-object-channel-types

export const enum channelTypes {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_ANNOUNCEMENT = 5,
    ANNOUNCEMENT_THREAD = 10,
    PUBLIC_THREAD = 11,
    PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15
}

// https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes

export const enum videoQualityModes {
    AUTO = 1,
    FULL = 2
}

// https://discord.com/developers/docs/resources/channel#channel-object-channel-flags

export const enum channelFlags {
    PINNED = 2,
    REQUIRE_TAG	= 16
}

// https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types

export const enum sortOrderTypes {
    LATEST_ACTIVITY = 0,
    CREATION_DATE = 1
}
