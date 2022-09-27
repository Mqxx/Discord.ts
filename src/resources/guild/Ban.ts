import { User } from "../user/User.ts";

// https://discord.com/developers/docs/resources/guild#ban-object-ban-structure

export interface Ban {
    reason : string
    user : User
}
