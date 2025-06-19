import type { Components, JSX } from "../types/components";

interface DBreadcrumbItem extends Components.DBreadcrumbItem, HTMLElement {}
export const DBreadcrumbItem: {
    prototype: DBreadcrumbItem;
    new (): DBreadcrumbItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
