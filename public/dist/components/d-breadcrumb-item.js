import { p as proxyCustomElement, H, h, c as Host } from './p-CKuW6hQ4.js';

const dBreadcrumbCss = ":host{display:block}.breadcrumb{display:flex;flex-wrap:wrap;padding:0.75rem 1rem;margin-bottom:1rem;list-style:none;border-radius:0.25rem}.breadcrumb-item{display:flex;align-items:center}.breadcrumb-item+.breadcrumb-item{padding-left:0.5rem}.breadcrumb-slash{margin:0 0.5rem;color:#6c757d;display:flex;align-items:center}.breadcrumb-item a{color:#007bff;text-decoration:none;display:flex;align-items:center}.breadcrumb-item a:hover{color:#0056b3;text-decoration:underline}.breadcrumb-item:last-child{color:#6c757d}.breadcrumb-item span{display:flex;align-items:center}";

const DBreadcrumbItem$1 = /*@__PURE__*/ proxyCustomElement(class DBreadcrumbItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    href;
    position;
    get separator() {
        const breadcrumb = this.el.closest("d-breadcrumb");
        return breadcrumb ? breadcrumb.separator : "/";
    }
    render() {
        const isFirst = !this.el.previousElementSibling;
        const content = this.el.innerHTML;
        return (h(Host, { key: 'a3d35fb94fe7eade82ab49d09bb54e18576f94c0' }, h("li", { key: '4526f1e828b1daa26612a2121a25ac5995f16330', class: "breadcrumb-item", itemprop: "itemListElement", itemscope: true, itemtype: "https://schema.org/ListItem" }, !isFirst && h("span", { key: '7a52d9aa5ceab0ca751da88e071a825ff748b0a9', class: "breadcrumb-slash" }, this.separator), this.href ? (h("a", { itemprop: "item", href: this.href }, h("span", { itemprop: "name", innerHTML: content }))) : (h("span", { itemprop: "name", innerHTML: content })), h("meta", { key: '9613916fec6b121c5eb433f36adb9eb177b64c31', itemprop: "position", content: String(this.position) }))));
    }
    static get style() { return dBreadcrumbCss; }
}, [1, "d-breadcrumb-item", {
        "href": [1],
        "position": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-breadcrumb-item"];
    components.forEach(tagName => { switch (tagName) {
        case "d-breadcrumb-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DBreadcrumbItem$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DBreadcrumbItem = DBreadcrumbItem$1;
const defineCustomElement = defineCustomElement$1;

export { DBreadcrumbItem, defineCustomElement };
//# sourceMappingURL=d-breadcrumb-item.js.map

//# sourceMappingURL=d-breadcrumb-item.js.map