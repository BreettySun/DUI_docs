import { EventEmitter } from "../../stencil-public-runtime";
export declare class DModal {
    show: boolean;
    width: string;
    showHeader: boolean;
    header: string;
    maskClosable: boolean;
    showFooter: boolean;
    confirmText: string;
    cancelText: string;
    renderHeader(): any;
    renderFooter(): any;
    render(): any;
    onClose: EventEmitter;
    onConfirm: EventEmitter;
    onCancel: EventEmitter;
    closeHandler(): void;
    confirmHandler(): void;
    cancelHandler(): void;
    open(): Promise<void>;
    close(): Promise<void>;
    confirm(): Promise<void>;
    cancel(): Promise<void>;
    maskClose(): void;
}
