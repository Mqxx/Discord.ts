import { snowflake } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure

export interface DefaultReaction {
    emoji_id : snowflake
    emoji_name : string
}
