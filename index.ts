const token = Deno.readTextFileSync('./discord.token').trim()

import GatewayManager from './src/gateway/GatewayManager.ts'

const gwm = new GatewayManager()

gwm.connect(token, 0b1111111111111111111111)
