import { snowflake } from "../../constants/types.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure

export interface Sticker {
    id : snowflake
    pack_id? : snowflake
    name : string
    description : string
    tags : string
    type : stickerTypes
    format_type : stickerFormatTypes
    available? : boolean
    guild_id? : snowflake
    user? : User
    sort_value? : number
}

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types

export const enum stickerTypes {
    STANDARD = 1,
    GUILD = 2
}

// https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types

export const enum stickerFormatTypes {
    PNG = 1,
    APNG = 2,
    LOTTIE = 3
}
