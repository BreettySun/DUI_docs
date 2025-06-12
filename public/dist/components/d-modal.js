import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CKuW6hQ4.js';

const dModalCss = ":host{position:fixed;left:0;top:0;z-index:8000;width:100vw;height:100vh;display:none;overflow:hidden;transition:all 0.3s}.ivy-mask{position:absolute;left:0;top:0;z-index:-1;width:100%;height:100%;background-color:var(--ivy-mask-color, rgba(55, 55, 55, 0.6))}.ivy-modal{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%) scale(0.5);z-index:1;background-color:#ffffff;border-radius:4px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);opacity:0;transition:all 0.3s ease-in-out}:host([show]){display:block}:host([show]) .ivy-modal{transform:translate(-50%, -50%) scale(1);opacity:1}.ivy-modal-header{padding:16px 24px;border-bottom:1px solid var(--ivy-border-color, #dcdfe6);display:none}:host([show-header]) .ivy-modal-header{display:flex;justify-content:space-between;align-items:center}.ivy-modal-title{font-size:16px;font-weight:500;color:rgba(0, 0, 0, 0.85)}.ivy-modal-close{font-size:20px;color:rgba(0, 0, 0, 0.45);cursor:pointer;transition:color 0.3s}.ivy-modal-close:hover{color:rgba(0, 0, 0, 0.85)}.ivy-modal-body{padding:24px;max-height:calc(100vh - 200px);overflow-y:auto}.ivy-modal-footer{padding:10px 24px;border-top:1px solid var(--ivy-border-color, #dcdfe6);text-align:right;display:none}:host([show-footer]) .ivy-modal-footer{display:block}.ivy-modal-btn{padding:4px 15px;font-size:14px;border-radius:2px;cursor:pointer;transition:all 0.3s;margin-left:8px;border:1px solid transparent}.ivy-modal-btn-cancel{background:#fff;border-color:#d9d9d9;color:rgba(0, 0, 0, 0.65)}.ivy-modal-btn-cancel:hover{color:#40a9ff;border-color:#40a9ff}.ivy-modal-btn-confirm{background:#1890ff;border-color:#1890ff;color:#fff}.ivy-modal-btn-confirm:hover{background:#40a9ff;border-color:#40a9ff}";

const DModal$1 = /*@__PURE__*/ proxyCustomElement(class DModal extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.onClose = createEvent(this, "onClose");
        this.onConfirm = createEvent(this, "onConfirm");
        this.onCancel = createEvent(this, "onCancel");
    }
    show = false;
    width = "520px";
    showHeader = true;
    header = "";
    maskClosable = true;
    showFooter = true;
    confirmText = "确定";
    cancelText = "取消";
    renderHeader() {
        if (this.showHeader) {
            return (h("div", { class: "ivy-modal-header" }, h("div", { class: "ivy-modal-title" }, h("slot", { name: "header" }, this.header)), h("div", { class: "ivy-modal-close", onClick: this.close.bind(this) }, "\u00D7")));
        }
        else {
            return null;
        }
    }
    renderFooter() {
        if (this.showFooter) {
            return (h("div", { class: "ivy-modal-footer" }, h("button", { class: "ivy-modal-btn ivy-modal-btn-cancel", onClick: this.cancel.bind(this) }, this.cancelText), h("button", { class: "ivy-modal-btn ivy-modal-btn-confirm", onClick: this.confirm.bind(this) }, this.confirmText)));
        }
        else {
            return null;
        }
    }
    render() {
        return (h(Host, { key: 'a1269ec58619cf0a0bed3dde09e21cd0dc6a7450', show: this.show }, h("div", { key: '078eeeecfc173b1b02a3e4dd4fc126d61152af08', class: "ivy-mask", onClick: this.maskClose.bind(this) }), h("div", { key: '4fc01a01a744266674ad5a1448c5ce545f26d20f', class: "ivy-modal", style: { width: this.width } }, this.renderHeader(), h("div", { key: '79f26fdbcb0a633c821f55fcf1adbae5bc16f0a2', class: "ivy-modal-body" }, h("slot", { key: '90db5816cafd295c75943a106220fd2c05cb3a59' })), this.renderFooter())));
    }
    onClose;
    onConfirm;
    onCancel;
    closeHandler() {
        this.onClose.emit();
    }
    confirmHandler() {
        this.onConfirm.emit();
    }
    cancelHandler() {
        this.onCancel.emit();
    }
    async open() {
        this.show = true;
    }
    async close() {
        this.closeHandler();
        this.show = false;
    }
    async confirm() {
        this.confirmHandler();
        this.show = false;
    }
    async cancel() {
        this.cancelHandler();
        this.show = false;
    }
    maskClose() {
        if (this.maskClosable) {
            this.show = false;
        }
    }
    static get style() { return dModalCss; }
}, [1, "d-modal", {
        "show": [1540],
        "width": [1],
        "showHeader": [1540, "show-header"],
        "header": [1],
        "maskClosable": [1540, "mask-closable"],
        "showFooter": [1540, "show-footer"],
        "confirmText": [1, "confirm-text"],
        "cancelText": [1, "cancel-text"],
        "open": [64],
        "close": [64],
        "confirm": [64],
        "cancel": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "d-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DModal$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DModal = DModal$1;
const defineCustomElement = defineCustomElement$1;

export { DModal, defineCustomElement };
//# sourceMappingURL=d-modal.js.map

//# sourceMappingURL=d-modal.js.map