import { snowflake, url } from './../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure

export interface Attachment {
    id : snowflake
    filename : string
    description? : string
    content_type? : string
    size : number
    url : url
    proxy_url : url
    height? : number
    width? : number
    ephemeral? : boolean
}
