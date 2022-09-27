import { snowflake, timestamp } from "../../constants/types.ts";
import { Application } from "../application/Application.ts";
import { scopes } from "../oauth2/OAuth2.ts";
import { User } from "../user/User.ts";
import { IntegrationAccount } from "./IntegrationAccount.ts";

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure

export interface Integration {
    id : snowflake
    name : string
    type : integrationTypes | string
    enabled? : boolean
    syncing? : boolean
    role_id? : snowflake
    enable_emoticons? : boolean
    expire_behavior? : integrationExpireBehaviors
    expire_grace_period? : number
    user? : User
    account : IntegrationAccount
    synced_at? : timestamp
    subscriber_count? : number
    revoked? : boolean
    application? : Application
    scopes? : scopes[]
}

// https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors

export const enum integrationExpireBehaviors {
    REMOVE_ROLE = 0,
    KICK = 1
}

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure

export const enum integrationTypes {
    TWITCH = 'twitch',
    YOUTUBE = 'youtube',
    DISCORD = 'discord'
}
