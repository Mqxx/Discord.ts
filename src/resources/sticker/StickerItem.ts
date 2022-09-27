import { snowflake } from "../../constants/types.ts";
import { stickerFormatTypes } from "./Sticker.ts";

// https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure

export interface StickerItem {
    id : snowflake
    name : string
    format_type : stickerFormatTypes
}
