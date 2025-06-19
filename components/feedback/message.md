# Message 全局提示 <Badge type="warning" text="beta" />

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

## 代码演示

<d-message></d-message>

<div style="display: flex; gap: 8px;margin-top: 10px">
  <d-button type="primary" onclick="$message.info('信息', 1000, 'info')">Info</d-button>
  <d-button type="secondary" onclick="$message.success('成功', 2000, 'check')">Success</d-button>
  <d-button type="danger" onclick="$message.warning('警告', 3000, 'warning')">Warning</d-button>
  <d-button type="text" onclick="$message.error('错误', 4000, 'error')">Error</d-button>
</div>

```HTML
<d-message></d-message>

<script>
  (function () {
      let seed = 0;
      function toast(type, text, duration = 3000, icon) {
      const msg = { id: seed++, type, text, duration, icon };
      window.dispatchEvent(new CustomEvent('d-message', {
        detail: msg,
        bubbles: true,
        composed: true
      }));
    }
    window.$message = {
      success(text, duration, icon) { toast('success', text, duration, icon); },
      info(text, duration, icon) { toast('info', text, duration, icon); },
      warning(text, duration, icon) { toast('warning', text, duration, icon); },
      error(text, duration, icon) { toast('error', text, duration, icon); },
    };
  })();
</script>

<div style="display: flex; gap: 8px;margin-top: 10px">
  <d-button type="primary" onclick="$message.info('信息', 1000, 'info')">Info</d-button>
  <d-button type="secondary" onclick="$message.success('成功', 2000, 'check')">Success</d-button>
  <d-button type="danger" onclick="$message.warning('警告', 3000, 'warning')">Warning</d-button>
  <d-button type="text" onclick="$message.error('错误', 4000, 'error')">Error</d-button>
</div>
```
