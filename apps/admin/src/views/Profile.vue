<template>
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- 页面标题 -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">个人中心</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">管理您的个人信息和账户安全设置</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- 左侧：用户信息卡片 -->
      <div class="lg:col-span-1 space-y-6">
        <NCard class="rounded-2xl shadow-sm border-0 bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-xl">
          <div class="flex flex-col items-center py-6">
            <div class="relative group cursor-pointer">
              <NAvatar
                round
                :size="100"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffedd5"
                class="ring-4 ring-orange-50 dark:ring-gray-800 transition-all duration-300 group-hover:ring-orange-200 dark:group-hover:ring-orange-500/50"
              />
              <div class="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <h3 class="mt-4 text-xl font-bold text-slate-800 dark:text-slate-200">
              {{ userStore.username || 'Admin' }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">前端开发工程师</p>
            
            <div class="flex flex-wrap justify-center gap-2 mt-4">
              <NTag v-for="role in userStore.roles" :key="role" type="warning" round size="small" class="px-3">
                {{ role }}
              </NTag>
            </div>
          </div>
          
          <NDivider class="!my-0" />
          
          <div class="py-6 space-y-4">
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                邮箱
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">admin@vuebagadmin.com</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                手机
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">+86 138 0000 0000</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span class="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                地区
              </span>
              <span class="text-slate-800 dark:text-slate-200 font-medium">中国 · 上海</span>
            </div>
          </div>
        </NCard>
      </div>

      <!-- 右侧：设置内容区 -->
      <div class="lg:col-span-2">
        <NCard class="rounded-2xl shadow-sm border-0 bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-xl h-full">
          <NTabs type="line" size="large" :tabs-padding="20" pane-style="padding: 24px 0 0 0;" class="ecommerce-tabs">
            <!-- 基本信息 -->
            <NTabPane name="basic" tab="基本信息">
              <div class="max-w-md space-y-6">
                <NForm ref="formRef" :model="formValue" :rules="rules" label-placement="top" require-mark-placement="right-hanging">
                  <NFormItem label="用户名" path="username">
                    <NInput v-model:value="formValue.username" placeholder="请输入用户名" size="large" />
                  </NFormItem>
                  <NFormItem label="昵称" path="nickname">
                    <NInput v-model:value="formValue.nickname" placeholder="请输入昵称" size="large" />
                  </NFormItem>
                  <NFormItem label="邮箱" path="email">
                    <NInput v-model:value="formValue.email" placeholder="请输入邮箱地址" size="large" />
                  </NFormItem>
                  <NFormItem label="个人简介" path="bio">
                    <NInput v-model:value="formValue.bio" type="textarea" :rows="4" placeholder="一句话介绍自己..." size="large" />
                  </NFormItem>
                  
                  <div class="pt-4">
                    <NButton type="primary" size="large" class="w-32 !bg-orange-500 hover:!bg-orange-600 !border-none" @click="handleSaveProfile">
                      保存更改
                    </NButton>
                  </div>
                </NForm>
              </div>
            </NTabPane>

            <!-- 安全设置 -->
            <NTabPane name="security" tab="安全设置">
              <div class="space-y-6">
                <!-- 密码修改 -->
                <div class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">账户密码</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">定期修改密码有助于保护您的账户安全</p>
                  </div>
                  <NButton secondary type="primary" size="small" class="!text-orange-500 hover:!bg-orange-50">修改</NButton>
                </div>
                
                <!-- 手机绑定 -->
                <div class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">绑定手机</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">已绑定：+86 138****0000</p>
                  </div>
                  <NButton secondary size="small">更改</NButton>
                </div>
                
                <!-- 邮箱绑定 -->
                <div class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 class="font-bold text-slate-800 dark:text-slate-200">绑定邮箱</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">已绑定：admin@vuebagadmin.com</p>
                  </div>
                  <NButton secondary size="small">更改</NButton>
                </div>
                
                <!-- 多因素认证 -->
                <div class="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <div>
                    <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">两步验证 (2FA)</h4>
                    <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">未开启，建议开启以提高账户安全性</p>
                  </div>
                  <NButton secondary type="primary" size="small" class="!text-orange-500 hover:!bg-orange-50">去开启</NButton>
                </div>
              </div>
            </NTabPane>
            
            <!-- 操作日志 -->
            <NTabPane name="logs" tab="操作日志">
              <div class="space-y-4">
                <div v-for="(log, index) in logs" :key="index" class="flex gap-4 relative pl-4">
                  <!-- 时间轴线 -->
                  <div class="absolute left-[7px] top-2 bottom-[-16px] w-px bg-gray-200 dark:bg-gray-700" v-if="index !== logs.length - 1"></div>
                  <!-- 时间轴点 -->
                  <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0A1120] z-10" :class="log.color"></div>
                  
                  <div class="flex-1 pb-4">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-sm font-medium text-slate-800 dark:text-slate-200">{{ log.action }}</span>
                      <span class="text-xs text-slate-400 dark:text-slate-500">{{ log.time }}</span>
                    </div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ log.ip }} • {{ log.device }}</p>
                  </div>
                </div>
              </div>
            </NTabPane>
          </NTabs>
        </NCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NCard, NAvatar, NTabs, NTabPane, NForm, NFormItem, NInput, NButton, NDivider, NTag, useMessage } from 'naive-ui'
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
const message = useMessage()
const formRef = ref()

// 表单数据
const formValue = ref({
  username: userStore.username,
  nickname: 'Admin User',
  email: 'admin@vuebagadmin.com',
  bio: '保持热爱，奔赴山海。'
})

// 验证规则
const rules = {
  username: { required: true, message: '请输入用户名', trigger: 'blur' },
  email: { required: true, message: '请输入邮箱地址', trigger: 'blur' }
}

// 模拟日志数据
const logs = [
  { action: '修改了账户密码', time: '今天 14:23', ip: '192.168.1.10', device: 'Mac OS / Chrome', color: 'bg-blue-500' },
  { action: '登录系统', time: '今天 09:00', ip: '192.168.1.10', device: 'Mac OS / Chrome', color: 'bg-green-500' },
  { action: '导出了上月销售报表', time: '昨天 16:45', ip: '192.168.1.10', device: 'Mac OS / Chrome', color: 'bg-orange-500' },
  { action: '修改了系统基础配置', time: '昨天 11:20', ip: '192.168.1.10', device: 'Mac OS / Chrome', color: 'bg-purple-500' },
  { action: '登录系统', time: '昨天 08:55', ip: '192.168.1.10', device: 'Mac OS / Chrome', color: 'bg-green-500' }
]

// 保存个人信息
const handleSaveProfile = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // 模拟保存请求
      message.success('个人信息保存成功')
    } else {
      message.error('请检查表单填写是否正确')
    }
  })
}
</script>

<style scoped>
/* 自定义 Tabs 样式，匹配电商主题 */
:deep(.ecommerce-tabs .n-tabs-tab--active) {
  color: #ea580c !important; /* orange-600 */
  font-weight: 600;
}
:deep(.dark .ecommerce-tabs .n-tabs-tab--active) {
  color: #fb923c !important; /* orange-400 */
}
:deep(.ecommerce-tabs .n-tabs-bar) {
  background-color: #f97316 !important; /* orange-500 */
}
:deep(.ecommerce-tabs .n-tabs-tab:hover) {
  color: #f97316 !important;
}
</style>
