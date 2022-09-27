import { snowflake } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure

export interface MessageReference {
    message_id? : snowflake
    channel_id? : snowflake
    guild_id? : snowflake
    fail_if_not_exists? : boolean
}
