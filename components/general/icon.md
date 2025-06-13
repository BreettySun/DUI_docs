# Icon 图标 <Badge type="warning" text="beta" />

语义化的矢量图形。

## 图标列表

<style>
  .table {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border: 2px solid #999;
    border-collapse: collapse;
  }
  .table-item {
    height: 100px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .table-item:hover {
    background-color: #f5f5f5;
  }
  .table-item:nth-child(5n) {
    border-right: none;
  }
  .table-item:nth-last-child(-n+5) {
    border-bottom: none;
  }
</style>

<div class="table">
  <div class="table-item" onclick="copyIconCode('home')">
    <d-icon name="home"></d-icon>
    home
  </div>
  <div class="table-item" onclick="copyIconCode('settings')">
    <d-icon name="settings"></d-icon>
    settings
  </div>
  <div class="table-item" onclick="copyIconCode('person')">
    <d-icon name="person"></d-icon>
    person
  </div>
  <div class="table-item" onclick="copyIconCode('notifications')">
    <d-icon name="notifications"></d-icon>
    notifications
  </div>
  <div class="table-item" onclick="copyIconCode('favorite')">
    <d-icon name="favorite"></d-icon>
    favorite
  </div>
  <div class="table-item" onclick="copyIconCode('search')">
    <d-icon name="search"></d-icon>
    search
  </div>
  <div class="table-item" onclick="copyIconCode('menu')">
    <d-icon name="menu"></d-icon>
    menu
  </div>
  <div class="table-item" onclick="copyIconCode('close')">
    <d-icon name="close"></d-icon>
    close
  </div>
  <div class="table-item" onclick="copyIconCode('edit')">
    <d-icon name="edit"></d-icon>
    edit
  </div>
  <div class="table-item" onclick="copyIconCode('delete')">
    <d-icon name="delete"></d-icon>
    delete
  </div>
</div>

<script>
function copyIconCode(name) {
  const code = `<d-icon name="${name}"></d-icon>`;
  navigator.clipboard.writeText(code).then(() => {
    window.$message.success('复制成功');
  });
}
</script>
