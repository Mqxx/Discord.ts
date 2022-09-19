import { gatewayOpcode } from "../constants/opCodes.ts";
import { urls } from '../constants/urls.ts'
import { heartbeat, identify } from '../constants/payloads.ts'

export default class GatewayManager {
    
    private gateway : WebSocket | undefined
    private interval! : number
    
    connect(token : string, intents : number) {
    
        try {
            // create new gateway to the discord API
            this.gateway = new WebSocket(urls.GATEWAY)
            
            // gateway open
            this.gateway.addEventListener('open', openEvent => {
                console.log(openEvent)
            })
            
            // gateway close
            this.gateway.addEventListener('close', closeEvent => {
                console.log(closeEvent)
                
            })
            
            // gateway error
            this.gateway.addEventListener('error', errorEvent => {
                console.log(errorEvent)
                
            })
            
            // gateway message
            this.gateway.addEventListener('message', messageEvent => {
                const data = JSON.parse(messageEvent.data.toString())
                console.log(data)
                
                switch (data.op) {
                    default:
                        break;
                    
                    case gatewayOpcode.HELLO:
                        // start heartbeat
                        this.interval = this.heartbeat(data.d.heartbeat_interval)
                        
                        // identify
                        this.identify(token, intents)
                        break;
                
                }
                
            })
            
        } catch (error) {
            console.log(error)
            return error
        }
    }
    
    private heartbeat(interval : number) {
        return setInterval(() => {
            this.gateway?.send(JSON.stringify(heartbeat))
        }, interval)
    }
    
    private identify(token : string, intents : number) {
        identify.d.token = token
        identify.d.intents = intents
        this.gateway?.send(JSON.stringify(identify))
    }
}
