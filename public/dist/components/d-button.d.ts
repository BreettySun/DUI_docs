import type { Components, JSX } from "../types/components";

interface DButton extends Components.DButton, HTMLElement {}
export const DButton: {
    prototype: DButton;
    new (): DButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
