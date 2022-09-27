// https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure

export interface VoiceRegion {
    id : string
    name : string
    optimal : boolean
    deprecated : boolean
    custom : boolean
}
