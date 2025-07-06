import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogTrigger, Modal, ModalOverlay, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Dialog } from "./dialog";
const overlayStyles = tv({
    base: [
        "fixed top-0 left-0 isolate z-50 flex h-(--visual-viewport-height) w-full items-center justify-center bg-fg/15 p-4 dark:bg-bg/40",
    ],
    variants: {
        isBlurred: {
            true: "bg-bg/15 backdrop-blur dark:bg-bg/40",
        },
        isEntering: {
            true: "fade-in animate-in duration-300 ease-out",
        },
        isExiting: {
            true: "fade-out animate-out duration-200 ease-in",
        },
    },
});
const generateCompoundVariants = (sides) => {
    return sides.map((side) => ({
        side,
        isFloat: true,
        className: side === "top"
            ? "top-2 inset-x-2 rounded-xl ring-1 border-b-0"
            : side === "bottom"
                ? "bottom-2 inset-x-2 rounded-xl ring-1 border-t-0"
                : side === "left"
                    ? "left-2 inset-y-2 rounded-xl ring-1 border-r-0"
                    : "right-2 inset-y-2 rounded-xl ring-1 border-l-0",
    }));
};
const contentStyles = tv({
    base: "fixed z-50 grid gap-4 border-fg/5 bg-overlay text-overlay-fg shadow-lg transition ease-in-out dark:border-border",
    variants: {
        isEntering: {
            true: "animate-in duration-300 ",
        },
        isExiting: {
            true: "animate-out duration-200",
        },
        side: {
            top: "data-entering:slide-in-from-top data-exiting:slide-out-to-top inset-x-0 top-0 rounded-b-2xl border-b",
            bottom: "data-entering:slide-in-from-bottom data-exiting:slide-out-to-bottom inset-x-0 bottom-0 rounded-t-2xl border-t",
            left: "data-entering:slide-in-from-left data-exiting:slide-out-to-left inset-y-0 left-0 h-auto w-full max-w-xs overflow-y-auto border-r",
            right: "data-entering:slide-in-from-right data-exiting:slide-out-to-right inset-y-0 right-0 h-auto w-full max-w-xs overflow-y-auto border-l",
        },
        isFloat: {
            false: "border-fg/20 dark:border-border",
            true: "ring-fg/5 dark:ring-border",
        },
    },
    compoundVariants: generateCompoundVariants(["top", "bottom", "left", "right"]),
});
const Sheet = (props) => {
    return _jsx(DialogTrigger, { ...props });
};
const SheetContent = ({ classNames, isBlurred = false, isDismissable = true, side = "right", role = "dialog", closeButton = true, isFloat = true, children, ...props }) => {
    const _isDismissable = role === "alertdialog" ? false : isDismissable;
    return (_jsx(ModalOverlay, { isDismissable: _isDismissable, className: composeRenderProps(classNames?.overlay, (className, renderProps) => {
            return overlayStyles({
                ...renderProps,
                isBlurred,
                className,
            });
        }), ...props, children: _jsx(Modal, { className: composeRenderProps(classNames?.content, (className, renderProps) => contentStyles({
                ...renderProps,
                side,
                isFloat,
                className,
            })), ...props, children: (values) => (_jsx(Dialog, { role: role, "aria-label": props["aria-label"] ?? undefined, className: "h-full", children: _jsxs(_Fragment, { children: [typeof children === "function" ? children(values) : children, closeButton && (_jsx(Dialog.CloseIndicator, { className: "top-2.5 right-2.5", isDismissable: _isDismissable }))] }) })) }) }));
};
const SheetTrigger = Dialog.Trigger;
const SheetFooter = Dialog.Footer;
const SheetHeader = Dialog.Header;
const SheetTitle = Dialog.Title;
const SheetDescription = Dialog.Description;
const SheetBody = Dialog.Body;
const SheetClose = Dialog.Close;
Sheet.Trigger = SheetTrigger;
Sheet.Footer = SheetFooter;
Sheet.Header = SheetHeader;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Body = SheetBody;
Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
export { Sheet };
