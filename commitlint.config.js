const commitTypes = [
  'feat', // 增加新功能
  'fix', // 修复问题/BUG
  'style', // 代码风格相关无影响运行结果的
  'perf', // 优化/性能提升
  'refactor', // 重构
  'revert', // 撤销修改
  'test', // 测试相关
  'docs', // 文档/注释
  'chore', // 依赖更新/脚手架配置修改等
  'ci', // 持续集成
  'update', // 不确定分类的更新
  'wip', // 开发中
  'types', // 类型修改
  'ui', // ui样式修改
]
// 规则参考格式 feat: 功能说明
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
    'type-enum': [2, 'always', commitTypes],
  },
}
