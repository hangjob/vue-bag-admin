<template>
    <div class="card">
        <div class="card-heading">
            <div class="card-heading-title">
                <h3>{{ title }}</h3>
            </div>
            <div class="card-heading-more">
                <ul>
                    <li v-for="(item,idx) in more" :key="idx"><a href="">{{ item.name }}</a></li>
                </ul>
            </div>
        </div>
        <div class="card-body">
            <article class="card-body-article">
                <slot name="body"></slot>
            </article>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '',
        },
        more: {
            type: Array,
            default: [],
        },
    },
    setup() {

    },
})
</script>
<style lang="less" scoped>
.card {
    border-radius: 3px;
    background-clip: padding-box;
    background-color: #fff;
    margin-top: var(--bag-margin-base);

    &-heading {
        position: relative;
        padding: 15px 15px;
        background: #fff;
        border-bottom: 1px solid #f5f5f5;
        display: flex;

        &-title {
            h3 {
                color: var(--yh-text-color-black);
                font-size: 16px;
            }
        }

        &-more {
            flex: 1;
            display: flex;
            justify-content: end;

            ul {
                li {
                    display: inline-block;
                    margin-left: 15px;
                    a {
                        text-decoration: none;
                        color: var(--yh-text-color-black);

                        &:hover {
                            color: var(--yh-text-hover-color-primary);
                        }
                    }
                }
            }
        }
    }

    &-body {
        padding: 15px 15px;

        &-article {

        }
    }
}
</style>
