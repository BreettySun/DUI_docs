import { EventEmitter } from "../../stencil-public-runtime";
export interface CollapseItem {
    id: string;
    title: string;
    content: string;
    disabled?: boolean;
}
export declare class DCollapse {
    items: string | CollapseItem[];
    accordion: boolean;
    defaultActiveKeys: string | string[];
    activeKeys: string[];
    parsedItems: CollapseItem[];
    change: EventEmitter<string[]>;
    componentWillLoad(): void;
    parseProps(): void;
    private toggleItem;
    private isItemActive;
    render(): any;
}
