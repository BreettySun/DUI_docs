import type { Components, JSX } from "../types/components";

interface DDivider extends Components.DDivider, HTMLElement {}
export const DDivider: {
    prototype: DDivider;
    new (): DDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
