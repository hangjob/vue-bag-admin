<template>
  <div
    class="min-h-screen flex items-center justify-center p-6 bg-orange-50/50 dark:bg-[#050B14] relative overflow-hidden font-sans transition-colors duration-500"
  >
    <!-- Theme Toggle (Absolute top right) -->
    <div class="absolute top-6 right-6 z-50">
      <button
        @click="appConfigStore.toggleTheme()"
        class="w-10 h-10 rounded-full flex items-center justify-center bg-white/50 dark:bg-[#0A1120]/50 backdrop-blur-md border border-orange-100 dark:border-gray-800 text-orange-500 dark:text-orange-400 hover:bg-white dark:hover:bg-[#0A1120] transition-all shadow-sm"
      >
        <svg
          v-if="appConfigStore.theme === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>

    <!-- Warm abstract background -->
    <div
      class="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-orange-300/40 to-rose-300/40 dark:from-orange-500/20 dark:to-rose-500/20 blur-[100px] pointer-events-none transition-colors duration-500"
    ></div>
    <div
      class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-amber-200/40 to-orange-400/30 dark:from-amber-500/10 dark:to-orange-500/20 blur-[120px] pointer-events-none transition-colors duration-500"
    ></div>

    <div class="w-full max-w-md relative z-10">
      <div
        class="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-[#0A1120]/80 backdrop-blur-xl border border-white dark:border-gray-800 p-8 shadow-[0_8px_30px_rgba(249,115,22,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group transition-all duration-500"
      >
        <div class="flex flex-col items-center justify-center mb-8 gap-4">
          <div
            class="relative flex items-center justify-center h-16 w-16 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 group-hover:-translate-y-1 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" class="h-8 w-8 text-white" fill="currentColor">
              <path
                d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4zm-6-2h4v2h-4V4zm10 14H4V8h16v10z"
              />
              <path
                d="M9 10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"
              />
            </svg>
          </div>
          <div class="text-center">
            <h2
              class="text-2xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight transition-all duration-300"
            >
              {{
                activeView === 'login'
                  ? 'Vue Bag Admin 管理系统'
                  : activeView === 'register'
                    ? '注册新账号'
                    : '重置密码'
              }}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-all duration-300">
              {{
                activeView === 'login'
                  ? '欢迎回来，请登录您的商家账号'
                  : activeView === 'register'
                    ? '填写信息以创建您的账号'
                    : '验证身份以重置您的登录密码'
              }}
            </p>
          </div>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="activeView" class="w-full">
            <!-- 登录表单 -->
            <form v-if="activeView === 'login'" class="space-y-5" @submit.prevent="onSubmit">
              <!-- 演示账号提示 -->
              <div
                class="p-3 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 flex flex-col gap-1 transition-colors"
              >
                <div
                  class="flex items-center gap-2 text-orange-600 dark:text-orange-400 text-sm font-bold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  演示环境测试账号
                </div>
                <div class="text-xs text-orange-600/80 dark:text-orange-400/80 pl-6 flex gap-4">
                  <span>
                    账号：
                    <strong class="select-all">admin</strong>
                  </span>
                  <span>
                    密码：
                    <strong class="select-all">123456</strong>
                  </span>
                </div>
              </div>

              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  商家账号
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="username"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请输入您的账号"
                    autocomplete="username"
                  />
                </div>
              </div>

              <div class="relative">
                <div class="flex justify-between items-center mb-1.5 ml-1 mr-1">
                  <label class="block text-sm font-bold text-slate-700 dark:text-slate-300">
                    登录密码
                  </label>
                  <a
                    href="#"
                    @click.prevent="activeView = 'forgot'"
                    class="text-xs font-semibold text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    忘记密码？
                  </a>
                </div>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="password"
                    type="password"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请输入您的密码"
                    autocomplete="current-password"
                  />
                </div>
              </div>

              <button
                class="relative w-full mt-8 overflow-hidden rounded-xl group disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5"
                type="submit"
                :disabled="loading"
              >
                <div
                  class="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div
                  class="relative flex items-center justify-center px-4 py-3.5 bg-transparent text-white font-bold text-base"
                >
                  <span v-if="loading" class="flex items-center gap-2">
                    <svg
                      class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    正在登录...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    立即登录
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              <div class="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                还没有账号？
                <a
                  href="#"
                  @click.prevent="activeView = 'register'"
                  class="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition-colors"
                >
                  立即注册
                </a>
              </div>
            </form>

            <!-- 注册表单 -->
            <form
              v-else-if="activeView === 'register'"
              class="space-y-5"
              @submit.prevent="onRegister"
            >
              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  设置账号
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="regUsername"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请输入您要注册的账号"
                  />
                </div>
              </div>

              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  设置密码
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="regPassword"
                    type="password"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请设置您的密码"
                  />
                </div>
              </div>

              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  确认密码
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="regConfirmPassword"
                    type="password"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请再次输入您的密码"
                  />
                </div>
              </div>

              <button
                class="relative w-full mt-8 overflow-hidden rounded-xl group disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5"
                type="submit"
                :disabled="loading"
              >
                <div
                  class="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div
                  class="relative flex items-center justify-center px-4 py-3.5 bg-transparent text-white font-bold text-base"
                >
                  <span v-if="loading" class="flex items-center gap-2">
                    <svg
                      class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    正在注册...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    立即注册
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </span>
                </div>
              </button>

              <div class="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                已有账号？
                <a
                  href="#"
                  @click.prevent="activeView = 'login'"
                  class="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition-colors"
                >
                  返回登录
                </a>
              </div>
            </form>

            <!-- 忘记密码表单 -->
            <form v-else-if="activeView === 'forgot'" class="space-y-5" @submit.prevent="onForgot">
              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  找回账号/邮箱
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="forgotAccount"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请输入绑定的账号或邮箱"
                  />
                </div>
              </div>

              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  验证码
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="forgotCode"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-24 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="输入6位验证码"
                  />
                  <button
                    type="button"
                    class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-semibold text-orange-500 bg-orange-50 hover:bg-orange-100 dark:text-orange-400 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 rounded-lg transition-colors"
                  >
                    获取验证码
                  </button>
                </div>
              </div>

              <div class="relative">
                <label
                  class="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5 ml-1"
                >
                  新密码
                </label>
                <div class="relative flex items-center group/input">
                  <div
                    class="absolute left-3 text-slate-400 dark:text-slate-500 group-focus-within/input:text-orange-500 dark:group-focus-within/input:text-orange-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="forgotNewPassword"
                    type="password"
                    class="w-full bg-slate-50 dark:bg-[#050B14] border border-slate-200 dark:border-gray-800 rounded-xl pl-10 pr-4 py-3 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500/50 focus:ring-4 focus:ring-orange-500/10 dark:focus:ring-orange-500/5 transition-all duration-300"
                    placeholder="请设置您的新密码"
                  />
                </div>
              </div>

              <button
                class="relative w-full mt-8 overflow-hidden rounded-xl group disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5"
                type="submit"
                :disabled="loading"
              >
                <div
                  class="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
                <div
                  class="relative flex items-center justify-center px-4 py-3.5 bg-transparent text-white font-bold text-base"
                >
                  <span v-if="loading" class="flex items-center gap-2">
                    <svg
                      class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    正在重置...
                  </span>
                  <span v-else class="flex items-center gap-2">
                    确认重置
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </button>

              <div class="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                记起密码了？
                <a
                  href="#"
                  @click.prevent="activeView = 'login'"
                  class="text-orange-500 hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition-colors"
                >
                  返回登录
                </a>
              </div>
            </form>
          </div>
        </transition>

        <!-- 错误提示 -->
        <div
          v-if="error"
          class="mt-6 p-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 flex items-start gap-3 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-sm text-rose-600 dark:text-rose-400 font-medium">{{ error }}</p>
        </div>

        <!-- 成功提示 -->
        <div
          v-if="successMsg"
          class="mt-6 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-start gap-3 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{{ successMsg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAppConfigStore, useUserStore } from 'vue-bag-admin'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const appConfigStore = useAppConfigStore()

