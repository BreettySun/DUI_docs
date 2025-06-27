import { Host, h, } from "@stencil/core";
/**
 * @slot - 默认插槽，用于放置轮播内容
 */
export class DCarousel {
    currentIndex = 0;
    itemsCount = 0;
    el;
    /**
     * 是否自动播放
     */
    autoplay = false;
    /**
     * 自动播放间隔时间（毫秒）
     */
    delay = 3000;
    /**
     * 指示器位置，可选值：top、bottom、left、right
     */
    indicatorPosition = "bottom";
    items = [];
    autoplayInterval;
    componentDidLoad() {
        // 获取所有子元素作为轮播项
        this.items = Array.from(this.el.children);
        // 更新状态以触发重新渲染
        this.itemsCount = this.items.length;
        // 显示第一个轮播项
        this.showSlide(this.currentIndex);
        // 如果启用了自动播放，开始自动播放
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    disconnectedCallback() {
        this.stopAutoplay();
    }
    autoplayChanged(newValue) {
        if (newValue) {
            this.startAutoplay();
        }
        else {
            this.stopAutoplay();
        }
    }
    delayChanged() {
        if (this.autoplay) {
            this.startAutoplay(); // 重新启动自动播放以应用新的延迟
        }
    }
    startAutoplay() {
        this.stopAutoplay(); // 先停止之前的自动播放
        this.autoplayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.delay);
    }
    stopAutoplay() {
        if (this.autoplayInterval) {
            window.clearInterval(this.autoplayInterval);
        }
    }
    showSlide(index) {
        // 确保索引在有效范围内
        if (this.items.length === 0)
            return;
        this.currentIndex = index;
        // 隐藏所有轮播项，只显示当前索引的项
        this.items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }
    /**
     * 手动切换到下一张幻灯片
     */
    async nextSlide() {
        if (this.items.length === 0)
            return;
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.showSlide(this.currentIndex);
    }
    /**
     * 手动切换到上一张幻灯片
     */
    async prevSlide() {
        if (this.items.length === 0)
            return;
        this.currentIndex =
            (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.showSlide(this.currentIndex);
    }
    /**
     * 手动切换到指定索引的幻灯片
     * @param index 幻灯片索引
     */
    async goToSlide(index) {
        if (index >= 0 && index < this.items.length) {
            this.showSlide(index);
        }
    }
    render() {
        // 计算指示器位置的样式
        const indicatorStyle = {};
        if (this.indicatorPosition === "top") {
            Object.assign(indicatorStyle, {
                top: "10px",
                left: "0",
                width: "100%",
            });
        }
        else if (this.indicatorPosition === "bottom") {
            Object.assign(indicatorStyle, {
                bottom: "10px",
                left: "0",
                width: "100%",
            });
        }
        else if (this.indicatorPosition === "left") {
            Object.assign(indicatorStyle, {
                left: "10px",
                top: "0",
                height: "100%",
            });
        }
        else if (this.indicatorPosition === "right") {
            Object.assign(indicatorStyle, {
                right: "10px",
                top: "0",
                height: "100%",
            });
        }
        return (h(Host, { key: '77df2fab69d4e6c0e6c2b52482b21256c9357385' }, h("div", { key: '88a6027fec31a372c8d9c08f93bdeb931bb7a8c2', class: "carousel-container", part: "carousel" }, h("slot", { key: '4468b06e97d7658cd0b768c94df3110b7da241f0' })), this.itemsCount > 0 && (h("div", { key: '4e7d57957e57f0ad1937e9878aeac0384f6d6acc', class: "carousel-indicators", part: "indicators", style: {
                display: "flex",
                position: "absolute",
                zIndex: "10",
                flexDirection: this.indicatorPosition === "left" ||
                    this.indicatorPosition === "right"
                    ? "column"
                    : "row",
                justifyContent: "center",
                ...indicatorStyle,
            } }, Array.from({ length: this.itemsCount }).map((_, i) => (h("div", { class: `indicator ${i === this.currentIndex ? "active" : ""}`, part: `indicator ${i === this.currentIndex
                ? "indicator-active"
                : ""}`, onClick: () => this.showSlide(i) })))))));
    }
    static get is() { return "d-carousel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d-carousel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d-carousel.css"]
        };
    }
    static get properties() {
        return {
            "autoplay": {
                "type": "boolean",
                "attribute": "autoplay",
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
                    "text": "\u662F\u5426\u81EA\u52A8\u64AD\u653E"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "delay": {
                "type": "number",
                "attribute": "delay",
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
                    "text": "\u81EA\u52A8\u64AD\u653E\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "3000"
            },
            "indicatorPosition": {
                "type": "string",
                "attribute": "indicator-position",
                "mutable": false,
                "complexType": {
                    "original": "\"top\" | \"bottom\" | \"left\" | \"right\"",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "\u6307\u793A\u5668\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1Atop\u3001bottom\u3001left\u3001right"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"bottom\""
            }
        };
    }
    static get states() {
        return {
            "currentIndex": {},
            "itemsCount": {}
        };
    }
    static get methods() {
        return {
            "nextSlide": {
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
                    "text": "\u624B\u52A8\u5207\u6362\u5230\u4E0B\u4E00\u5F20\u5E7B\u706F\u7247",
                    "tags": []
                }
            },
            "prevSlide": {
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
                    "text": "\u624B\u52A8\u5207\u6362\u5230\u4E0A\u4E00\u5F20\u5E7B\u706F\u7247",
                    "tags": []
                }
            },
            "goToSlide": {
                "complexType": {
                    "signature": "(index: number) => Promise<void>",
                    "parameters": [{
                            "name": "index",
                            "type": "number",
                            "docs": "\u5E7B\u706F\u7247\u7D22\u5F15"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "\u624B\u52A8\u5207\u6362\u5230\u6307\u5B9A\u7D22\u5F15\u7684\u5E7B\u706F\u7247",
                    "tags": [{
                            "name": "param",
                            "text": "index \u5E7B\u706F\u7247\u7D22\u5F15"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "autoplay",
                "methodName": "autoplayChanged"
            }, {
                "propName": "delay",
                "methodName": "delayChanged"
            }];
    }
}
//# sourceMappingURL=d-carousel.js.map
