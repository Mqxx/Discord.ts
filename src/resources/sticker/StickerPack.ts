import { snowflake } from "../../constants/types.ts";
import { Sticker } from "./Sticker.ts";

// https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure

export interface StickerPack {
    id : snowflake
    stickers : Sticker[]
    name : string
    sku_id : snowflake
    cover_sticker_id? : snowflake
    description : string
    banner_asset_id? : snowflake
}
