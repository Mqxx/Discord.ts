import { snowflake } from '../../constants/types.ts'
import { channelTypes } from './Channel.ts'

// https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure

export interface ChannelMention {
    id : snowflake
    guild_id : snowflake
    type : channelTypes
    name : string
}
