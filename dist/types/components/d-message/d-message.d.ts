interface Message {
    id: number;
    type: "success" | "info" | "warning" | "error";
    text: string;
    duration?: number;
    icon?: string;
}
export declare class DMessage {
    messages: Message[];
    private getIconColor;
    handleMessage(ev: CustomEvent<Message>): void;
    private el;
    componentDidLoad(): void;
    render(): any;
}
export {};
