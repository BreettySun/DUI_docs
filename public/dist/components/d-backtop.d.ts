import type { Components, JSX } from "../types/components";

interface DBacktop extends Components.DBacktop, HTMLElement {}
export const DBacktop: {
    prototype: DBacktop;
    new (): DBacktop;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
