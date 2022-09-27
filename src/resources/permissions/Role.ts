import { bitset, color, image_hash, snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/topics/permissions#role-object-role-structure

export interface Role {
    id : snowflake
    name : string
    color : color
    hoist : boolean
    icon? : image_hash
    unicode_emoji? : string
    position : number
    permissions : bitset
    managed : boolean
    mentionable : boolean
    tags? : RoleTags
}

// https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure

export interface RoleTags {
    bot_id? : snowflake
    integration_id? : snowflake
    premium_subscriber? : boolean
}
