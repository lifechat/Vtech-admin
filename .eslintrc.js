// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    //使用的场景
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // ts 转译
    ecmaVersion: 2020, // 审查javascript 语言规范是 es5 还是 es6版本
    sourceType: 'module',
    jsxPragma: 'React', // jsx采用react的语法
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
  ],
  rules: {
    // rules...
    '@typescript-eslint/no-var-requires': 'off', // ts模块中采用require引入模块规则
  },
})
