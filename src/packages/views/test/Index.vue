<template>
    <div>
           111111 1
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {getParentId} from '@/packages/utils/lodash';

let people = [
    {
        "name": "Jack",
        "pets": [
            {"type": "Frog", "id": 23},
            {"type": "Bird", "id": 57},
            {"type": "Fish", "id": 11}
        ]
    },
    {
        "name": "Dawn",
        "pets": [
            {"type": "Lion", "id": 89},
            {
                "type": "Duck", "id": 51,
                "pets": [
                    {"type": "Lion1", "id": 892},
                    {"type": "Lion2", "id": 893},
                ]
            }
        ]
    },
    {
        "name": "Anne"
    },
    {
        "name": "Josh",
        "pets": []
    }
]
export default defineComponent({
    setup() {
        const result = getParentId({key: 'id', value: 893, node: 'pets'}, people)
        console.log(result)


    }
})
</script>
