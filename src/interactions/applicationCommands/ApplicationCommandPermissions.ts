import { snowflake } from './../../constants/types.ts'

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure

export interface GuildApplicationCommandPermissions {
    id : snowflake
    application_id : snowflake
    guild_id : snowflake
    permissions : ApplicationCommandPermissions[]
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure

export interface ApplicationCommandPermissions {
    id : snowflake
    type : applicationCommandPermissionsType
    permission : boolean
}

// https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type

export const enum applicationCommandPermissionsType {
    ROLE = 1,
    USER = 2,
    CHANNEL = 3
}
