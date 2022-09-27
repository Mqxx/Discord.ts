import { Emoji } from "../../resources/emoji/Emoji.ts";
import { componentTypes } from "./Component.ts";

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure

export interface SelectMenu {
    type : componentTypes.SELECT_MENU
    custom_id : string
    options : SelectOption[]
    placeholder? : string
    min_values? : number
    max_values? : number
    disabled? : boolean
}

// https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure

export interface SelectOption {
    label : string
    value : string
    description? : string
    emoji? : Emoji
    default? : boolean
}
