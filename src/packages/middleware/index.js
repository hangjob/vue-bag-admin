

const eventNames = ['API:SUCCESS', 'API:ERROR', 'API:REQUEST',
    'ROUTER:BEFORE', 'ROUTER:AFTER', 'APP:INIT', 'APP:LOGOUT'];


class EventEmitter {
    constructor() {
        this.listeners = Object.fromEntries(eventNames.map(item => [item, new Set()]));
        this.executionModes = {
            'ROUTER:BEFORE': 'serial', // 同步
            'API:REQUEST': 'parallel', // 异步
        };
    }

    // 修复参数名拼写错误 (listeners -> listener)
    on(eventName, listener) {
        this.listeners[eventName].add(listener)
    }

    // 改造为异步发射器
    async emit(eventName, ...args) {
        const listeners = Array.from(this.listeners[eventName]);

        // 根据配置选择执行模式
        switch (this.executionModes[eventName]) {
            case 'parallel':
                await Promise.all(listeners.map(listener => listener(...args)));
                break;

            case 'serial':
            default:
                for (const listener of listeners) {
                    await listener(...args);
                }
        }
    }
}

// 用法
// 关键路由守卫保持顺序执行
// eventEmitter.executionModes['ROUTER:BEFORE'] = 'serial';
// API相关事件允许并行
// eventEmitter.executionModes['API:REQUEST'] = 'parallel';

export default new EventEmitter();
