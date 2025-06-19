import { p as proxyCustomElement, H, h, c as Host } from './p-CKuW6hQ4.js';

const dDividerCss = ":host{display:block;--divider-color:#bbb;--divider-size:1px;--divider-margin:24px 0}:host(.divider){position:relative}:host(.divider-horizontal){display:block;clear:both;width:100%;min-width:100%;height:var(--divider-size);margin:var(--divider-margin)}:host(.divider-vertical){display:inline-block;height:1em;margin:0 8px;vertical-align:middle;width:var(--divider-size)}:host(.divider-horizontal.divider-solid){background-color:var(--divider-color)}:host(.divider-vertical.divider-solid){background-color:var(--divider-color)}:host(.divider-horizontal.divider-highDensityDashed){background-color:transparent;background-image:linear-gradient(\n\t\tto right,\n\t\tvar(--divider-color),\n\t\tvar(--divider-color) 50%,\n\t\ttransparent 50%\n\t);background-size:48px var(--divider-size);background-repeat:repeat-x}:host(.divider-horizontal.divider-lowDensityDashed){background-color:transparent;background-image:linear-gradient(\n\t\tto right,\n\t\tvar(--divider-color) 50%,\n\t\ttransparent 50%\n\t);background-size:16px var(--divider-size);background-repeat:repeat-x}";

const DDivider$1 = /*@__PURE__*/ proxyCustomElement(class DDivider extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /**
     * 分割线方向，可选值：horizontal、vertical
     */
    direction = "horizontal";
    /**
     * 分割线颜色
     */
    color = "#bbb";
    /**
     * 分割线粗细
     */
    size = "1px";
    /**
     * 分割线样式，可选值：solid、dashed、dotted
     */
    lineType = "solid";
    /**
     * 分割线边距
     */
    margin = "24px 0";
    render() {
        return (h(Host, { key: '9e0562ecab182dac555f1b9e1bddb001639a7d16', style: {
                "--divider-color": this.color,
                "--divider-size": this.size,
                "--divider-margin": this.margin,
            }, class: {
                divider: true,
                [`divider-${this.direction}`]: true,
                [`divider-${this.lineType}`]: true,
            } }, h("slot", { key: '8f45d0839b6bde50a9603b5ac32ca7295e0bcd2d' })));
    }
    static get style() { return dDividerCss; }
}, [1, "d-divider", {
        "direction": [1],
        "color": [1],
        "size": [1],
        "lineType": [1, "line-type"],
        "margin": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-divider"];
    components.forEach(tagName => { switch (tagName) {
        case "d-divider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DDivider$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DDivider = DDivider$1;
const defineCustomElement = defineCustomElement$1;

export { DDivider, defineCustomElement };
//# sourceMappingURL=d-divider.js.map

//# sourceMappingURL=d-divider.js.map