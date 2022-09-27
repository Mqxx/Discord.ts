import { snowflake } from "../../constants/types.ts";
import { GuildMember } from "../guild/GuildMember.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure

export interface GuildScheduledEventUser {
    guild_scheduled_event_id : snowflake
    user : User
    member : GuildMember
}
