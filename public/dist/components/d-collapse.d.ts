import type { Components, JSX } from "../types/components";

interface DCollapse extends Components.DCollapse, HTMLElement {}
export const DCollapse: {
    prototype: DCollapse;
    new (): DCollapse;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
