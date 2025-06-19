import type { Components, JSX } from "../types/components";

interface DBreadcrumb extends Components.DBreadcrumb, HTMLElement {}
export const DBreadcrumb: {
    prototype: DBreadcrumb;
    new (): DBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
