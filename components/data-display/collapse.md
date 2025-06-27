# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- ‘手风琴’ 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示

### 基本用法

<div style="height:10px"></div>
<d-collapse items='[
                  {
                    "id": "1",
                    "title": "面板 1",
                    "content": "这是第一个面板的内容，可以包含任何文本内容。"
                  },
                  {
                    "id": "2", 
                    "title": "面板 2",
                    "content": "这是第二个面板的内容，支持多行文本和HTML内容。"
                  }
                ]'>
</d-collapse>

```HTML
<d-collapse items='[
                  {
                    "id": "1",
                    "title": "面板 1",
                    "content": "这是第一个面板的内容，可以包含任何文本内容。"
                  },
                  {
                    "id": "2",
                    "title": "面板 2",
                    "content": "这是第二个面板的内容，支持多行文本和HTML内容。"
                  }
                ]'>
</d-collapse>
```

### 手风琴模式

<div style="height:10px"></div>
<d-collapse accordion="true" items='[
                  {
                    "id": "1",
                    "title": "手风琴面板 1", 
                    "content": "手风琴模式下只能展开一个面板，点击其他面板会自动收起当前展开的面板。"
                  },
                  {
                    "id": "2",
                    "title": "手风琴面板 2",
                    "content": "这样可以节省页面空间，提供更好的用户体验。"
                  },
                  {
                    "id": "3",
                    "title": "手风琴面板 3",
                    "content": "第三个面板的内容。"
                  }
                ]'>
</d-collapse>

```HTML
<d-collapse accordion="true" items='[
                  {
                    "id": "1",
                    "title": "手风琴面板 1",
                    "content": "手风琴模式下只能展开一个面板，点击其他面板会自动收起当前展开的面板。"
                  },
                  {
                    "id": "2",
                    "title": "手风琴面板 2",
                    "content": "这样可以节省页面空间，提供更好的用户体验。"
                  },
                  {
                    "id": "3",
                    "title": "手风琴面板 3",
                    "content": "第三个面板的内容。"
                  }
                ]'>
</d-collapse>
```

### 默认展开项

<div style="height:10px"></div>
<d-collapse default-active-keys='["1", "3"]' items='[
                  {
                    "id": "1",
                    "title": "默认展开的面板 1",
                    "content": "这个面板默认是展开的。"
                  },
                  {
                    "id": "2",
                    "title": "面板 2",
                    "content": "这个面板默认是收起的。"
                  },
                  {
                    "id": "3", 
                    "title": "默认展开的面板 3",
                    "content": "这个面板也是默认展开的。"
                  }
                ]'>
</d-collapse>

```HTML
<d-collapse default-active-keys='["1", "3"]' items='[
                  {
                    "id": "1",
                    "title": "默认展开的面板 1",
                    "content": "这个面板默认是展开的。"
                  },
                  {
                    "id": "2",
                    "title": "面板 2",
                    "content": "这个面板默认是收起的。"
                  },
                  {
                    "id": "3",
                    "title": "默认展开的面板 3",
                    "content": "这个面板也是默认展开的。"
                  }
                ]'>
</d-collapse>
```

### 禁用状态

<d-collapse items='[
                  {
                    "id": "1",
                    "title": "正常面板",
                    "content": "这个面板可以正常点击和展开。"
                  },
                  {
                    "id": "2",
                    "title": "禁用面板",
                    "content": "这个面板被禁用了，无法点击。",
                    "disabled": true
                  }
                ]'>
</d-collapse>

```HTML
<d-collapse items='[
                  {
                    "id": "1",
                    "title": "正常面板",
                    "content": "这个面板可以正常点击和展开。"
                  },
                  {
                    "id": "2",
                    "title": "禁用面板",
                    "content": "这个面板被禁用了，无法点击。",
                    "disabled": true
                  }
                ]'>
</d-collapse>
```
