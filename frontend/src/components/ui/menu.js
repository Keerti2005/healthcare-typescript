import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, use } from "react";
import { IconBulletFill, IconCheck, IconChevronLgRight } from "@intentui/icons";
import { Button, Collection, Header, MenuItem as MenuItemPrimitive, Menu as MenuPrimitive, MenuSection as MenuSectionPrimitive, MenuTrigger as MenuTriggerPrimitive, SubmenuTrigger as SubmenuTriggerPrimitive, composeRenderProps, } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { DropdownItemDetails, DropdownKeyboard, DropdownLabel, DropdownSeparator, dropdownItemStyles, dropdownSectionStyles, } from "./dropdown";
import { PopoverContent } from "./popover";
import { composeTailwindRenderProps } from "./primitive";
const MenuContext = createContext({ respectScreen: true });
const Menu = ({ respectScreen = true, ...props }) => {
    return (_jsx(MenuContext, { value: { respectScreen }, children: _jsx(MenuTriggerPrimitive, { ...props, children: props.children }) }));
};
const MenuSubMenu = ({ delay = 0, ...props }) => (_jsx(SubmenuTriggerPrimitive, { ...props, delay: delay, children: props.children }));
const MenuTrigger = ({ className, ref, ...props }) => (_jsx(Button, { ref: ref, "data-slot": "menu-trigger", className: composeTailwindRenderProps(className, "relative inline text-left outline-hidden focus-visible:ring-1 focus-visible:ring-primary"), ...props, children: (values) => (_jsx(_Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children })) }));
const MenuContent = ({ className, showArrow = false, popoverClassName, ...props }) => {
    const { respectScreen } = use(MenuContext);
    return (_jsx(PopoverContent, { isOpen: props.isOpen, onOpenChange: props.onOpenChange, shouldFlip: props.shouldFlip, respectScreen: respectScreen, showArrow: showArrow, offset: props.offset, placement: props.placement, crossOffset: props.crossOffset, triggerRef: props.triggerRef, arrowBoundaryOffset: props.arrowBoundaryOffset, className: composeTailwindRenderProps(popoverClassName, "z-50 p-0 shadow-xs outline-hidden sm:min-w-40"), children: _jsx(MenuPrimitive, { "data-slot": "menu-content", className: composeTailwindRenderProps(className, "grid max-h-[calc(var(--visual-viewport-height)-10rem)] grid-cols-[auto_1fr] overflow-auto rounded-xl p-1 outline-hidden [clip-path:inset(0_0_0_0_round_calc(var(--radius-lg)-2px))] sm:max-h-[inherit] *:[[role='group']+[role=group]]:mt-4 *:[[role='group']+[role=separator]]:mt-1"), ...props }) }));
};
const MenuItem = ({ className, isDanger = false, children, ...props }) => {
    const textValue = props.textValue || (typeof children === "string" ? children : undefined);
    return (_jsx(MenuItemPrimitive, { className: composeRenderProps(className, (className, renderProps) => dropdownItemStyles({
            ...renderProps,
            className: renderProps.hasSubmenu
                ? twMerge([
                    "data-open:data-danger:bg-danger/10 data-open:data-danger:text-danger",
                    "data-open:bg-accent data-open:text-accent-fg data-open:*:data-[slot=icon]:text-accent-fg data-open:*:[.text-muted-fg]:text-accent-fg",
                    className,
                ])
                : className,
        })), textValue: textValue, "data-danger": isDanger ? "true" : undefined, ...props, children: (values) => (_jsxs(_Fragment, { children: [values.isSelected && (_jsxs(_Fragment, { children: [values.selectionMode === "single" && (_jsx("span", { "data-slot": "bullet-icon", className: "-mx-0.5 mr-2 flex size-4 shrink-0 items-center justify-center **:data-[slot=indicator]:size-2.5 **:data-[slot=indicator]:shrink-0", children: _jsx(IconBulletFill, { "data-slot": "indicator" }) })), values.selectionMode === "multiple" && (_jsx(IconCheck, { className: "-mx-0.5 mr-2 size-4", "data-slot": "checked-icon" }))] })), typeof children === "function" ? children(values) : children, values.hasSubmenu && (_jsx(IconChevronLgRight, { "data-slot": "chevron", className: "absolute right-2 size-3.5" }))] })) }));
};
const MenuHeader = ({ className, separator = false, ...props }) => (_jsx(Header, { className: twMerge("col-span-full px-2.5 py-2 font-semibold text-base sm:text-sm", separator && "-mx-1 mb-1 border-b sm:px-3 sm:pb-[0.625rem]", className), ...props }));
const { section, header } = dropdownSectionStyles();
const MenuSection = ({ className, ref, ...props }) => {
    return (_jsxs(MenuSectionPrimitive, { ref: ref, className: section({ className }), ...props, children: ["title" in props && _jsx(Header, { className: header(), children: props.title }), _jsx(Collection, { items: props.items, children: props.children })] }));
};
const MenuSeparator = DropdownSeparator;
const MenuItemDetails = DropdownItemDetails;
const MenuKeyboard = DropdownKeyboard;
const MenuLabel = DropdownLabel;
Menu.Keyboard = MenuKeyboard;
Menu.Content = MenuContent;
Menu.Header = MenuHeader;
Menu.Item = MenuItem;
Menu.Section = MenuSection;
Menu.Separator = MenuSeparator;
Menu.ItemDetails = MenuItemDetails;
Menu.Label = MenuLabel;
Menu.Trigger = MenuTrigger;
Menu.Submenu = MenuSubMenu;
export { Menu };
