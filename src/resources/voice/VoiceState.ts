import { snowflake, timestamp } from "../../constants/types.ts";
import { GuildMember } from "../guild/GuildMember.ts";

// https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure

export interface VoiceState {
    guild_id? : snowflake
    channel_id : snowflake
    user_id : snowflake
    member? : GuildMember
    session_id : string
    deaf : boolean
    mute : boolean
    self_deaf : boolean
    self_mute : boolean
    self_stream? : boolean
    self_video : boolean
    suppress : boolean
    request_to_speak_timestamp : timestamp
}
