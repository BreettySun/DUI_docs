import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CKuW6hQ4.js';

const dDrawerCss = ":host{position:fixed;left:0;top:0;z-index:8000;width:100vw;height:100vh;display:none;overflow:hidden;transition:all 0.3s}.ivy-mask{position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;background-color:var(--ivy-mask-color, rgba(55, 55, 55, 0.6))}.ivy-drawer{position:absolute;z-index:1;height:100%;background-color:#ffffff}.ivy-drawer-header{padding:12px 16px;border-bottom:1px solid var(--ivy-border-color, #dcdfe6);display:none}:host([show-header]) .ivy-drawer-header{display:block}.ivy-drawer-body{padding:16px}:host([show]){display:block}:host([show]) .ivy-drawer{animation-delay:0.05s;animation-duration:0.3s;animation-fill-mode:forwards}:host([placement=\"right\"]) .ivy-drawer{right:0;top:0;transform:translate3d(100%, 0, 0)}:host([placement=\"right\"][show]) .ivy-drawer{animation-name:slideInRight}:host([placement=\"left\"]) .ivy-drawer{left:0;top:0;transform:translate3d(-100%, 0, 0)}:host([placement=\"left\"][show]) .ivy-drawer{animation-name:slideInLeft}:host([placement=\"top\"]) .ivy-drawer{left:0;top:0;transform:translate3d(0, -100%, 0)}:host([placement=\"top\"][show]) .ivy-drawer{animation-name:slideInDown}:host([placement=\"bottom\"]) .ivy-drawer{left:0;bottom:0;transform:translate3d(0, 100%, 0)}:host([placement=\"bottom\"][show]) .ivy-drawer{animation-name:slideInUp}@keyframes slideInLeft{from{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInRight{from{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInDown{from{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}@keyframes slideInUp{from{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translate3d(0, 0, 0)}}";

const DDrawer$1 = /*@__PURE__*/ proxyCustomElement(class DDrawer extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closed = createEvent(this, "closed");
    }
    visible = false;
    width = "36%";
    showHeader = false;
    header = "";
    maskClosable = true;
    placement = "right";
    /**监听传入的 placement 是否符合要求*/
    validateName(val) {
        const flag = ["left", "right", "top", "bottom"].includes(val);
        if (!flag) {
            throw new Error("placement 必须是 left/right/top/bottom 其中之一");
        }
    }
    renderHeader() {
        if (this.showHeader) {
            return (h("div", { class: "ivy-drawer-header" }, h("slot", { name: "header" }, this.header)));
        }
        else {
            return null;
        }
    }
    render() {
        return (h(Host, { key: '9cdcfabff9aea6bc3bc56a7ebfae2aeedf29c044', show: this.visible }, h("div", { key: 'ec592bc118d7b40080a008f4b934021224ad8526', class: "ivy-mask", onClick: this.maskClose.bind(this) }), h("div", { key: '3605a19c4b64adb73f3803a2b37fc90acd4807a5', class: "ivy-drawer", style: {
                width: ["left", "right"].includes(this.placement)
                    ? this.width
                    : "100%",
                height: ["top", "bottom"].includes(this.placement)
                    ? this.width
                    : "100%",
            } }, this.renderHeader(), h("div", { key: '82588e6f41a4bb9b6a923e895908680077a42d2b', class: "ivy-drawer-body" }, h("slot", { key: '9d5e23be591910088d5d93af00f09e977ddf34cd' })))));
    }
    closed;
    closeHandler() {
        this.closed.emit();
    }
    async open() {
        this.visible = true;
    }
    async close() {
        this.closeHandler();
        this.visible = false;
    }
    maskClose() {
        if (this.maskClosable) {
            this.visible = false;
        }
    }
    static get watchers() { return {
        "placement": ["validateName"]
    }; }
    static get style() { return dDrawerCss; }
}, [1, "d-drawer", {
        "visible": [1040, "show"],
        "width": [1],
        "showHeader": [1540, "show-header"],
        "header": [1],
        "maskClosable": [1540, "mask-closable"],
        "placement": [1537],
        "open": [64],
        "close": [64]
    }, undefined, {
        "placement": ["validateName"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-drawer"];
    components.forEach(tagName => { switch (tagName) {
        case "d-drawer":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DDrawer$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DDrawer = DDrawer$1;
const defineCustomElement = defineCustomElement$1;

export { DDrawer, defineCustomElement };
//# sourceMappingURL=d-drawer.js.map

//# sourceMappingURL=d-drawer.js.map