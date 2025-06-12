import type { Components, JSX } from "../types/components";

interface DDrawer extends Components.DDrawer, HTMLElement {}
export const DDrawer: {
    prototype: DDrawer;
    new (): DDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
