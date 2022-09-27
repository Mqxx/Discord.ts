import { componentTypes } from "./Component.ts";

// https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-structure

export interface TextInput {
    type : componentTypes.TEXT_INPUT
    custom_id : string
    style : textInputStyles
    label : string
    min_length? : number
    max_length? : number
    required? : boolean
    value? : string
    placeholder? : string
}

// https://discord.com/developers/docs/interactions/message-components#text-inputs-text-input-styles

export const enum textInputStyles {
    SHORT = 1,
    PARAGRAPH = 2
}
