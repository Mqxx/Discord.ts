import { gatewayOpcode } from './opCodes.ts'

export const heartbeat = {
    op: gatewayOpcode.HEARTBEAT,
    d: null
}

export const identify = {
    op: gatewayOpcode.IDENTIFY,
    d: {
        token: '',
        properties: {
            $os: "linux",
            $browser: "discord.ts",
            $device: "discord.ts"
        },
        intents: 1
    }
    
}

