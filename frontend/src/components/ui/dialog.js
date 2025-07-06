import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { IconX } from "@intentui/icons";
import { Button as ButtonPrimitive, Dialog as DialogPrimitive, Heading, Text, } from "react-aria-components";
import { composeTailwindRenderProps } from "@/components/ui/primitive";
import { useMediaQuery } from "@/utils/use-media-query";
import { twJoin, twMerge } from "tailwind-merge";
import { Button } from "./button";
const Dialog = ({ role = "dialog", className, ...props }) => {
    return (_jsx(DialogPrimitive, { role: role, className: twMerge("peer/dialog group/dialog relative flex max-h-[inherit] flex-col overflow-hidden outline-hidden [scrollbar-width:thin] [&::-webkit-scrollbar]:size-0.5", className), ...props }));
};
const Trigger = (props) => (_jsx(ButtonPrimitive, { ...props }));
const Header = ({ className, ...props }) => {
    const headerRef = useRef(null);
    useEffect(() => {
        const header = headerRef.current;
        if (!header) {
            return;
        }
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                header.parentElement?.style.setProperty("--dialog-header-height", `${entry.target.clientHeight}px`);
            }
        });
        observer.observe(header);
        return () => observer.unobserve(header);
    }, []);
    return (_jsxs("div", { "data-slot": "dialog-header", ref: headerRef, className: twMerge("relative flex flex-col gap-0.5 p-4 sm:gap-1 sm:p-6 [&[data-slot=dialog-header]:has(+[data-slot=dialog-footer])]:pb-0", className), children: [props.title && _jsx(Title, { children: props.title }), props.description && _jsx(Description, { children: props.description }), !props.title && typeof props.children === "string" ? _jsx(Title, { ...props }) : props.children] }));
};
const Title = ({ level = 2, className, ref, ...props }) => (_jsx(Heading, { slot: "title", level: level, ref: ref, className: twMerge(twJoin("flex flex-1 items-center text-fg", level === 1 && "font-semibold text-lg sm:text-xl", level === 2 && "font-semibold text-lg sm:text-xl", level === 3 && "font-semibold text-base sm:text-lg", level === 4 && "font-semibold text-base"), className), ...props }));
const Description = ({ className, ref, ...props }) => (_jsx(Text, { slot: "description", className: twMerge("text-muted-fg text-sm", className), ref: ref, ...props }));
const Body = ({ className, ref, ...props }) => (_jsx("div", { "data-slot": "dialog-body", ref: ref, className: twMerge("isolate flex max-h-[calc(var(--visual-viewport-height)-var(--visual-viewport-vertical-padding)-var(--dialog-header-height,0px)-var(--dialog-footer-height,0px))] flex-1 flex-col overflow-auto px-4 py-1 sm:px-6", className), ...props }));
const Footer = ({ className, ...props }) => {
    const footerRef = useRef(null);
    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) {
            return;
        }
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                footer.parentElement?.style.setProperty("--dialog-footer-height", `${entry.target.clientHeight}px`);
            }
        });
        observer.observe(footer);
        return () => {
            observer.unobserve(footer);
        };
    }, []);
    return (_jsx("div", { ref: footerRef, "data-slot": "dialog-footer", className: twMerge("isolate mt-auto flex flex-col-reverse justify-between gap-3 p-4 pt-3 sm:flex-row sm:p-6 sm:pt-5", className), ...props }));
};
const Close = ({ className, intent = "outline", ref, ...props }) => {
    return _jsx(Button, { slot: "close", className: className, ref: ref, intent: intent, ...props });
};
const CloseIndicator = ({ className, ...props }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const buttonRef = useRef(null);
    useEffect(() => {
        if (isMobile && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isMobile]);
    return props.isDismissable ? (_jsx(ButtonPrimitive, { ref: buttonRef, ...(isMobile ? { autoFocus: true } : {}), "aria-label": "Close", slot: "close", className: composeTailwindRenderProps(className, "close absolute top-1 right-1 z-50 grid size-8 place-content-center rounded-xl hover:bg-secondary focus:bg-secondary focus:outline-hidden focus-visible:ring-1 focus-visible:ring-primary sm:top-2 sm:right-2 sm:size-7 sm:rounded-md"), children: _jsx(IconX, { className: "size-4" }) })) : null;
};
Dialog.Trigger = Trigger;
Dialog.Header = Header;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Close = Close;
Dialog.CloseIndicator = CloseIndicator;
export { Dialog };
