module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // 缩进 4 空格
        "indent": [2, 4],

        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 1,

        // 禁用 debugger
        'no-debugger': 1,

        // 禁止不必要的布尔转换
        'no-extra-boolean-cast': 1,

        // 强制所有控制语句使用一致的括号风格
        'curly': 1,

        // 禁止使用多个空格c
        'no-multi-spaces': 1,

        // 要求在函数标识符和其调用之间有空格
        'func-call-spacing': 1,

        // 关闭 强制在函数括号内使用一致的换行
        'function-paren-newline': 0,

        // 强制隐式返回的箭头函数体的位置
        'implicit-arrow-linebreak': 1,

        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': 1,

        // 强制在关键字前后使用一致的空格
        'keyword-spacing': 1,

        // 要求调用无参构造函数时有圆括号
        'new-parens': 1,

        // 禁止出现多行空行
        'no-multiple-empty-lines': 1,

        // 不检查后面是否有分号
        'semi': 0,

        // 要求操作符周围有空格
        'space-infix-ops': 1,

        //数组中不允许出现空位置
        'no-sparse-arrays': 2,

        // 不允许有声明后未使用的变量或者参数
        'no-unused-vars': 'off',

        'import/no-unresolved': 'off',

        'import/no-extraneous-dependencies': 'off',

        'import/extensions': 'off',

        'global-require': 'off',

        'vue/script-setup-uses-vars': 'off',  // 如果使用 script-setup 可開啟

        'vue/component-definition-name-casing': 'off' // 驼峰命名
    },
}
