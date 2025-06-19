import { Host, h } from "@stencil/core";
export class DDivider {
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
    static get is() { return "d-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-divider.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-divider.css"]
        };
    }
    static get properties() {
        return {
            "direction": {
                "type": "string",
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "\"horizontal\" | \"vertical\"",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u5206\u5272\u7EBF\u65B9\u5411\uFF0C\u53EF\u9009\u503C\uFF1Ahorizontal\u3001vertical"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"horizontal\""
            },
            "color": {
                "type": "string",
                "attribute": "color",
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
                    "text": "\u5206\u5272\u7EBF\u989C\u8272"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"#bbb\""
            },
            "size": {
                "type": "string",
                "attribute": "size",
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
                    "text": "\u5206\u5272\u7EBF\u7C97\u7EC6"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"1px\""
            },
            "lineType": {
                "type": "string",
                "attribute": "line-type",
                "mutable": false,
                "complexType": {
                    "original": "\"solid\" | \"highDensityDashed\" | \"lowDensityDashed\"",
                    "resolved": "\"highDensityDashed\" | \"lowDensityDashed\" | \"solid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u5206\u5272\u7EBF\u6837\u5F0F\uFF0C\u53EF\u9009\u503C\uFF1Asolid\u3001dashed\u3001dotted"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"solid\""
            },
            "margin": {
                "type": "string",
                "attribute": "margin",
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
                    "text": "\u5206\u5272\u7EBF\u8FB9\u8DDD"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"24px 0\""
            }
        };
    }
}
//# sourceMappingURL=d-divider.js.map
