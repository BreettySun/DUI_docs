---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "DUI"
  text: "快速搭建产品原型"
  tagline: 基于 Stencil 开发的 Web Component 组件库
  actions:
    - theme: brand
      text: 快速开始
      link: /quickstart
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 不限框架
    details: 在纯 HTML/JS、React、Angular、Vue 等任意前端框架中都能直接使用
  - title: 样式隔离
    details: 使用 Shadow DOM，任何全局样式都无法“穿透”进来影响组件，内部的样式也无法泄漏到外部文档
  - title: 按需加载
    details: 内置代码拆分和 Lazy-loading，首次包体积小，自动注入必要的 polyfills，兼容低版本浏览器
---
