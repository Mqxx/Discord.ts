import { color, timestamp, url } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#embed-object-embed-structure

export interface Embed {
    title? : string
    type? : embedTypes
    description? : string
    url? : url
    timestamp? : timestamp
    color? : color
    footer? : EmbedFooter
    image? : EmbedImage
    thumbnail? : EmbedThumbnail
    video? : EmbedVideo
    provider? : EmbedProvider
    author? : EmbedAuthor
    fields? : EmbedField[]
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure

export interface EmbedThumbnail {
    url : url
    proxy_url? : url
    height? : number
    width? : number
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure

export interface EmbedVideo {
    url? : url
    proxy_url? : url
    height? : number
    width? : number
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure

export interface EmbedImage {
    url : url
    proxy_url? : url
    height? : number
    width? : number
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure

export interface EmbedProvider {
    name? : string
    url? : url
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure

export interface EmbedAuthor {
    name : string
    url? : url
    icon_url? : url
    proxy_icon_url? : url
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure

export interface EmbedFooter {
    text : string
    icon_url? : url
    proxy_icon_url? : url
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure

export interface EmbedField {
    name : string
    value : string
    inline? : boolean
}

// https://discord.com/developers/docs/resources/channel#embed-object-embed-types

export const enum embedTypes {
    RICH = 'rich',
    IMAGE = 'image',
    VIDEO = 'video',
    GIFV = 'gifv',
    ARTICLE = 'article',
    LINK = 'link'
}
