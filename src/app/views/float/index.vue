<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="浮动按钮" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-flex>
                    <n-float-button position="relative">
                        <n-badge :value="9" :offset="[6, -8]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                    <n-float-button position="relative">
                        <n-badge :value="100" :max="99" :offset="[6, -8]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                    <n-float-button position="relative">
                        <n-badge dot :offset="[4, -4]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                    <n-float-button position="relative">
                        <n-badge dot :offset="[4, -4]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                    <n-float-button position="relative">
                        <n-badge value="新" :offset="[6, -6]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                    <n-float-button position="relative">
                        <n-badge :value="9" :offset="[6, -8]">
                            <n-icon>
                                <AlarmOutlineIcon />
                            </n-icon>
                        </n-badge>
                    </n-float-button>
                </n-flex>
                <n-flex class="mt-[80px]">
                    <n-float-button position="relative" type="primary" menu-trigger="hover">
                        <n-icon>
                            <CashIcon />
                        </n-icon>
                        <template #menu>
                            <n-float-button shape="square" type="primary">
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                            <n-float-button>
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                            <n-float-button>
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                        </template>
                    </n-float-button>
                    <n-float-button position="relative" type="primary" menu-trigger="click">
                        <n-icon>
                            <CashIcon />
                        </n-icon>
                        <template #menu>
                            <n-float-button shape="square" type="primary">
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                            <n-float-button>
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                            <n-float-button>
                                <n-icon>
                                    <CashIcon />
                                </n-icon>
                            </n-float-button>
                        </template>
                    </n-float-button>
                </n-flex>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import { CashOutline as CashIcon,AlarmOutline as AlarmOutlineIcon  } from "@vicons/ionicons5";
</script>

<style scoped>

</style>
