export declare class DDivider {
    /**
     * 分割线方向，可选值：horizontal、vertical
     */
    direction: "horizontal" | "vertical";
    /**
     * 分割线颜色
     */
    color: string;
    /**
     * 分割线粗细
     */
    size: string;
    /**
     * 分割线样式，可选值：solid、dashed、dotted
     */
    lineType: "solid" | "highDensityDashed" | "lowDensityDashed";
    /**
     * 分割线边距
     */
    margin: string;
    render(): any;
}
