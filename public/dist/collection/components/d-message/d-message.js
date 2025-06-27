import { Host, h } from "@stencil/core";
export class DMessage {
    messages = [];
    getIconColor(type) {
        switch (type) {
            case "success":
                return "#67C23A";
            case "warning":
                return "#E6A23C";
            case "error":
                return "#F56C6C";
            case "info":
                return "#909399";
            default:
                return "#909399";
        }
    }
    handleMessage(ev) {
        const message = ev.detail;
        this.messages = [...this.messages, message];
        // 使用自定义显示时间或默认3秒
        const duration = message.duration || 3000;
        setTimeout(() => {
            const messageElement = this.el.shadowRoot?.querySelector(`[data-message-id="${message.id}"]`);
            if (messageElement) {
                messageElement.classList.add("removing");
                // 等待动画结束后移除消息
                setTimeout(() => {
                    this.messages = this.messages.filter((m) => m.id !== message.id);
                }, 300);
            }
        }, duration);
    }
    el;
    componentDidLoad() {
        this.el = document.querySelector("d-message");
    }
    render() {
        return (h(Host, { key: '388a48ace587237ac440d8204f76ad3c4cd759e5' }, h("div", { key: '22c9b1aff03f9e95ae18536fbb6ca4c9c76fc579', class: "d-message-container" }, this.messages.map((message) => (h("div", { class: `d-message d-message--${message.type}`, "data-message-id": message.id, key: message.id }, h("div", { class: "d-message__content" }, message.icon && (h("d-icon", { name: message.icon, color: this.getIconColor(message.type), class: "d-message__icon" })), h("span", null, message.text))))))));
    }
    static get is() { return "d-message"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-message.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-message.css"]
        };
    }
    static get states() {
        return {
            "messages": {}
        };
    }
    static get listeners() {
        return [{
                "name": "d-message",
                "method": "handleMessage",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=d-message.js.map
