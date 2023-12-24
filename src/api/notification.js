import axios from "axios";
import { Request } from "./api";

export class NotificationAPI {
    constructor(){
        this.endPoint = '/notifications/'
    }

    async Read(notification) {
        return await Request('patch', this.endPoint + 'read/', {}, {}, {
            ids : [notification.id],
        })
    }

    async ReadAll(notifications){
        return await Request('patch', this.endPoint + 'read/', {}, {}, {
            ids : notifications,
        })
    }
    
    async Fetch() {
        const endPoint = this.endPoint + 'unread/'
        return await Request('get', endPoint, {}, {}, {})
    }
}

export default NotificationAPI;