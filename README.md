# xizhi前端通用模板

## 技术栈

- React TypeScript
- 状态库 Zustand
- fetch 自封装
- css方案
  - tailwindcss
- eslint:
  - **基本方案** https://github.com/antfu/eslint-config
  - **tailwindcss-eslint-plugin** （此插件无法flat类名中的空格
  - **simple-import-sort** 原import/sort方案在匿名引入css的时候会有问题，不够智能，且分类是按他固定规则来的。处理types的时候也会有问题
  - 有造成bug风险的规则（如非空声明）、console.log、未使用变量等规则请勿关闭，不影响代码提交可同意改为 `warn`级别，保持醒目，方便删除和debug。
- husky、commit-lint、lint-stage。**为方便后续溯源，提交时请写明修改内容，可多行表达。**
- clsx：代替以前的classnames用于css类名的合并和高阶操作
- dayjs：时间操作。dayjs插件齐全，应该都能满足各方面需求，勤翻阅文档 https://day.js.org/docs/zh-CN/plugin/plugin
- uuid：支持生成v1到v4的所有uuid。

## TODO

- vitest: 后续配置
- useSWR: 暂时还没搞明白，搞明白了再接入

## 组件库

因为tw的关系，暂未引入组件库。以下为一些推荐的组件库

- headlessui: 使用tw可用，轻量、灵活。
- - semi-design （基于函数组件）
  - ant-design
  - arco-design
- 以上三种均是design-system，修改样式教麻烦，但是交互全
- - mui

或者找一些单独封装的单组件依赖也可以，根据业务需求决定

## 一些注意事项

- git请商量后统一使用rebase or merge、勿交叉使用
- hooks、utils、components等文件夹内新增内容时，请尽量在 \*\*/index.ts下将内容export。优化import
- 建议统一使用pnpm包管理器。统一大版本
  - 请勿混用v9和小于v9的版本。这两种情况下的lockfile并不相同
  - 如统一采用pnpm，请勿删除lockfile
  - packagejson实则可以统一packageManager，然我的corepack网络出问题了故暂时不做配置
- 推荐使用 [corepack](https://nodejs.cn/api/corepack.html)
- 推荐使用 [fnm](https://github.com/Schniz/fnm)

## 脱离tailwindcss

### remove tailwind

```shell
  pnpm remove tailwindcss eslint-plugin-tailwindcss
```

### 修改postcss

删除postcss中的tailwind部分。

### 修改global.css以及其他css文件

移除global.css以及其他任意css文件中的tailwind语法部分

### 引入新的css方案

推荐几种方案

- 原子化
  - [unocss](https://unocss.dev/)
- css-in-js
  - 编译时
    - [panda-css](https://panda-css.com/)
    - [styleX](https://stylexjs.com/)
  - 运行时
    - [styled-components](https://styled-components.com/)
    - [emotion-css](https://emotion.sh/docs/introduction)
- sass

## React Router

[react-router](https://reactrouter.com/en/main/start/overview)采用v6.x的DataRouter，有丰富的loader、action方案可以配合suspend等react方案进行页面优化，请自行探索。(翻文档总是没错的，感觉router6都快玩出花了)

## ahooks

伟大无需多言 \
但是有个小问题，`useRequest`会生成多个请求实例，有时候会带来一些意料之外的bug。

## 推荐引入依赖

- lodash-es 伟大无需多言
- iconify 前端进步十年，适合有图标库或者完全不要求图标这两种极端情况。
- 若后端采用swagger下的openapi.json，则可以引入`swagger-typescript-api` 。只需修改几个模板即可拥有自动化接口类型和接口实现获取
- immer 伟大无需多言， 更可配合zustand进行开发提效
  - 注：如需要对map等数据接口进行immer，请查阅文档后进行
- ...待补充
