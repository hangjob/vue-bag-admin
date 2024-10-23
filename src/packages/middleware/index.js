const eventNames = ['API:SUCCESS', 'API:ERROR', 'API:REQUEST', 'ROUTER:BEFORE','ROUTER:AFTER','APP:INIT'];

class EventEmitter {
    constructor() {
        this.listeners = Object.fromEntries(eventNames.map(item => [item, new Set()]));
    }

    on(eventName, listeners) {
        this.listeners[eventName].add(listeners)
    }

    emit(eventName, ...args) {
        this.listeners[eventName].forEach((listeners) => {
            listeners(...args)
        })
    }
}

export default new EventEmitter()
