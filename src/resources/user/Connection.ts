import { Integration } from "../guild/Integration.ts";

// https://discord.com/developers/docs/resources/user#connection-object-connection-structure

export interface Connection {
    id : string
    name : string
    type : services
    revoked? : boolean
    integrations? : Integration[]
    verified : boolean
    friend_sync : boolean
    show_activity : boolean
    two_way_link : boolean
    visibility : visibilityTypes
}

// https://discord.com/developers/docs/resources/user#connection-object-services

export const enum services {
    BATTLENET = 'battlenet',
    EBAY = 'ebay',
    EPICGAMES = 'epicgames',
    FACEBOOK = 'facebook',
    GITHUB = 'github',
    LEAGUEOFLEGENDS = 'leagueoflegends',
    PAYPAL = 'paypal',
    PLAYSTATION = 'playstation',
    REDDIT = 'reddit',
    RIOTGAMES = 'riotgames',
    SPOTIFY = 'spotify',
    SKYPE = 'skype',
    STEAM = 'steam',
    TWITCH = 'twitch',
    TWITTER = 'twitter',
    XBOX = 'xbox',
    YOUTUBE = 'youtube'
}

// https://discord.com/developers/docs/resources/user#connection-object-visibility-types

export const enum visibilityTypes {
    NONE = 0,
    EVERYONE = 1
}
