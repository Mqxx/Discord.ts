import { locales } from "../../resources/reference/Locales.ts";
import { image_hash, snowflake, url } from "../../constants/types.ts";
import { Emoji } from "../emoji/Emoji.ts";
import { Sticker } from "../sticker/Sticker.ts";
import { WelcomeScreen } from "./WelcomeScreen.ts";
import { Role } from "../permissions/Role.ts";

// https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

export interface Guild {
    id : snowflake
    name : string
    icon : image_hash
    icon_hash? : image_hash
    splash : image_hash
    discovery_splash : image_hash
    owner? : boolean
    owner_id : snowflake
    permissions? : string
    afk_channel_id : snowflake
    afk_timeout : number
    widget_enabled? : boolean
    widget_channel_id? : snowflake
    verification_level : verificationLevels
    default_message_notifications : defaultMessageNotificationLevels
    explicit_content_filter : explicitContentFilterLevels
    roles : Role[]
    emojis : Emoji[]
    features : (guildFeatures | mutableGuildFeatures)[]
    mfa_level : mfaLevels
    application_id : snowflake
    system_channel_id : snowflake
    system_channel_flags : systemChannelFlags
    rules_channel_id : snowflake
    max_presences? : number
    max_members? : number
    vanity_url_code : url
    description : string
    banner : image_hash
    premium_tier : premiumTiers
    premium_subscription_count? : number
    preferred_locale : locales
    public_updates_channel_id : snowflake
    max_video_channel_users? : number
    approximate_member_count? : number
    approximate_presence_count? : number
    welcome_screen? : WelcomeScreen
    nsfw_level : guildNsfwlevels
    stickers? : Sticker[]
    premium_progress_bar_enabled : boolean
}

// https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level

export const enum defaultMessageNotificationLevels {
    ALL_MESSAGES = 0,
    ONLY_MENTIONS = 1
}

// https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level

export const enum explicitContentFilterLevels {
    DISABLED = 0,
    MEMBERS_WITHOUT_ROLES = 1,
    ALL_MEMBERS = 2
}

// https://discord.com/developers/docs/resources/guild#guild-object-mfa-level

export const enum mfaLevels {
    NONE = 0,
    ELEVATED = 1
}

// https://discord.com/developers/docs/resources/guild#guild-object-verification-level

export const enum verificationLevels {
    NONE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level

export const enum guildNsfwlevels {
    DEFAULT= 0,
    EXPLICIT= 1,
    SAFE= 2,
    AGE_RESTRICTED= 3
}

// https://discord.com/developers/docs/resources/guild#guild-object-premium-tier

export const enum premiumTiers {
    NONE = 0,
    TIER_1 = 1,
    TIER_2 = 2,
    TIER_3 = 3
}

// https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags

export const enum systemChannelFlags {
    SUPPRESS_JOIN_NOTIFICATIONS = 1,
    SUPPRESS_PREMIUM_SUBSCRIPTIONS = 2,
    SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 4,
    SUPPRESS_JOIN_NOTIFICATION_REPLIES = 8
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-features

export const enum guildFeatures {
    ANIMATED_BANNER = 'ANIMATED_BANNER',
    ANIMATED_ICON = 'ANIMATED_ICON',
    AUTO_MODERATION = 'AUTO_MODERATION',
    BANNER = 'BANNER',
    COMMUNITY = 'COMMUNITY',
    DISCOVERABLE = 'DISCOVERABLE',
    FEATURABLE = 'FEATURABLE',
    INVITES_DISABLED = 'INVITES_DISABLED',
    INVITE_SPLASH = 'INVITE_SPLASH',
    MEMBER_VERIFICATION_GATE_ENABLED = 'MEMBER_VERIFICATION_GATE_ENABLED',
    MONETIZATION_ENABLED = 'MONETIZATION_ENABLED',
    MORE_STICKERS = 'MORE_STICKERS',
    NEWS = 'NEWS',
    PARTNERED = 'PARTNERED',
    PREVIEW_ENABLED = 'PREVIEW_ENABLED',
    PRIVATE_THREADS = 'PRIVATE_THREADS',
    ROLE_ICONS = 'ROLE_ICONS',
    TICKETED_EVENTS_ENABLED = 'TICKETED_EVENTS_ENABLED',
    VANITY_URL = 'VANITY_URL',
    VERIFIED = 'VERIFIED',
    VIP_REGIONS = 'VIP_REGIONS',
    WELCOME_SCREEN_ENABLED = 'WELCOME_SCREEN_ENABLED'
}

// https://discord.com/developers/docs/resources/guild#guild-object-mutable-guild-features

export const enum mutableGuildFeatures {
    COMMUNITY = 'COMMUNITY',
    INVITES_DISABLED = 'INVITES_DISABLED',
    DISCOVERABLE = 'DISCOVERABLE'
}
