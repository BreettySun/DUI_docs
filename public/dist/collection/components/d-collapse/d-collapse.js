import { Host, h, } from "@stencil/core";
export class DCollapse {
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
    static get is() { return "d-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-collapse.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-collapse.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "string",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "string | CollapseItem[]",
                    "resolved": "CollapseItem[] | string",
                    "references": {
                        "CollapseItem": {
                            "location": "local",
                            "path": "/Users/scream/DUI/DUI/src/components/d-collapse/d-collapse.tsx",
                            "id": "src/components/d-collapse/d-collapse.tsx::CollapseItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "[]"
            },
            "accordion": {
                "type": "boolean",
                "attribute": "accordion",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "defaultActiveKeys": {
                "type": "string",
                "attribute": "default-active-keys",
                "mutable": false,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "activeKeys": {},
            "parsedItems": {}
        };
    }
    static get events() {
        return [{
                "method": "change",
                "name": "change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "items",
                "methodName": "parseProps"
            }, {
                "propName": "defaultActiveKeys",
                "methodName": "parseProps"
            }];
    }
}
//# sourceMappingURL=d-collapse.js.map
