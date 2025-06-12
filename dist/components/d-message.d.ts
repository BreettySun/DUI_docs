import type { Components, JSX } from "../types/components";

interface DMessage extends Components.DMessage, HTMLElement {}
export const DMessage: {
    prototype: DMessage;
    new (): DMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
