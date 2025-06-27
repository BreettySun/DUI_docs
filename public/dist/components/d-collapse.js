import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CKuW6hQ4.js';

const dCollapseCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n\t\t\"Helvetica Neue\", Arial, sans-serif}.d-collapse{border:1px solid #e4e7ed;border-radius:4px;background-color:#fff}.d-collapse-item{border-bottom:1px solid #e4e7ed;transition:all 0.3s ease;animation:fadeIn 0.3s ease}.d-collapse-item:last-child{border-bottom:none}.d-collapse-item.disabled{opacity:0.6;cursor:not-allowed}.d-collapse-item.disabled .d-collapse-header{cursor:not-allowed}.d-collapse-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background-color:#fafafa;cursor:pointer;transition:background-color 0.3s ease;user-select:none}.d-collapse-header:hover{background-color:#f5f5f5}.d-collapse-title{font-size:14px;font-weight:500;color:#303133;flex:1}.d-collapse-arrow{display:flex;align-items:center;justify-content:center;width:16px;height:16px;color:#909399;transition:transform 0.3s ease}.d-collapse-item.active .d-collapse-arrow{transform:rotate(180deg);color:#1890ff}.d-collapse-content{max-height:0;overflow:hidden;transition:max-height 0.3s ease;background-color:#fff}.d-collapse-item.active .d-collapse-content{max-height:500px}.d-collapse-content-inner{padding:16px;color:#606266;font-size:14px;line-height:1.6}@keyframes fadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 768px){.d-collapse-header{padding:10px 12px}.d-collapse-content-inner{padding:12px}.d-collapse-title{font-size:13px}}";

const DCollapse$1 = /*@__PURE__*/ proxyCustomElement(class DCollapse extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.change = createEvent(this, "change");
    }
    items = [];
    accordion = false; // 手风琴模式，同时只能展开一个
    defaultActiveKeys = []; // 默认展开的项
    activeKeys = [];
    parsedItems = [];
    change;
    componentWillLoad() {
        this.parseProps();
    }
    parseProps() {
        // 解析items属性
        if (typeof this.items === "string") {
            try {
                this.parsedItems = JSON.parse(this.items);
            }
            catch (e) {
                console.error("Failed to parse items:", e);
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = this.items || [];
        }
        // 解析defaultActiveKeys属性
        if (typeof this.defaultActiveKeys === "string") {
            try {
                this.activeKeys = JSON.parse(this.defaultActiveKeys);
            }
            catch (e) {
                console.error("Failed to parse defaultActiveKeys:", e);
                this.activeKeys = [];
            }
        }
        else {
            this.activeKeys = [...(this.defaultActiveKeys || [])];
        }
    }
    toggleItem = (itemId) => {
        if (this.parsedItems.find((item) => item.id === itemId)?.disabled) {
            return;
        }
        const newActiveKeys = [...this.activeKeys];
        const index = newActiveKeys.indexOf(itemId);
        if (index > -1) {
            // 收起项
            newActiveKeys.splice(index, 1);
        }
        else {
            // 展开项
            if (this.accordion) {
                // 手风琴模式，先清空所有激活项
                newActiveKeys.length = 0;
            }
            newActiveKeys.push(itemId);
        }
        this.activeKeys = newActiveKeys;
        this.change.emit(newActiveKeys);
    };
    isItemActive = (itemId) => {
        return this.activeKeys.includes(itemId);
    };
    render() {
        return (h(Host, { key: '46d8c8c0f87e4e9db0c4ef960d48c048a8c6b7c8' }, h("div", { key: 'b8f0f0adea687c8c5e165e7ca64df488a02db59e', class: "d-collapse" }, this.parsedItems.map((item) => (h("div", { class: `d-collapse-item ${this.isItemActive(item.id) ? "active" : ""} ${item.disabled ? "disabled" : ""}` }, h("div", { class: "d-collapse-header", onClick: () => this.toggleItem(item.id) }, h("span", { class: "d-collapse-title" }, item.title), h("span", { class: "d-collapse-arrow" }, h("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor" }, h("path", { d: "M8 11L3 6h10l-5 5z" })))), h("div", { class: "d-collapse-content" }, h("div", { class: "d-collapse-content-inner" }, item.content)))))), h("slot", { key: 'da01366d6be5f7a084860fa30dbc4e513c2adbbf' })));
    }
    static get watchers() { return {
        "items": ["parseProps"],
        "defaultActiveKeys": ["parseProps"]
    }; }
    static get style() { return dCollapseCss; }
}, [1, "d-collapse", {
        "items": [1],
        "accordion": [4],
        "defaultActiveKeys": [1, "default-active-keys"],
        "activeKeys": [32],
        "parsedItems": [32]
    }, undefined, {
        "items": ["parseProps"],
        "defaultActiveKeys": ["parseProps"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-collapse"];
    components.forEach(tagName => { switch (tagName) {
        case "d-collapse":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DCollapse$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DCollapse = DCollapse$1;
const defineCustomElement = defineCustomElement$1;

export { DCollapse, defineCustomElement };
//# sourceMappingURL=d-collapse.js.map

//# sourceMappingURL=d-collapse.js.map