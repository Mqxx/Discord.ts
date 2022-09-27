import { Emoji } from "../emoji/Emoji.ts";

// https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure

export interface Reaction {
    count : number
    me : boolean
    emoji : Emoji
}
