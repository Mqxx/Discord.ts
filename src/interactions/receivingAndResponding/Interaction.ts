import { snowflake, bitset } from './../../constants/types.ts'
import { Message } from './../../resources/channel/Message.ts'
import { applicationCommandTypes } from './../applicationCommands/ApplicationCommand.ts'
import { SelectOption } from './../../interactions/messageComponents/SelectMenu.ts'
import { Component, componentTypes } from './../../interactions/messageComponents/Component.ts'
import { Channel } from './../../resources/channel/Channel.ts'
import { Attachment } from './../../resources/channel/Attachment.ts'
import { GuildMember } from "../../resources/guild/GuildMember.ts";
import { User } from "../../resources/user/User.ts";
import { locales } from "../../resources/reference/Locales.ts";
import { Role } from "../../resources/permissions/Role.ts";

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure

export interface Interaction {
    id : snowflake
    application_id : snowflake
    type : interactionTypes
    data? : ApplicationCommandData | MessageComponentData | ModalSubmitData | ResolvedData
    guild_id? : snowflake
    channel_id? : snowflake
    member? : GuildMember
    user? : User
    token : string
    version : number
    message? : Message
    app_permissions? : bitset
    locale? : locales
    guild_locale? : string
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure

export interface ApplicationCommandData {
    id : snowflake
    name : string
    type : applicationCommandTypes
    resolved? : ResolvedData
    options? : ApplicationCommandInteractionDataOption[]
    guild_id? : snowflake
    target_id? : snowflake
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure

export interface MessageComponentData {
    custom_id : string
    component_type : componentTypes
    values : SelectOption
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure

export interface ModalSubmitData {
    custom_id : string
    components : Component
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure

export interface ResolvedData {
    users? : Map<snowflake, User>
    members? : Map<snowflake, GuildMember>
    roles? : Map<snowflake, Role>
    channels? : Map<snowflake, Channel>
    messages? : Map<snowflake, Message>
    attachments? : Map<snowflake, Attachment>
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure

export interface ApplicationCommandInteractionDataOption {
    name : string
    type : number
    value? : string | number
    options? : ApplicationCommandInteractionDataOption[]
    focused? : boolean
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type

export const enum interactionTypes {
    PING = 1,
    APPLICATION_COMMAND = 2,
    MESSAGE_COMPONENT = 3,
    APPLICATION_COMMAND_AUTOCOMPLETE = 4,
    MODAL_SUBMIT = 5
}
