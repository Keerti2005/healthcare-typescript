import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogTrigger, Modal, ModalOverlay, OverlayArrow, PopoverContext, Popover as PopoverPrimitive, composeRenderProps, useSlottedContext, } from "react-aria-components";
import { tv } from "tailwind-variants";
import { useMediaQuery } from "@/utils/use-media-query";
import { twMerge } from "tailwind-merge";
import { Dialog } from "./dialog";
const Popover = (props) => {
    return _jsx(DialogTrigger, { ...props });
};
const PopoverTitle = ({ level = 2, className, ...props }) => (_jsx(Dialog.Title, { className: twMerge("sm:leading-none", level === 2 && "sm:text-lg", className), ...props }));
const PopoverHeader = ({ className, ...props }) => (_jsx(Dialog.Header, { className: twMerge("sm:p-4", className), ...props }));
const PopoverFooter = ({ className, ...props }) => (_jsx(Dialog.Footer, { className: twMerge("sm:p-4", className), ...props }));
const PopoverBody = ({ className, ref, ...props }) => (_jsx(Dialog.Body, { ref: ref, className: twMerge("sm:px-4 sm:pt-0", className), ...props }));
const content = tv({
    base: [
        "peer/popover-content max-w-xs rounded-xl border bg-overlay bg-clip-padding text-overlay-fg shadow-xs transition-transform [scrollbar-width:thin] sm:max-w-3xl sm:text-sm dark:backdrop-saturate-200 forced-colors:bg-[Canvas] [&::-webkit-scrollbar]:size-0.5",
    ],
    variants: {
        isPicker: {
            true: "max-h-72 min-w-(--trigger-width) overflow-y-auto",
            false: "min-w-80",
        },
        isMenu: {
            true: "",
        },
        isEntering: {
            true: [
                "fade-in animate-in duration-150 ease-out",
                "data-[placement=left]:slide-in-from-right-1 data-[placement=right]:slide-in-from-left-1 data-[placement=top]:slide-in-from-bottom-1 data-[placement=bottom]:slide-in-from-top-1",
            ],
        },
        isExiting: {
            true: [
                "fade-out animate-out duration-100 ease-in",
                "data-[placement=left]:slide-out-to-right-1 data-[placement=right]:slide-out-to-left-1 data-[placement=top]:slide-out-to-bottom-1 data-[placement=bottom]:slide-out-to-top-1",
            ],
        },
    },
});
const drawer = tv({
    base: [
        "fixed top-auto bottom-0 z-50 max-h-full w-full max-w-2xl border border-b-transparent bg-overlay outline-hidden",
    ],
    variants: {
        isMenu: {
            true: "rounded-t-xl p-0 [&_[role=dialog]]:*:not-has-[[data-slot=dialog-body]]:px-1",
            false: "rounded-t-2xl",
        },
        isEntering: {
            true: [
                "[transition:transform_0.5s_cubic-bezier(0.32,_0.72,_0,_1)] [will-change:transform]",
                "fade-in-0 slide-in-from-bottom-56 animate-in duration-200",
                "[transition:translate3d(0,_100%,_0)]",
                "sm:slide-in-from-bottom-auto sm:slide-in-from-top-[20%]",
            ],
        },
        isExiting: {
            true: "slide-out-to-bottom-56 animate-out duration-200 ease-in",
        },
    },
});
const PopoverContent = ({ respectScreen = true, children, showArrow = true, className, ...props }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const popoverContext = useSlottedContext(PopoverContext);
    const isMenuTrigger = popoverContext?.trigger === "MenuTrigger";
    const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger";
    const isMenu = isMenuTrigger || isSubmenuTrigger;
    const isComboBoxTrigger = popoverContext?.trigger === "ComboBox";
    const offset = showArrow ? 12 : 8;
    const effectiveOffset = isSubmenuTrigger ? offset - 5 : offset;
    return isMobile && respectScreen ? (_jsx(ModalOverlay, { className: "fixed top-0 left-0 isolate z-50 h-(--visual-viewport-height) w-full bg-overlay/10 [--visual-viewport-vertical-padding:16px]", ...props, isDismissable: true, children: _jsx(Modal, { className: composeRenderProps(className, (className, renderProps) => drawer({ ...renderProps, isMenu, className })), children: _jsx(Dialog, { role: "dialog", "aria-label": props["aria-label"] ?? "List item", children: children }) }) })) : (_jsxs(PopoverPrimitive, { offset: effectiveOffset, className: composeRenderProps(className, (className, renderProps) => content({
            ...renderProps,
            className,
        })), ...props, children: [showArrow && (_jsx(OverlayArrow, { className: "group", children: _jsx("svg", { width: 12, height: 12, viewBox: "0 0 12 12", className: "group-data-[placement=left]:-rotate-90 block fill-overlay stroke-border group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]", children: _jsx("path", { d: "M0 0 L6 6 L12 0" }) }) })), !isComboBoxTrigger ? (_jsx(Dialog, { role: "dialog", "aria-label": props["aria-label"] ?? "List item", children: children })) : (children)] }));
};
const PopoverTrigger = Dialog.Trigger;
const PopoverClose = Dialog.Close;
const PopoverDescription = Dialog.Description;
Popover.Trigger = PopoverTrigger;
Popover.Close = PopoverClose;
Popover.Description = PopoverDescription;
Popover.Content = PopoverContent;
Popover.Body = PopoverBody;
Popover.Footer = PopoverFooter;
Popover.Header = PopoverHeader;
Popover.Title = PopoverTitle;
export { Popover, PopoverContent };
