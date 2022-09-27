import { snowflake } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure

export interface ForumTag {
    id : snowflake
    name : string
    moderated : boolean
    emoji_id : snowflake
    emoji_name : string
}
