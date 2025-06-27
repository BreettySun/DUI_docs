import { p as proxyCustomElement, H, h, c as Host } from './p-CKuW6hQ4.js';

const dBacktopCss = ":host{display:block}.d-backtop{position:fixed;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#fff;color:#909399;border-radius:50%;box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);cursor:pointer;opacity:0;transition:opacity 0.3s;z-index:100}.d-backtop:hover{background-color:#f2f6fc;color:#409eff}.d-backtop--visible{opacity:1}";

const DBacktop$1 = /*@__PURE__*/ proxyCustomElement(class DBacktop extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
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
    static get style() { return dBacktopCss; }
}, [1, "d-backtop", {
        "right": [1],
        "bottom": [1],
        "visibilityHeight": [2, "visibility-height"],
        "target": [1],
        "visible": [32]
    }, [[9, "scroll", "handleScroll"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d-backtop"];
    components.forEach(tagName => { switch (tagName) {
        case "d-backtop":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DBacktop$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DBacktop = DBacktop$1;
const defineCustomElement = defineCustomElement$1;

export { DBacktop, defineCustomElement };
//# sourceMappingURL=d-backtop.js.map

//# sourceMappingURL=d-backtop.js.map