import { Host, h } from "@stencil/core";
export class DButton {
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
        return (h(Host, { key: 'f7ae88d94851b74c66a773edcd23642e7c62844d' }, h("button", { key: '36ff3beef7d6dd4b0586da6807afb722ebe4d78a', class: classes, disabled: this.disabled, style: this.customStyle, part: "button" }, h("slot", { key: '133cbf779159b897e5159ed65f8d89c90997eeec' }))));
    }
    static get is() { return "d-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "\"primary\" | \"secondary\" | \"danger\" | \"text\"",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"text\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u6309\u94AE\u7C7B\u578B"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"primary\""
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "\"small\" | \"medium\" | \"large\"",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u6309\u94AE\u5C3A\u5BF8"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"medium\""
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u662F\u5426\u7981\u7528"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "round": {
                "type": "boolean",
                "attribute": "round",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "customClass": {
                "type": "string",
                "attribute": "custom-class",
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
                    "text": "\u81EA\u5B9A\u4E49\u7C7B\u540D"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"\""
            },
            "customStyle": {
                "type": "unknown",
                "attribute": "custom-style",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{}"
            }
        };
    }
}
//# sourceMappingURL=d-button.js.map
