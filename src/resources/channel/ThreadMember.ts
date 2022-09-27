import { snowflake, timestamp } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure

export interface ThreadMember {
    id? : snowflake
    user_id? : snowflake
    join_timestamp : timestamp
    flags : number
}
