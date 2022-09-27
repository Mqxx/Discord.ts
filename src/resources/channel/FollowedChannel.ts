import { snowflake } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure

export interface FollowedChannel {
    channel_id : snowflake
    webhook_id : snowflake
}
