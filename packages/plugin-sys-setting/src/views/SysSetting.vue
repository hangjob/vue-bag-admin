<template>
  <div
    class="p-6 bg-white dark:bg-[#0A1120] rounded-2xl shadow-sm min-h-[calc(100vh-120px)] border border-gray-100 dark:border-gray-800 max-w-5xl mx-auto"
  >
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200">系统常规设置</h2>
      <button
        class="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all font-bold"
      >
        保存配置
      </button>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Settings Nav -->
      <div class="w-full md:w-64 shrink-0 space-y-1">
        <button
          @click="activeTab = 'base'"
          class="w-full text-left px-4 py-3 rounded-xl font-bold transition-colors"
          :class="
            activeTab === 'base'
              ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800'
          "
        >
          基础配置
        </button>
        <button
          @click="activeTab = 'seo'"
          class="w-full text-left px-4 py-3 rounded-xl font-medium transition-colors"
          :class="
            activeTab === 'seo'
              ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800'
          "
        >
          SEO 设置
        </button>
        <button
          @click="activeTab = 'upload'"
          class="w-full text-left px-4 py-3 rounded-xl font-medium transition-colors"
          :class="
            activeTab === 'upload'
              ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800'
          "
        >
          文件上传
        </button>
        <button
          @click="activeTab = 'notice'"
          class="w-full text-left px-4 py-3 rounded-xl font-medium transition-colors"
          :class="
            activeTab === 'notice'
              ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-gray-800'
          "
        >
          通知公告
        </button>
      </div>

      <!-- Settings Content -->
      <div
        class="flex-1 bg-slate-50 dark:bg-gray-800/30 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800"
      >
        <!-- Base Settings -->
        <div v-if="activeTab === 'base'">
          <h3
            class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6"
          >
            <div class="w-1 h-4 bg-primary-500 rounded-full"></div>
            基础参数配置
          </h3>

          <div class="space-y-6">
            <!-- Logo & Favicon -->
            <div class="flex flex-col sm:flex-row items-start gap-8">
              <div class="flex items-start gap-6">
                <div class="space-y-1 w-24 pt-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    系统 Logo
                  </label>
                </div>
                <div>
                  <div
                    class="w-24 h-24 rounded-xl bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm relative group cursor-pointer overflow-hidden"
                  >
                    <img
                      src="https://api.dicebear.com/7.x/shapes/svg?seed=sys&backgroundColor=ffedd5"
                      class="w-full h-full object-cover"
                    />
                    <div
                      class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span class="text-white text-xs font-bold">更换</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-6">
                <div class="space-y-1 w-24 pt-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Favicon
                  </label>
                </div>
                <div>
                  <div
                    class="w-12 h-12 rounded-lg bg-white dark:bg-[#0A1120] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm relative group cursor-pointer overflow-hidden"
                  >
                    <span class="text-xl font-black text-primary-500">B</span>
                    <div
                      class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <!-- Site Name -->
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  网站名称
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  value="Vue-Bag-Admin 中后台系统"
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <!-- Copyright -->
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  版权信息
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  value="Copyright © 2024 Vue Bag Admin All rights reserved."
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <!-- ICP -->
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  备案号
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  placeholder="如：京ICP备00000000号-1"
                  value="浙ICP备2023012345号"
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <!-- Theme Color -->
            <div class="flex items-center gap-6">
              <div class="space-y-1 w-24">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  主题颜色
                </label>
              </div>
              <div class="flex-1 flex gap-4">
                <button
                  v-for="color in themeColors"
                  :key="color.value"
                  @click="handleColorChange(color.value)"
                  class="w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center shadow-sm hover:scale-110"
                  :class="[
                    color.bgClass,
                    currentColor === color.value
                      ? 'border-gray-800 dark:border-white'
                      : 'border-transparent'
                  ]"
                  :title="color.name"
                >
                  <svg
                    v-if="currentColor === color.value"
                    class="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <!-- System Status -->
            <div class="flex items-center gap-6">
              <div class="space-y-1 w-24">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  系统状态
                </label>
              </div>
              <div class="flex-1 flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div
                    class="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center"
                  >
                    <div class="w-2 h-2 rounded-full bg-primary-500"></div>
                  </div>
                  <span
                    class="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-primary-500 transition-colors"
                  >
                    正常运行
                  </span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div
                    class="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center"
                  ></div>
                  <span
                    class="text-sm font-medium text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors"
                  >
                    维护中
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- SEO Settings -->
        <div v-else-if="activeTab === 'seo'">
          <h3
            class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6"
          >
            <div class="w-1 h-4 bg-primary-500 rounded-full"></div>
            SEO 优化设置
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  网页标题 (Title)
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  v-model="seoForm.title"
                  placeholder="如：Vue Bag Admin - 现代化的中后台管理系统"
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
                <p class="text-xs text-slate-500 mt-2">
                  一般不超过80个字符，用于显示在浏览器标签页及搜索引擎结果中。
                </p>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  关键词 (Keywords)
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  v-model="seoForm.keywords"
                  placeholder="多个关键词用英文逗号分隔"
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
                <p class="text-xs text-slate-500 mt-2">
                  一般不超过100个字符，用于告诉搜索引擎网页的核心内容。
                </p>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  描述 (Description)
                </label>
              </div>
              <div class="flex-1">
                <textarea
                  v-model="seoForm.description"
                  rows="4"
                  placeholder="网页的简要描述..."
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                ></textarea>
                <p class="text-xs text-slate-500 mt-2">
                  一般不超过200个字符，用于在搜索引擎结果中展示网页的摘要。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Upload Settings -->
        <div v-else-if="activeTab === 'upload'">
          <h3
            class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6"
          >
            <div class="w-1 h-4 bg-primary-500 rounded-full"></div>
            文件上传设置
          </h3>

          <div class="space-y-6">
            <div class="flex items-center gap-6">
              <div class="space-y-1 w-24">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  存储方式
                </label>
              </div>
              <div class="flex-1 flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div
                    class="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center"
                    :class="
                      uploadForm.storageType === 'local'
                        ? 'border-primary-500'
                        : 'border-gray-300 dark:border-gray-600'
                    "
                  >
                    <div
                      class="w-2 h-2 rounded-full bg-primary-500"
                      v-show="uploadForm.storageType === 'local'"
                    ></div>
                  </div>
                  <input
                    type="radio"
                    v-model="uploadForm.storageType"
                    value="local"
                    class="hidden"
                  />
                  <span
                    class="text-sm font-medium transition-colors"
                    :class="
                      uploadForm.storageType === 'local'
                        ? 'text-slate-800 dark:text-slate-200'
                        : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                    "
                  >
                    本地存储
                  </span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer group">
                  <div
                    class="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center"
                    :class="
                      uploadForm.storageType === 'oss'
                        ? 'border-primary-500'
                        : 'border-gray-300 dark:border-gray-600'
                    "
                  >
                    <div
                      class="w-2 h-2 rounded-full bg-primary-500"
                      v-show="uploadForm.storageType === 'oss'"
                    ></div>
                  </div>
                  <input type="radio" v-model="uploadForm.storageType" value="oss" class="hidden" />
                  <span
                    class="text-sm font-medium transition-colors"
                    :class="
                      uploadForm.storageType === 'oss'
                        ? 'text-slate-800 dark:text-slate-200'
                        : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                    "
                  >
                    阿里云 OSS
                  </span>
                </label>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  文件大小限制
                </label>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 max-w-md">
                  <input
                    type="number"
                    v-model="uploadForm.maxSize"
                    min="1"
                    class="w-32 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                  />
                  <span class="text-sm text-slate-600 dark:text-slate-400">MB</span>
                </div>
                <p class="text-xs text-slate-500 mt-2">设置单个文件的最大上传限制。</p>
              </div>
            </div>

            <hr class="border-gray-200 dark:border-gray-700/50" />

            <div class="flex items-start gap-6">
              <div class="space-y-1 w-24 pt-2">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  允许的文件类型
                </label>
              </div>
              <div class="flex-1">
                <input
                  type="text"
                  v-model="uploadForm.allowedTypes"
                  placeholder="如：jpg,png,gif,zip,pdf"
                  class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                />
                <p class="text-xs text-slate-500 mt-2">多个后缀名用英文逗号分隔。</p>
              </div>
            </div>

            <template v-if="uploadForm.storageType === 'oss'">
              <hr class="border-gray-200 dark:border-gray-700/50" />

              <div class="flex items-start gap-6">
                <div class="space-y-1 w-24 pt-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    OSS 配置
                  </label>
                </div>
                <div class="flex-1 space-y-4 max-w-md">
                  <div>
                    <input
                      type="text"
                      v-model="uploadForm.ossBucket"
                      placeholder="Bucket Name"
                      class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      v-model="uploadForm.ossRegion"
                      placeholder="Endpoint / Region"
                      class="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                    />
                  </div>
                  <div class="flex gap-4">
                    <input
                      type="password"
                      v-model="uploadForm.ossAccessKey"
                      placeholder="AccessKey ID"
                      class="w-1/2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                    />
                    <input
                      type="password"
                      v-model="uploadForm.ossSecretKey"
                      placeholder="AccessKey Secret"
                      class="w-1/2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                    />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Notice Settings -->
        <div v-else-if="activeTab === 'notice'">
          <h3
            class="text-lg font-bold flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-6"
          >
            <div class="w-1 h-4 bg-primary-500 rounded-full"></div>
            通知公告设置
          </h3>

          <div class="space-y-6">
            <div class="flex items-center gap-6">
              <div class="space-y-1 w-24">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  系统公告开关
                </label>
              </div>
              <div class="flex-1">
                <div
                  class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer"
                  :class="noticeForm.enabled ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'"
                  @click="noticeForm.enabled = !noticeForm.enabled"
                >
                  <span
                    class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                    :class="noticeForm.enabled ? 'translate-x-6' : 'translate-x-1'"
                  ></span>
                </div>
                <p class="text-xs text-slate-500 mt-2">开启后，系统顶部将显示公告内容。</p>
              </div>
            </div>

            <template v-if="noticeForm.enabled">
              <hr class="border-gray-200 dark:border-gray-700/50" />

              <div class="flex items-start gap-6">
                <div class="space-y-1 w-24 pt-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    公告内容
                  </label>
                </div>
                <div class="flex-1">
                  <textarea
                    v-model="noticeForm.content"
                    rows="3"
                    placeholder="请输入公告内容..."
                    class="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A1120] focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all dark:text-slate-200"
                  ></textarea>
                </div>
              </div>

              <hr class="border-gray-200 dark:border-gray-700/50" />

              <div class="flex items-start gap-6">
                <div class="space-y-1 w-24 pt-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    展示样式
                  </label>
                </div>
                <div class="flex-1 flex gap-4">
                  <label class="flex items-center gap-2 cursor-pointer group">
                    <div
                      class="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center"
                      :class="
                        noticeForm.type === 'info'
                          ? 'border-primary-500'
                          : 'border-gray-300 dark:border-gray-600'
                      "
                    >
                      <div
                        class="w-2 h-2 rounded-full bg-primary-500"
                        v-show="noticeForm.type === 'info'"
                      ></div>
                    </div>
                    <input type="radio" v-model="noticeForm.type" value="info" class="hidden" />
                    <span
                      class="text-sm font-medium transition-colors"
                      :class="
                        noticeForm.type === 'info'
                          ? 'text-slate-800 dark:text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                      "
                    >
                      普通信息 (蓝)
                    </span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer group">
                    <div
                      class="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center"
                      :class="
                        noticeForm.type === 'warning'
                          ? 'border-primary-500'
                          : 'border-gray-300 dark:border-gray-600'
                      "
                    >
                      <div
                        class="w-2 h-2 rounded-full bg-primary-500"
                        v-show="noticeForm.type === 'warning'"
                      ></div>
                    </div>
                    <input type="radio" v-model="noticeForm.type" value="warning" class="hidden" />
                    <span
                      class="text-sm font-medium transition-colors"
                      :class="
                        noticeForm.type === 'warning'
                          ? 'text-slate-800 dark:text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                      "
                    >
                      警告预警 (黄)
                    </span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer group">
                    <div
                      class="w-4 h-4 rounded-full border-2 transition-colors flex items-center justify-center"
                      :class="
                        noticeForm.type === 'error'
                          ? 'border-primary-500'
                          : 'border-gray-300 dark:border-gray-600'
                      "
                    >
                      <div
                        class="w-2 h-2 rounded-full bg-primary-500"
                        v-show="noticeForm.type === 'error'"
                      ></div>
                    </div>
                    <input type="radio" v-model="noticeForm.type" value="error" class="hidden" />
                    <span
                      class="text-sm font-medium transition-colors"
                      :class="
                        noticeForm.type === 'error'
                          ? 'text-slate-800 dark:text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300'
                      "
                    >
                      重要通知 (红)
                    </span>
                  </label>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeTab = ref('base')

