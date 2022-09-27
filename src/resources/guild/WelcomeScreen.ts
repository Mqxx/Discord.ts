import { snowflake } from "../../constants/types.ts";

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure

export interface WelcomeScreen {
    description : string
    welcome_channels : WelcomeScreenChannel[]
}

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure

export interface WelcomeScreenChannel {
    channel_id : snowflake
    description : string
    emoji_id : snowflake
    emoji_name : string
}
