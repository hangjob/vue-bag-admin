<template>
    <bag-view>
        <a-typography-title :level="3">socket</a-typography-title>
        <pre>
            <code>
            const {status, data, send, open, close} = useWebSocket('ws://127.0.0.1:7001', {
                heartbeat: {
                    message: 'ping',
                    interval: 3000,
                },
            })
        </code>
        </pre>
    </bag-view>
</template>
<script>
import {useWebSocket} from '@vueuse/core'

export default {
    setup() {
        const {status, data, send, open, close} = useWebSocket('ws://127.0.0.1:7001', {
            heartbeat: {
                message: 'ping',
                interval: 3000,
            },
        })
    }
}
</script>
