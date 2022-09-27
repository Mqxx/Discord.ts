import { bitfield } from '../../constants/types.ts'
import { Component } from './../messageComponents/Component.ts'
import { ApplicationCommandOptionChoice } from './../applicationCommands/ApplicationCommand.ts'
import { Attachment } from "../../resources/channel/Attachment.ts";
import { AllowedMentions } from "../../resources/channel/AllowedMentions.ts";
import { Embed } from "../../resources/channel/Embed.ts";


// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure

export interface InteractionResponse {
    type : interactionCallbackTypes
    data? : Messages | Autocomplete | Modal
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages

export interface Messages {
    tts? : boolean
    content? : string
    embeds? : Embed[]
    allowed_mentions? : AllowedMentions
    flags? : bitfield
    components? : Component[]
    attachments? : Attachment[]
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete

export interface Autocomplete {
    choices : ApplicationCommandOptionChoice[]
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal

export interface Modal {
    custom_id : string
    title : string
    components : Component[]
}

// https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type

export const enum interactionCallbackTypes {
    PONG = 1,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
    DEFERRED_UPDATE_MESSAGE = 6,
    UPDATE_MESSAGE = 7,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
    MODAL = 9
}
