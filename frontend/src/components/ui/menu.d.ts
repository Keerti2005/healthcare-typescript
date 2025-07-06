import type { ButtonProps, MenuItemProps as MenuItemPrimitiveProps, MenuProps as MenuPrimitiveProps, MenuSectionProps as MenuSectionPrimitiveProps, MenuTriggerProps as MenuTriggerPrimitiveProps, PopoverProps } from "react-aria-components";
import { Header } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { dropdownItemStyles } from "./dropdown";
interface MenuProps extends MenuTriggerPrimitiveProps {
    respectScreen?: boolean;
}
declare const Menu: {
    ({ respectScreen, ...props }: MenuProps): import("react/jsx-runtime").JSX.Element;
    Keyboard: ({ className, ...props }: React.ComponentProps<({ keys, classNames, className, ...props }: import("./keyboard").KeyboardProps) => import("react/jsx-runtime").JSX.Element>) => import("react/jsx-runtime").JSX.Element;
    Content: <T extends object>({ className, showArrow, popoverClassName, ...props }: MenuContentProps<T>) => import("react/jsx-runtime").JSX.Element;
    Header: ({ className, separator, ...props }: MenuHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Item: ({ className, isDanger, children, ...props }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
    Section: <T extends object>({ className, ref, ...props }: MenuSectionProps<T>) => import("react/jsx-runtime").JSX.Element;
    Separator: ({ className, ...props }: import("react-aria-components").SeparatorProps) => import("react/jsx-runtime").JSX.Element;
    ItemDetails: ({ label, description, classNames, ...props }: import("./dropdown").DropdownItemDetailProps) => import("react/jsx-runtime").JSX.Element;
    Label: ({ className, ref, ...props }: import("./dropdown").DropdownLabelProps) => import("react/jsx-runtime").JSX.Element;
    Trigger: ({ className, ref, ...props }: MenuTriggerProps) => import("react/jsx-runtime").JSX.Element;
    Submenu: ({ delay, ...props }: {
        [x: string]: any;
        delay?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
interface MenuTriggerProps extends ButtonProps {
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
}
interface MenuContentProps<T> extends Pick<PopoverProps, "placement" | "offset" | "crossOffset" | "arrowBoundaryOffset" | "triggerRef" | "isOpen" | "onOpenChange" | "shouldFlip">, MenuPrimitiveProps<T> {
    className?: string;
    popoverClassName?: string;
    showArrow?: boolean;
    respectScreen?: boolean;
}
interface MenuItemProps extends MenuItemPrimitiveProps, VariantProps<typeof dropdownItemStyles> {
    isDanger?: boolean;
}
export interface MenuHeaderProps extends React.ComponentProps<typeof Header> {
    separator?: boolean;
}
interface MenuSectionProps<T> extends MenuSectionPrimitiveProps<T> {
    ref?: React.Ref<HTMLDivElement>;
    title?: string;
}
export type { MenuProps, MenuContentProps, MenuTriggerProps, MenuItemProps, MenuSectionProps };
export { Menu };
