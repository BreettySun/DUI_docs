export declare class DButton {
    /**
     * 按钮类型
     */
    type: "primary" | "secondary" | "danger" | "text";
    /**
     * 按钮尺寸
     */
    size: "small" | "medium" | "large";
    /**
     * 是否禁用
     */
    disabled: boolean;
    /**
     * 是否为圆形按钮
     */
    round: boolean;
    /**
     * 自定义类名
     */
    customClass: string;
    /**
     * 自定义内联样式
     */
    customStyle: {
        [key: string]: string;
    };
    render(): any;
}
