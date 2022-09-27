import { GuildMember } from "../../resources/guild/GuildMember.ts";
import { User } from "../../resources/user/User.ts";
import { snowflake } from './../../constants/types.ts'
import { interactionTypes } from "./Interaction.ts";

// https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure

export interface MessageInteraction {
    id : snowflake
    type : interactionTypes
    name : string
    user : User
    member? : GuildMember
}
