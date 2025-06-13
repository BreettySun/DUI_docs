# BackTop 回到顶部 <Badge type="warning" text="beta" />

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 代码演示

### 基本用法

<d-backtop>Top</d-backtop>

```HTML
<d-backtop>Top</d-backtop>
```

### 自定义图标 | 自定义位置

<d-backtop right="40px" bottom="100px">
  <d-icon name="swipe-up" color="#909399" />
</d-backtop>

```HTML
<d-backtop right="40px" bottom="100px">
  <d-icon name="arrow-up" color="#909399" />
</d-backtop>
```

### 监听滚动事件

<d-backtop target="#scroll-container" visibility-height="200" bottom="180px">Back</d-backtop>

```HTML
<d-backtop target="#scroll-container" visibility-height="200" bottom="180px">Back</d-backtop>
```

### API

| 参数              | 说明                             | 类型   | 默认值 |
| ----------------- | -------------------------------- | ------ | ------ |
| target            | 触发滚动的对象                   | string | -      |
| visibility-height | 滚动高度达到此参数值才出现       | number | 400    |
| right             | 控制其显示位置，距离页面右边距   | string | 40px   |
| bottom            | 控制其显示位置，距离页面底部距离 | string | 40px   |
