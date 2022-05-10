# Vtech-admin
    基于vue3,ts,vite的企业级管理系统架子

# 搭建流程
    此项目采用pnpm搭建的，node版本>=14。下方所用shell都是针对shell
    查看 create-vite 以获取每个模板的更多细节：vanilla，vanilla-ts，vue，vue-ts，react，react-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts。

**安装项目必须依赖**
```shell
pnpm i target-package --save
```

**安装项目所需依赖插件库**
```shell
pnpm i target-plugin --save-dev
```
**初始化项目对应的模版脚本**
```shell
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app -- --template vue
 ```

#  scss,less,css 规范


# 提交规范

<ul>
    <ul>
      <li>feat 增加新功能</li>
      <li>fix 修复问题/BUG</li>
      <li>style 代码风格相关无影响运行结果的</li>
      <li>perf 优化/性能提升</li>
      <li>refactor 重构</li>
      <li>revert 撤销修改</li>
      <li>test 测试相关</li>
      <li>docs 文档/注释</li>
      <li>chore 依赖更新/脚手架配置修改等</li>
      <li>workflow 工作流改进</li>
      <li>ci 持续集成</li>
      <li>mod 不确定分类的修改</li>
      <li>wip 开发中</li>
      <li>types 类型修改</li>
    </ul>
</ul>

#### 示例
 ```shell
    git commit -m 'feat(home): add home page'
 ```











