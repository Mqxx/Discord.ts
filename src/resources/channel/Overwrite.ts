import { bitset, snowflake } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure

export interface Overwrite {
    id : snowflake
    type : number
    allow : bitset
    deny : bitset
}
