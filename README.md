# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# 校园活动报名 H5

基于 Vue 3 开发的移动端校园活动报名系统，主要用于活动浏览、活动报名、报名记录管理等场景。

项目使用 Vue Router 实现页面路由，Pinia 管理报名状态，并结合 localStorage 实现数据持久化，UI 基于 Vant 组件库完成。

## 项目功能

### 活动列表
- 展示活动名称、时间、地点、报名人数及总名额
- 支持活动名称搜索
- 支持“全部 / 报名中 / 已满员”状态筛选
- 根据报名人数动态显示活动状态

### 活动详情
- 展示活动时间、地点、总名额、已报名人数、剩余名额
- 名额已满时自动禁用报名按钮
- 支持跳转至活动报名页面

### 活动报名
- 使用 Vant Form / Field 实现移动端报名表单
- 支持姓名、学号、手机号录入
- 校验必填项和手机号格式
- 防止同一学号重复报名同一活动
- 活动满员后阻止继续提交报名

### 我的报名
- 展示用户报名记录
- 手机号脱敏显示
- 支持取消报名
- 取消报名前进行二次确认
- 无报名记录时显示空状态

### 数据持久化
- 使用 Pinia 管理报名数据
- 使用 localStorage 保存报名记录
- 页面刷新后报名数据仍然保留

## 技术栈

- Vue 3
- JavaScript
- Vite
- Vue Router
- Pinia
- Vant
- localStorage

## 项目结构

```text
src
├── data
│   └── activities.js
├── router
│   └── index.js
├── stores
│   └── registration.js
├── views
│   ├── ActivityList.vue
│   ├── ActivityDetail.vue
│   ├── Apply.vue
│   ├── MyApply.vue
│   └── Success.vue
├── App.vue
├── main.js
└── style.css
