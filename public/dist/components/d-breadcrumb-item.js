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
        return (h(Host, { key: '17cbb5f64eb50d969b68902275c400b99d5f3bfa' }, h("li", { key: 'ba4c934a11cec2ede26d056c2cbd672c421c401b', class: "breadcrumb-item", itemprop: "itemListElement", itemscope: true, itemtype: "https://schema.org/ListItem" }, !isFirst && h("span", { key: '52833260b8da2667113be5953b803de1504ea31a', class: "breadcrumb-slash" }, this.separator), this.href ? (h("a", { itemprop: "item", href: this.href }, h("span", { itemprop: "name", innerHTML: content }))) : (h("span", { itemprop: "name", innerHTML: content })), h("meta", { key: 'f909244b6afac07dc553372f980486d887d34f6f', itemprop: "position", content: String(this.position) }))));
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