import { snowflake, bitset } from './../../constants/types.ts'
import { locales } from "../../resources/reference/Locales.ts";
import { channelTypes } from "../../resources/channel/Channel.ts";

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure

export interface ApplicationCommand {
    id : snowflake
    type? : applicationCommandTypes
    application_id : snowflake
    guild_id? : snowflake
    name : string
    name_localizations? : locales
    description : string
    description_localizations? : locales
    options? : ApplicationCommandOption[]
    default_member_permissions : bitset
    dm_permission? : boolean
    default_permission? : boolean
    version : snowflake
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure

export interface ApplicationCommandOption {
    type : applicationCommandOptionTypes
    name : string
    name_localizations? : locales
    description : string
    description_localizations? : locales
    required? : boolean
    choices? : ApplicationCommandOptionChoice[]
    options? : ApplicationCommandOption[]
    channel_types? : channelTypes[]
    min_value? : number
    max_value? : number
    min_length? : number
    max_length? : number
    autocomplete? : boolean
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure

export interface ApplicationCommandOptionChoice {
    name : string
    name_localizations? : locales
    value : string | number
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types

export const enum applicationCommandTypes {
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type

export const enum applicationCommandOptionTypes {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10,
    ATTACHMENT = 11
}
