import { p as proxyCustomElement, H, h, c as Host } from './p-CKuW6hQ4.js';

const dButtonCss = ":host{display:block}.btn{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:4px;cursor:pointer;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n\t\tUbuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;font-weight:500;transition:all 0.2s ease;outline:none}.btn>*{display:flex;align-items:center}.btn-primary{background-color:#1890ff;color:white}.btn-primary:hover{background-color:#40a9ff}.btn-secondary{background-color:#f0f0f0;color:rgba(0, 0, 0, 0.85)}.btn-secondary:hover{background-color:#e0e0e0}.btn-danger{background-color:#ff4d4f;color:white}.btn-danger:hover{background-color:#ff7875}.btn-text{background-color:transparent;color:rgba(0, 0, 0, 0.85)}.btn-text:hover{background-color:rgba(0, 0, 0, 0.05)}.btn-small{height:24px;padding:0 7px;font-size:12px}.btn-medium{height:32px;padding:0 15px;font-size:14px}.btn-large{height:40px;padding:0 15px;font-size:16px}.btn-disabled{opacity:0.5;cursor:not-allowed}.btn-disabled:hover{opacity:0.5}.btn-round{border-radius:50%;padding:0}.btn-round.btn-small{width:24px}.btn-round.btn-medium{width:32px}.btn-round.btn-large{width:40px}";

const DButton$1 = /*@__PURE__*/ proxyCustomElement(class DButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * 按钮类型
     */
    type = "primary";
    /**
     * 按钮尺寸
     */
    size = "medium";
    /**
     * 是否禁用
     */
    disabled = false;
    /**
     * 是否为圆形按钮
     */
    round = false;
    /**
     * 自定义类名
     */
    customClass = "";
    /**
     * 自定义内联样式
     */
    customStyle = {};
    render() {
        const classes = {
            btn: true,
            [`btn-${this.type}`]: true,
            [`btn-${this.size}`]: true,
            "btn-disabled": this.disabled,
            "btn-round": this.round,
            [this.customClass]: !!this.customClass,
        };
        // 允许外部传递style和class
        return (h(Host, { key: '39a3b3d6d31a5b60af8fb034884ba226c9348061' }, h("button", { key: '21111d3695237b131eaf638b20fcc9a25f019ccf', class: classes, disabled: this.disabled, style: this.customStyle, part: "button" }, h("slot", { key: 'a448b94dc171b3c51a55e3581c2950f680cde1d5' }))));
    }
    static get style() { return dButtonCss; }
}, [1, "d-button", {
        "type": [1],
        "size": [1],
        "disabled": [4],
        "round": [4],
        "customClass": [1, "custom-class"],
        "customStyle": [16, "custom-style"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-button"];
    components.forEach(tagName => { switch (tagName) {
        case "d-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DButton = DButton$1;
const defineCustomElement = defineCustomElement$1;

export { DButton, defineCustomElement };
//# sourceMappingURL=d-button.js.map

//# sourceMappingURL=d-button.js.map