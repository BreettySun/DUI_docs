import { Host, h } from "@stencil/core";
export class DBacktop {
    right = "40px";
    bottom = "40px";
    visibilityHeight = 400;
    target = "";
    visible = false;
    targetElement = window;
    componentDidLoad() {
        if (this.target) {
            const targetEl = document.querySelector(this.target);
            if (targetEl) {
                this.targetElement = targetEl;
            }
        }
    }
    handleScroll() {
        const scrollTop = this.targetElement === window
            ? window.scrollY
            : this.targetElement.scrollTop;
        this.visible = scrollTop > this.visibilityHeight;
    }
    handleClick = () => {
        if (this.targetElement === window) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        else {
            this.targetElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    render() {
        return (h(Host, { key: '105684e4bf7d4b730967ac0c5da07d6b027d4a2f' }, h("div", { key: '1755f039f7c35192d91ce6745ddcee58cabd50a8', class: `d-backtop ${this.visible ? "d-backtop--visible" : ""}`, style: {
                right: this.right,
                bottom: this.bottom,
            }, onClick: this.handleClick }, h("slot", { key: '1a21d042cc3d7baab1fe253a6a022ba979b1b56b' }))));
    }
    static get is() { return "d-backtop"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-backtop.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-backtop.css"]
        };
    }
    static get properties() {
        return {
            "right": {
                "type": "string",
                "attribute": "right",
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
                "defaultValue": "\"40px\""
            },
            "bottom": {
                "type": "string",
                "attribute": "bottom",
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
                "defaultValue": "\"40px\""
            },
            "visibilityHeight": {
                "type": "number",
                "attribute": "visibility-height",
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
                "reflect": false,
                "defaultValue": "400"
            },
            "target": {
                "type": "string",
                "attribute": "target",
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
            }
        };
    }
    static get states() {
        return {
            "visible": {}
        };
    }
    static get listeners() {
        return [{
                "name": "scroll",
                "method": "handleScroll",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=d-backtop.js.map
