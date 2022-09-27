import { image_hash, snowflake } from "../../constants/types.ts";
import { User } from "../user/User.ts";

// https://discord.com/developers/docs/topics/teams#data-models-team-object

export interface Team {
    icon : image_hash
    id : snowflake
    members : TeamMember[]
    name : string
    owner_user_id : snowflake
}

// https://discord.com/developers/docs/topics/teams#data-models-team-member-object

export interface TeamMember {
    membership_state : membershipStates
    permissions : string[]
    team_id : snowflake
    user : User
}

// https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum

export const enum membershipStates {
    INVITED = 1,
    ACCEPTED = 2
}
