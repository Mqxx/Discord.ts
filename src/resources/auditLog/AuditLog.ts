import { snowflake, mixed } from '../../constants/types.ts'
import { ApplicationCommand } from "../../interactions/applicationCommands/ApplicationCommand.ts";
import { AutoModerationRule } from "../autoModeration/AutoModerationRule.ts";
import { Channel } from "../channel/Channel.ts";
import { Integration } from "../guild/Integration.ts";
import { GuildScheduledEvent } from "../guildScheduledEvent/GuildScheduledEvent.ts";
import { User } from "../user/User.ts";
import { Webhook } from "../webhook/Webhook.ts";

// https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure

export interface AuditLog {
    application_commands : ApplicationCommand[]
    audit_log_entries : AuditLogEntry[]
    auto_moderation_rules : AutoModerationRule[]
    guild_scheduled_events : GuildScheduledEvent[]
    integrations : Integration[]
    threads : Channel[]
    users : User[]
    webhooks : Webhook[]
}

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure

export interface AuditLogEntry {
    target_id : string
    changes? : AuditLogChange[]
    user_id : snowflake
    id : snowflake
    action_type : auditLogEvents
    options? : OptionalAuditEntryInfo
    reason? : string
}

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info

export interface OptionalAuditEntryInfo {
    application_id : snowflake
    auto_moderation_rule_name : string
    auto_moderation_rule_trigger_type : string
    channel_id : snowflake
    count : string
    delete_member_days : string
    id : snowflake
    members_removed : string
    message_id : snowflake
    role_name : string
    type : string
}

// https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure

export interface AuditLogChange {
    new_value? : mixed
    old_value? : mixed
    key : string
}

// https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events

export const enum auditLogEvents {
    GUILD_UPDATE = 1,
    CHANNEL_CREATE = 10,
    CHANNEL_UPDATE = 11,
    CHANNEL_DELETE = 12,
    CHANNEL_OVERWRITE_CREATE = 13,
    CHANNEL_OVERWRITE_UPDATE = 14,
    CHANNEL_OVERWRITE_DELETE = 15,
    MEMBER_KICK = 20,
    MEMBER_PRUNE = 21,
    MEMBER_BAN_ADD = 22,
    MEMBER_BAN_REMOVE = 23,
    MEMBER_UPDATE = 24,
    MEMBER_ROLE_UPDATE = 25,
    MEMBER_MOVE = 26,
    MEMBER_DISCONNECT = 27,
    BOT_ADD = 28,
    ROLE_CREATE = 30,
    ROLE_UPDATE = 31,
    ROLE_DELETE = 32,
    INVITE_CREATE = 40,
    INVITE_UPDATE = 41,
    INVITE_DELETE = 42,
    WEBHOOK_CREATE = 50,
    WEBHOOK_UPDATE = 51,
    WEBHOOK_DELETE = 52,
    EMOJI_CREATE = 60,
    EMOJI_UPDATE = 61,
    EMOJI_DELETE = 62,
    MESSAGE_DELETE = 72,
    MESSAGE_BULK_DELETE = 73,
    MESSAGE_PIN = 74,
    MESSAGE_UNPIN = 75,
    INTEGRATION_CREATE = 80,
    INTEGRATION_UPDATE = 81,
    INTEGRATION_DELETE = 82,
    STAGE_INSTANCE_CREATE = 83,
    STAGE_INSTANCE_UPDATE = 84,
    STAGE_INSTANCE_DELETE = 85,
    STICKER_CREATE = 90,
    STICKER_UPDATE = 91,
    STICKER_DELETE = 92,
    GUILD_SCHEDULED_EVENT_CREATE = 100,
    GUILD_SCHEDULED_EVENT_UPDATE = 101,
    GUILD_SCHEDULED_EVENT_DELETE = 102,
    THREAD_CREATE = 110,
    THREAD_UPDATE = 111,
    THREAD_DELETE = 112,
    APPLICATION_COMMAND_PERMISSION_UPDATE = 121,
    AUTO_MODERATION_RULE_CREATE = 140,
    AUTO_MODERATION_RULE_UPDATE = 141,
    AUTO_MODERATION_RULE_DELETE = 142,
    AUTO_MODERATION_BLOCK_MESSAGE = 143,
    AUTO_MODERATION_FLAG_TO_CHANNEL = 144,
    AUTO_MODERATION_USER_COMMUNICATION_DISABLED = 145
}