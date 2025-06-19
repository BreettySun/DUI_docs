import { Host, h } from "@stencil/core";
export class DBreadcrumb {
    el;
    separator = "/";
    render() {
        return (h(Host, { key: '0605b766de7e95e92d74038ebd57a617e8c743e3' }, h("nav", { key: '5ad4c80b27f81beacbf5e197c9c1dd51058897e3', "aria-label": "breadcrumb" }, h("ul", { key: 'c98a38cb9e2a7c5006ee8acf4bbb90253c5a6218', class: "breadcrumb", itemscope: true, itemtype: "https://schema.org/BreadcrumbList" }, h("slot", { key: 'e1f33cd3b1681c5eed26790d56c08aee1c583acc' })))));
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
