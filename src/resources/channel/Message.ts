import { snowflake, timestamp } from '../../constants/types.ts'
import { Channel } from './Channel.ts'
import { MessageReference } from "./MessageReference.ts";
import { Reaction } from './Reaction.ts'
import { ChannelMention } from './ChannelMention.ts'
import { Attachment } from './Attachment.ts'
import { Embed } from './Embed.ts'
import { Application } from "../application/Application.ts";
import { MessageInteraction } from "../../interactions/receivingAndResponding/MessageInteraction.ts";
import { Component } from "../../interactions/messageComponents/Component.ts";
import { User } from "../user/User.ts";
import { StickerItem } from "../sticker/StickerItem.ts";
import { Role } from "../permissions/Role.ts";

// https://discord.com/developers/docs/resources/channel#message-object-message-structure

export interface Message {
    id : snowflake
    channel_id : snowflake
    author : User
    content : string
    timestamp : timestamp
    edited_timestamp : timestamp
    tts : boolean
    mention_everyone : boolean
    mentions : User[]
    mention_roles : Role[]
    mention_channels? : ChannelMention[]
    attachments : Attachment[]
    embeds : Embed[]
    reactions? : Reaction[]
    nonce? : number | string
    pinned : boolean
    webhook_id? : snowflake
    type : messageTypes
    activity? : MessageActivity
    application? : Application
    application_id? : snowflake
    message_reference? : MessageReference
    flags? : messageFlags
    referenced_message? : Message
    interaction? : MessageInteraction
    thread? : Channel
    components? : Component[]
    sticker_items? : StickerItem[]
    position? : number
}

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure

export interface MessageActivity {
    type : messageActivityTypes
    party_id? : string
}

// https://discord.com/developers/docs/resources/channel#message-object-message-types

export const enum messageTypes {
    DEFAULT = 0,
    RECIPIENT_ADD = 1,
    RECIPIENT_REMOVE = 2,
    CALL = 3,
    CHANNEL_NAME_CHANGE = 4,
    CHANNEL_ICON_CHANGE = 5,
    CHANNEL_PINNED_MESSAGE = 6,
    USER_JOIN = 7,
    GUILD_BOOST = 8,
    GUILD_BOOST_TIER_1 = 9,
    GUILD_BOOST_TIER_2 = 10,
    GUILD_BOOST_TIER_3 = 11,
    CHANNEL_FOLLOW_ADD = 12,
    GUILD_DISCOVERY_DISQUALIFIED = 14,
    GUILD_DISCOVERY_REQUALIFIED = 15,
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
    THREAD_CREATED = 18,
    REPLY = 19,
    CHAT_INPUT_COMMAND = 20,
    THREAD_STARTER_MESSAGE = 21,
    GUILD_INVITE_REMINDER = 22,
    CONTEXT_MENU_COMMAND = 23,
    AUTO_MODERATION_ACTION = 24
}

// https://discord.com/developers/docs/resources/channel#message-object-message-activity-types

export const enum messageActivityTypes {
    JOIN = 1,
    SPECTATE = 2,
    LISTEN = 3,
    JOIN_REQUEST = 5
}

// https://discord.com/developers/docs/resources/channel#message-object-message-flags

export const enum messageFlags {
    CROSSPOSTED = 1,
    IS_CROSSPOST = 2,
    SUPPRESS_EMBEDS = 4,
    SOURCE_MESSAGE_DELETED = 8,
    URGENT = 16,
    HAS_THREAD = 32,
    EPHEMERAL = 64,
    LOADING = 128,
    FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 256
}
