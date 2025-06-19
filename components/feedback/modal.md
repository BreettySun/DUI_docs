# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

### 基本用法

<div style="height: 10px"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
	const openModal = document.querySelector("#open-modal");
	openModal.onclick = () => {
		const modal = document.querySelector("#modal");
		modal.open();
	};

	const openModalCustom = document.querySelector("#open-modal-custom");
	openModalCustom.onclick = () => {
		const modal = document.querySelector("#modal-custom");
		modal.open();
	};

	const openModalNoFooter = document.querySelector("#open-modal-no-footer");
	openModalNoFooter.onclick = () => {
		const modal = document.querySelector("#modal-no-footer");
		modal.open();
	};
});

</script>

<d-button id="open-modal">打开对话框</d-button>

<d-modal id="modal" header="对话框标题" show-header show-footer>
  <p>这是对话框的内容。</p>
  <p>您可以在这里放置任何内容。</p>
</d-modal>

```HTML
<d-button id="open-modal">打开对话框</d-button>

<d-modal id="modal" header="对话框标题" show-header show-footer>
  <p>这是对话框的内容。</p>
  <p>您可以在这里放置任何内容。</p>
</d-modal>

<script>
const openModal = document.querySelector("#open-modal");
openModal.onclick = () => {
	const modal = document.querySelector("#modal");
	modal.open();
};
</script>
```

### 自定义按钮文本

<div style="height: 10px"></div>

<d-button id="open-modal-custom">打开自定义对话框</d-button>

<d-modal id="modal-custom" header="自定义对话框" confirm-text="好的" cancel-text="算了" show-header show-footer>
  <p>这是一个自定义按钮文本的对话框。</p>
</d-modal>

```HTML
<d-modal header="自定义对话框" confirm-text="好的" cancel-text="算了" show-header show-footer>
  <p>这是一个自定义按钮文本的对话框。</p>
</d-modal>
```

### 无底部按钮

<div style="height: 10px"></div>

<d-button id="open-modal-no-footer">打开无底部按钮对话框</d-button>

<d-modal id="modal-no-footer" header="无底部按钮对话框" show-header show-footer="false">
  <p>这是一个没有底部按钮的对话框。</p>
</d-modal>

```HTML
<d-modal header="无底部按钮对话框" show-header show-footer="false">
  <p>这是一个没有底部按钮的对话框。</p>
</d-modal>
```
