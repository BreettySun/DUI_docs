import { p as proxyCustomElement, H, h, c as Host } from './p-CKuW6hQ4.js';

const dBreadcrumbCss = ":host{display:block}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;border-radius:0.25rem}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-slash{margin:0 0.5rem;color:#6c757d;display:flex;align-items:center}.breadcrumb-item a{color:#007bff;text-decoration:none;display:flex;align-items:center}.breadcrumb-item a:hover{color:#0056b3;text-decoration:underline}.breadcrumb-item:last-child{color:#6c757d}.breadcrumb-item span{display:flex;align-items:center}";

const DBreadcrumb$1 = /*@__PURE__*/ proxyCustomElement(class DBreadcrumb extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    separator = "/";
    render() {
        return (h(Host, { key: '0605b766de7e95e92d74038ebd57a617e8c743e3' }, h("nav", { key: '5ad4c80b27f81beacbf5e197c9c1dd51058897e3', "aria-label": "breadcrumb" }, h("ul", { key: 'c98a38cb9e2a7c5006ee8acf4bbb90253c5a6218', class: "breadcrumb", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" }, h("slot", { key: 'e1f33cd3b1681c5eed26790d56c08aee1c583acc' })))));
    }
    static get style() { return dBreadcrumbCss; }
}, [1, "d-breadcrumb", {
        "separator": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-breadcrumb"];
    components.forEach(tagName => { switch (tagName) {
        case "d-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DBreadcrumb$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DBreadcrumb = DBreadcrumb$1;
const defineCustomElement = defineCustomElement$1;

export { DBreadcrumb, defineCustomElement };
//# sourceMappingURL=d-breadcrumb.js.map

//# sourceMappingURL=d-breadcrumb.js.map