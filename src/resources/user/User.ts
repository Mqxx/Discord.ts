import { locales } from "../../resources/reference/Locales.ts";
import { image_hash, snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/user#user-object-user-structure

export interface User {
    id : snowflake
    username : string
    discriminator : string
    avatar : image_hash
    bot? : boolean
    system? : boolean
    mfa_enabled? : boolean
    banner? : image_hash
    accent_color? : number
    locale? : locales
    verified? : boolean
    email? : string
    flags? : userFlags
    premium_type? : premiumTypes
    public_flags? : userFlags
}

// https://discord.com/developers/docs/resources/user#user-object-user-flags

export const enum userFlags {
    STAFF = 1,
    PARTNER = 2,
    HYPESQUAD = 4,
    BUG_HUNTER_LEVEL_1 = 8,
    HYPESQUAD_ONLINE_HOUSE_1 = 64,
    HYPESQUAD_ONLINE_HOUSE_2 = 128,
    HYPESQUAD_ONLINE_HOUSE_3 = 256,
    PREMIUM_EARLY_SUPPORTER = 512,
    TEAM_PSEUDO_USER = 1024,
    BUG_HUNTER_LEVEL_2 = 16384,
    VERIFIED_BOT = 65536,
    VERIFIED_DEVELOPER = 131072,
    CERTIFIED_MODERATOR = 262144,
    BOT_HTTP_INTERACTIONS = 524288
}

// https://discord.com/developers/docs/resources/user#user-object-premium-types

export const enum premiumTypes {
    NONE = 0,
    NITRO_CLASSIC = 1,
    NITRO = 2
}
