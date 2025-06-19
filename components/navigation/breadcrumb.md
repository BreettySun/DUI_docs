# Breadcrumb 面包屑 <Badge type="warning" text="beta" />

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 代码演示

### 基本用法

<d-breadcrumb>
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>

```HTML
<d-breadcrumb>
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>
```

### 自定义分隔符

<d-breadcrumb separator="#">
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>

```HTML
<d-breadcrumb separator=">>">
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>
```

<d-breadcrumb separator=">>">
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>

```HTML
<d-breadcrumb separator="#">
  <d-breadcrumb-item position="1" href="/">
    Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>
```

### 带有图标的

<d-breadcrumb>
  <d-breadcrumb-item position="1" href="/">
    <d-icon name="home" size="20px" color="#1890ff"></d-icon>
    &nbsp;Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>

```HTML
<d-breadcrumb>
  <d-breadcrumb-item position="1" href="/">
    <d-icon name="home" size="20px" color="#1890ff"></d-icon>
    &nbsp;Home
  </d-breadcrumb-item>
    <d-breadcrumb-item position="2" href="/application-center">
    Application Center
  </d-breadcrumb-item>
  <d-breadcrumb-item position="3" href="/application-list">
    Application List
  </d-breadcrumb-item>
  <d-breadcrumb-item position="4">An Application</d-breadcrumb-item>
</d-breadcrumb>
```
