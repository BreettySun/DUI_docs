import { EventEmitter } from "../../stencil-public-runtime";
export declare class DDrawer {
    visible: Boolean;
    width: string;
    showHeader: boolean;
    header: string;
    maskClosable: boolean;
    placement: string;
    /**监听传入的 placement 是否符合要求*/
    validateName(val: string): void;
    renderHeader(): any;
    render(): any;
    closed: EventEmitter;
    closeHandler(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    maskClose(): void;
}