// 视图状态
const activeView = ref<'login' | 'register' | 'forgot'>('login')

// 登录表单数据
const username = ref('admin')
const password = ref('123456')

// 注册表单数据
const regUsername = ref('')
const regPassword = ref('')
const regConfirmPassword = ref('')

// 忘记密码表单数据
const forgotAccount = ref('')
const forgotCode = ref('')
const forgotNewPassword = ref('')

const loading = ref(false)
const error = ref('')
const successMsg = ref('')

// 切换视图时清空提示信息
watch(activeView, () => {
  error.value = ''
  successMsg.value = ''
})

// 初始化主题
onMounted(() => {
  appConfigStore.applyAppearance()
})

// 登录提交
const onSubmit = async () => {
  if (!username.value || !password.value) {
    error.value = '请输入账号和密码'
    return
  }

  loading.value = true
  error.value = ''
  successMsg.value = ''

  try {
    await userStore.login({
      username: username.value,
      password: password.value
    })

    // 登录成功，重定向
    const redirect = route.query.redirect as string
    router.push(redirect || '/')
  } catch (err: any) {
    error.value = err.message || '登录失败，请重试'
  } finally {
    loading.value = false
  }
}

// 注册提交（模拟）
const onRegister = async () => {
  if (!regUsername.value || !regPassword.value || !regConfirmPassword.value) {
    error.value = '请填写完整注册信息'
    return
  }
  if (regPassword.value !== regConfirmPassword.value) {
    error.value = '两次输入的密码不一致'
    return
  }

  loading.value = true
  error.value = ''
  successMsg.value = ''

  try {
    // 模拟API调用延迟
    await new Promise((resolve) => setTimeout(resolve, 800))
    successMsg.value = '注册成功，请登录您的新账号'
    username.value = regUsername.value
    password.value = ''
    activeView.value = 'login'

    // 清空注册表单
    regUsername.value = ''
    regPassword.value = ''
    regConfirmPassword.value = ''
  } catch (err: any) {
    error.value = '注册失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

// 重置密码提交（模拟）
const onForgot = async () => {
  if (!forgotAccount.value || !forgotCode.value || !forgotNewPassword.value) {
    error.value = '请填写完整重置信息'
    return
  }

  loading.value = true
  error.value = ''
  successMsg.value = ''

  try {
    // 模拟API调用延迟
    await new Promise((resolve) => setTimeout(resolve, 800))
    successMsg.value = '密码重置成功，请使用新密码登录'
    username.value = forgotAccount.value
    password.value = ''
    activeView.value = 'login'

    // 清空重置表单
    forgotAccount.value = ''
    forgotCode.value = ''
    forgotNewPassword.value = ''
  } catch (err: any) {
    error.value = '重置失败，请验证信息是否正确'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
