import { image_hash, snowflake, url } from "../../constants/types.ts";
import { scopes } from "../oauth2/OAuth2.ts";
import { Team } from "../teams/Team.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/application#application-object-application-structure

export interface Application {
    id : snowflake
    name : string
    icon : image_hash
    description : string
    rpc_origins? : string[]
    bot_public : boolean
    bot_require_code_grant : boolean
    terms_of_service_url? : url
    privacy_policy_url? : url
    owner? : User
    verify_key : string
    team : Team
    guild_id? : snowflake
    primary_sku_id? : snowflake
    slug? : string
    cover_image? : image_hash
    flags? : applicationFlags
    tags? : string[]
    install_params? : InstallParams
    custom_install_url? : url
}

// https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure

export interface InstallParams {
    scopes : scopes[]
    permissions : string
}

// https://discord.com/developers/docs/resources/application#application-object-application-flags

export const enum applicationFlags {
    GATEWAY_PRESENCE = 4096,
    GATEWAY_PRESENCE_LIMITED = 8192,
    GATEWAY_GUILD_MEMBERS = 16384,
    GATEWAY_GUILD_MEMBERS_LIMITED = 32768,
    VERIFICATION_PENDING_GUILD_LIMIT = 65536,
    EMBEDDED = 131072,
    GATEWAY_MESSAGE_CONTENT = 262144,
    GATEWAY_MESSAGE_CONTENT_LIMITED = 524288,
    APPLICATION_COMMAND_BADGE= 8388608
}
