import { timestamp } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure

export interface InviteMetadata {
    uses : number
    max_uses : number
    max_age : number
    temporary : boolean
    created_at : timestamp
}
