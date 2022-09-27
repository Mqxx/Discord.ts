import { image_hash, snowflake } from "../../constants/types.ts";
import { Emoji } from "../emoji/Emoji.ts";
import { Sticker } from "../sticker/Sticker.ts";
import { guildFeatures } from "./Guild.ts";

// https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure

export interface GuildPreview {
    id : snowflake
    name : string
    icon : image_hash
    splash : image_hash
    discovery_splash : image_hash
    emojis : Emoji[]
    features : guildFeatures
    approximate_member_count : number
    approximate_presence_count : number
    description : string
    stickers : Sticker[]
}
