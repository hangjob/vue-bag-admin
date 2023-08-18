module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": [
            "off",
            {
                ignores: ["index"], //需要忽略的组件名
            },
        ],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "off",
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        'no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }], // 如需设置关闭 off
        '@typescript-eslint/no-unused-vars': ['warn', { 'varsIgnorePattern': '^_' }],
        '@typescript-eslint/no-explicit-any':['off']
    }
}
