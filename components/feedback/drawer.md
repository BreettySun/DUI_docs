# Drawer 抽屉

从屏幕边缘滑出的抽屉面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。

## 代码演示

### 基本用法

<div style="height: 10px"></div>
<d-button id="open-drawer" type="primary">打开抽屉</d-button>

<d-drawer header="抽屉标题" id="drawer" show-header class="drawer-content">
  <p>这是抽屉的内容。</p>
  <p>您可以在这里放置任何内容。</p>
</d-drawer>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const openDrawer = document.querySelector("#open-drawer")
  const drawer = document.querySelector("#drawer")
  
  if (openDrawer && drawer) {
    openDrawer.onclick = () => {
      drawer.open()
    }
  }
})
</script>

```HTML
<d-button id="open-drawer" type="primary">打开抽屉</d-button>

<d-drawer header="抽屉标题" id="drawer" show-header class="drawer-content">
  <p>这是抽屉的内容。</p>
  <p>您可以在这里放置任何内容。</p>
</d-drawer>

<script>
const openDrawer = document.querySelector("#open-drawer");
const drawer = document.querySelector("#drawer");

if (openDrawer && drawer) {
	openDrawer.onclick = () => {
		drawer.open();
	};
}
</script>
```
