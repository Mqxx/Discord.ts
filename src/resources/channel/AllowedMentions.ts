import { snowflake } from './../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure

export interface AllowedMentions {
    parse : allowedMentionTypes[]
    roles : snowflake[]
    users : snowflake[]
    replied_user : boolean
}

// https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types

export const enum allowedMentionTypes {
    ROLE_MENTIONS = 'roles',
    USER_MENTIONS = 'users',
    EVERYONE_MENTIONS = 'everyone'
}
