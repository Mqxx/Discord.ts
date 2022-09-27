import { url } from "../../constants/types.ts";
import { Emoji } from "../../resources/emoji/Emoji.ts";
import { componentTypes } from "./Component.ts";

// https://discord.com/developers/docs/interactions/message-components#component-object-component-types

export interface Button {
    type : componentTypes.BUTTON
    style : buttonStyles
    label? : string
    emoji? : Emoji
    custom_id? : string
    url? : url
    disabled? : boolean
}

// https://discord.com/developers/docs/interactions/message-components#button-object-button-styles

export const enum buttonStyles {
    PRIMARY = 1,
    SECONDARY = 2,
    SUCCESS = 3,
    DANGER = 4,
    LINK = 5
}
