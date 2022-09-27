import { timestamp } from "../../constants/types.ts";
import { Application } from "../application/Application.ts";
import { Channel } from "../channel/Channel.ts";
import { Guild } from "../guild/Guild.ts";
import { GuildScheduledEvent } from "../guildScheduledEvent/GuildScheduledEvent.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/invite#invite-object-invite-structure

export interface Invite {
    code : string
    guild? : Guild
    channel : Channel
    inviter? : User
    target_type? : inviteTargetTypes
    target_user? : User
    target_application? : Application
    approximate_presence_count? : number
    approximate_member_count? : number
    expires_at? : timestamp
    guild_scheduled_event? : GuildScheduledEvent
}

// https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types

export const enum inviteTargetTypes {
    STREAM = 1,
    EMBEDDED_APPLICATION = 2
}
