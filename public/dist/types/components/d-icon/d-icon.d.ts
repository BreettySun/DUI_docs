import { EventEmitter } from "../../stencil-public-runtime";
export declare class DIcon {
    /**
     * 图标名称
     */
    name: string;
    /**
     * 图标大小
     */
    size: string;
    /**
     * 图标颜色
     */
    color: string;
    /**
     * 旋转角度（度数）
     */
    rotate: number;
    /**
     * 是否启用旋转动画
     */
    spin: boolean;
    /**
     * 点击事件
     */
    iconClick: EventEmitter<MouseEvent>;
    private handleClick;
    private renderIcon;
    render(): any;
}
