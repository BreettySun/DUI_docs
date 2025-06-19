import { Host, h, } from "@stencil/core";
export class DModal {
    show = false;
    width = "520px";
    showHeader = true;
    header = "";
    maskClosable = true;
    showFooter = true;
    confirmText = "确定";
    cancelText = "取消";
    renderHeader() {
        if (this.showHeader) {
            return (h("div", { class: "ivy-modal-header" }, h("div", { class: "ivy-modal-title" }, h("slot", { name: "header" }, this.header)), h("div", { class: "ivy-modal-close", onClick: this.close.bind(this) }, "\u00D7")));
        }
        else {
            return null;
        }
    }
    renderFooter() {
        if (this.showFooter) {
            return (h("div", { class: "ivy-modal-footer" }, h("button", { class: "ivy-modal-btn ivy-modal-btn-cancel", onClick: this.cancel.bind(this) }, this.cancelText), h("button", { class: "ivy-modal-btn ivy-modal-btn-confirm", onClick: this.confirm.bind(this) }, this.confirmText)));
        }
        else {
            return null;
        }
    }
    render() {
        return (h(Host, { key: '8f5f2997ab138f6bf65b77da94a2c853a04fb25d', show: this.show }, h("div", { key: 'c8f000be9cad3dcb54354cc3ca1638946a242052', class: "ivy-mask", onClick: this.maskClose.bind(this) }), h("div", { key: 'ee0ec14afcc65410c56ae0f285f1ac6e8b94fbe0', class: "ivy-modal", style: { width: this.width } }, this.renderHeader(), h("div", { key: '663ce79bda1c1be3d1f15d00ff150500f501d888', class: "ivy-modal-body" }, h("slot", { key: '82585d9c2fe4545c53db69f64816c1f8494cde96' })), this.renderFooter())));
    }
    onClose;
    onConfirm;
    onCancel;
    closeHandler() {
        this.onClose.emit();
    }
    confirmHandler() {
        this.onConfirm.emit();
    }
    cancelHandler() {
        this.onCancel.emit();
    }
    async open() {
        this.show = true;
    }
    async close() {
        this.closeHandler();
        this.show = false;
    }
    async confirm() {
        this.confirmHandler();
        this.show = false;
    }
    async cancel() {
        this.cancelHandler();
        this.show = false;
    }
    maskClose() {
        if (this.maskClosable) {
            this.show = false;
        }
    }
    static get is() { return "d-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-modal.css"]
        };
    }
    static get properties() {
        return {
            "show": {
                "type": "boolean",
                "attribute": "show",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "defaultValue": "false"
            },
            "width": {
                "type": "string",
                "attribute": "width",
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
                "defaultValue": "\"520px\""
            },
            "showHeader": {
                "type": "boolean",
                "attribute": "show-header",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "defaultValue": "true"
            },
            "header": {
                "type": "string",
                "attribute": "header",
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
                "defaultValue": "\"\""
            },
            "maskClosable": {
                "type": "boolean",
                "attribute": "mask-closable",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "defaultValue": "true"
            },
            "showFooter": {
                "type": "boolean",
                "attribute": "show-footer",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": true,
                "defaultValue": "true"
            },
            "confirmText": {
                "type": "string",
                "attribute": "confirm-text",
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
                "defaultValue": "\"\u786E\u5B9A\""
            },
            "cancelText": {
                "type": "string",
                "attribute": "cancel-text",
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
                "defaultValue": "\"\u53D6\u6D88\""
            }
        };
    }
    static get events() {
        return [{
                "method": "onClose",
                "name": "onClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "onConfirm",
                "name": "onConfirm",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "onCancel",
                "name": "onCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "open": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "close": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "confirm": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "cancel": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=d-modal.js.map
