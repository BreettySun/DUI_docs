import { Host, h } from "@stencil/core";
export class DBreadcrumb {
    el;
    separator = "/";
    render() {
        return (h(Host, { key: '8468b940e400b17a0beb1f92fd47f17c692bde58' }, h("nav", { key: '434f8ac7c78f53ba189401a5f7fc077e5476b076', "aria-label": "breadcrumb" }, h("ul", { key: '861f7499165e68feb631205a6475aa9e5246f033', class: "breadcrumb", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" }, h("slot", { key: 'a266463f32e11c1a7388f5209f157816975eeb8c' })))));
    }
    static get is() { return "d-breadcrumb"; }
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
            "separator": {
                "type": "string",
                "attribute": "separator",
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
                "reflect": false,
                "defaultValue": "\"/\""
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=d-breadcrumb.js.map
