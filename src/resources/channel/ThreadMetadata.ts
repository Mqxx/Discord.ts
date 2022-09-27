import { timestamp } from '../../constants/types.ts'

// https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure

export interface ThreadMetadata {
    archived : boolean
    auto_archive_duration : number
    archive_timestamp : timestamp
    locked : boolean
    invitable? : boolean
    create_timestamp? : timestamp
}

