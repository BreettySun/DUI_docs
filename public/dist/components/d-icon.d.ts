import type { Components, JSX } from "../types/components";

interface DIcon extends Components.DIcon, HTMLElement {}
export const DIcon: {
    prototype: DIcon;
    new (): DIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
