import type { Components, JSX } from "../types/components";

interface DModal extends Components.DModal, HTMLElement {}
export const DModal: {
    prototype: DModal;
    new (): DModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
