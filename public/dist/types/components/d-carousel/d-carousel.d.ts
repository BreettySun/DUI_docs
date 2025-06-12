/**
 * @slot - 默认插槽，用于放置轮播内容
 */
export declare class DCarousel {
    currentIndex: number;
    itemsCount: number;
    el: HTMLElement;
    /**
     * 是否自动播放
     */
    autoplay: boolean;
    /**
     * 自动播放间隔时间（毫秒）
     */
    delay: number;
    /**
     * 指示器位置，可选值：top、bottom、left、right
     */
    indicatorPosition: "top" | "bottom" | "left" | "right";
    private items;
    private autoplayInterval;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    autoplayChanged(newValue: boolean): void;
    delayChanged(): void;
    private startAutoplay;
    private stopAutoplay;
    private showSlide;
    /**
     * 手动切换到下一张幻灯片
     */
    nextSlide(): Promise<void>;
    /**
     * 手动切换到上一张幻灯片
     */
    prevSlide(): Promise<void>;
    /**
     * 手动切换到指定索引的幻灯片
     * @param index 幻灯片索引
     */
    goToSlide(index: number): Promise<void>;
    render(): any;
}
