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
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<div class="custom-container">
  <h2>欢迎使用 DUI</h2>
  <p>这是一个自定义的 HTML 内容区域</p>
  
  <div class="demo-box">
    <h3>示例代码</h3>
    <d-button>hello</d-button>
    <pre><code>
      &lt;dui-button&gt;按钮&lt;/dui-button&gt;
    </code></pre>
  </div>
</div>

<style>
.custom-container {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-radius: 8px;
}

.demo-box {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
}

pre {
  background: #2d2d2d;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
