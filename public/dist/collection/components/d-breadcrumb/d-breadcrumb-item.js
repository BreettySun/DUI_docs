import { Host, h } from "@stencil/core";
export class DBreadcrumbItem {
    el;
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
    static get is() { return "d-breadcrumb-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-breadcrumb.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-breadcrumb.css"]
        };
    }
    static get properties() {
        return {
            "href": {
                "type": "string",
                "attribute": "href",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false
            },
            "position": {
                "type": "number",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=d-breadcrumb-item.js.map
