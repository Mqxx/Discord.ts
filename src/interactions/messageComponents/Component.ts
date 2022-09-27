import { Button } from './Button.ts'
import { SelectMenu } from './SelectMenu.ts'
import { TextInput } from './TextInput.ts'
// https://discord.com/developers/docs/interactions/message-components#message-components

export interface Component {
    type : componentTypes
    components : Component[] | Button | SelectMenu | TextInput
}

// https://discord.com/developers/docs/interactions/message-components#component-object-component-types

export const enum componentTypes {
    ACTION_ROW = 1,
    BUTTON = 2,
    SELECT_MENU = 3,
    TEXT_INPUT = 4
}