// SEO 配置表单
const seoForm = ref({
  title: '',
  keywords: '',
  description: ''
})

// 文件上传配置表单
const uploadForm = ref({
  storageType: 'local',
  maxSize: 10,
  allowedTypes: 'jpg,png,gif,jpeg,pdf,zip,rar,doc,docx,xls,xlsx',
  ossBucket: '',
  ossRegion: '',
  ossAccessKey: '',
  ossSecretKey: ''
})

// 通知公告配置表单
const noticeForm = ref({
  enabled: false,
  content: '',
  type: 'info'
})

const themeColors = [
  { name: '默认橘', value: '#f97316', bgClass: 'bg-orange-500' },
  { name: '科技蓝', value: '#3b82f6', bgClass: 'bg-blue-500' },
  { name: '护眼绿', value: '#10b981', bgClass: 'bg-green-500' },
  { name: '浪漫紫', value: '#8b5cf6', bgClass: 'bg-purple-500' },
  { name: '玫瑰红', value: '#f43f5e', bgClass: 'bg-rose-500' }
]

const currentColor = ref('#f97316')

onMounted(() => {
  currentColor.value = localStorage.getItem('bag.themeColor') || '#f97316'
})

const handleColorChange = (color: string) => {
  currentColor.value = color
  window.dispatchEvent(new CustomEvent('bag-theme-color-change', { detail: color }))
}
</script>
