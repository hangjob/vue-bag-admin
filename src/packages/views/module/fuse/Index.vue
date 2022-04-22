<template>
    <bag-view>
        <div class="fuse">
            <div>
                <code>
                    <pre>{{ testList }}</pre>
                </code>
            </div>
            <div>
                <a-input-search
                    v-model:value="inputValue"
                    placeholder="输入关键词title，author.firstName"
                    @search="onSearch"
                    size="large"
                />
                <p>可配置参数</p>
                <code>
                    <pre>{{ options }}</pre>
                </code>
            </div>
            <div>
                <code>
                    <pre>{{ searchLsit }}</pre>
                </code>
            </div>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import Fuse from 'fuse.js'
// 测试数据
const testList = [
    {
        "title": "Old Man's War",
        "author": {
            "firstName": "John",
            "lastName": "Scalzi"
        }
    },
    {
        "title": "The Lock Artist",
        "author": {
            "firstName": "Steve",
            "lastName": "Hamilton"
        }
    },
    {
        "title": "HTML5",
        "author": {
            "firstName": "Remy",
            "lastName": "Sharp"
        }
    },
    {
        "title": "Right Ho Jeeves",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "The Code of the Wooster",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "Thank You Jeeves",
        "author": {
            "firstName": "P.D",
            "lastName": "Woodhouse"
        }
    },
    {
        "title": "The DaVinci Code",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "Angels & Demons",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "The Silmarillion",
        "author": {
            "firstName": "J.R.R",
            "lastName": "Tolkien"
        }
    },
    {
        "title": "Syrup",
        "author": {
            "firstName": "Max",
            "lastName": "Barry"
        }
    },
    {
        "title": "The Lost Symbol",
        "author": {
            "firstName": "Dan",
            "lastName": "Brown"
        }
    },
    {
        "title": "The Book of Lies",
        "author": {
            "firstName": "Brad",
            "lastName": "Meltzer"
        }
    },
    {
        "title": "Lamb",
        "author": {
            "firstName": "Christopher",
            "lastName": "Moore"
        }
    },
    {
        "title": "Fool",
        "author": {
            "firstName": "Christopher",
            "lastName": "Moore"
        }
    },
    {
        "title": "Incompetence",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Fat",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Colony",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "Backwards, Red Dwarf",
        "author": {
            "firstName": "Rob",
            "lastName": "Grant"
        }
    },
    {
        "title": "The Grand Design",
        "author": {
            "firstName": "Stephen",
            "lastName": "Hawking"
        }
    },
    {
        "title": "The Book of Samson",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "The Preservationist",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "Fallen",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    },
    {
        "title": "Monster 1959",
        "author": {
            "firstName": "David",
            "lastName": "Maine"
        }
    }
]

export default defineComponent({
    setup() {
        const searchLsit = ref();
        const inputValue = ref();
        const options = {
            isCaseSensitive: false,
            includeScore: false,
            shouldSort: true,
            includeMatches: false,
            findAllMatches: false,
            minMatchCharLength: 1,
            location: 0,
            threshold: 0.6,
            distance: 100,
            useExtendedSearch: false,
            ignoreLocation: false,
            ignoreFieldNorm: false,
            fieldNormWeight: 1,
            keys: [
                "title",
                "author.firstName"
            ]
        };
        const onSearch = () => {
            searchLsit.value = new Fuse(testList, options).search(inputValue.value)
        }
        return {
            testList,
            searchLsit,
            onSearch,
            inputValue,
            options
        }
    }
})
</script>
<style lang="less" scoped>
.fuse {
    display: flex;

    > div {
        flex: 1;
    }
}
</style>
