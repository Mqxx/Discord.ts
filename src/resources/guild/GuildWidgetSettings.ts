import { snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure

export interface GuildWidgetSettings {
    enabled : boolean
    channel_id : snowflake
}
