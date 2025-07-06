import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, OverlayArrow, Tooltip as TooltipPrimitive, TooltipTrigger as TooltipTriggerPrimitive, composeRenderProps, } from "react-aria-components";
import { tv } from "tailwind-variants";
const tooltipStyles = tv({
    base: [
        "group rounded-lg border px-2.5 py-1.5 text-sm will-change-transform dark:shadow-none [&_strong]:font-medium",
    ],
    variants: {
        intent: {
            default: "bg-overlay text-overlay-fg [&_.arx]:fill-overlay [&_.arx]:stroke-border",
            inverse: "border-transparent bg-fg text-bg [&_.arx]:fill-fg [&_.arx]:stroke-transparent dark:[&_.arx]:fill-white [&_.text-muted-fg]:text-bg/70 dark:[&_.text-muted-fg]:text-fg/70",
        },
        isEntering: {
            true: [
                "fade-in animate-in",
                "data-[placement=left]:slide-in-from-right-1 data-[placement=right]:slide-in-from-left-1 data-[placement=top]:slide-in-from-bottom-1 data-[placement=bottom]:slide-in-from-top-1",
            ],
        },
        isExiting: {
            true: [
                "fade-in direction-reverse animate-in",
                "data-[placement=left]:slide-out-to-right-1 data-[placement=right]:slide-out-to-left-1 data-[placement=top]:slide-out-to-bottom-1 data-[placement=bottom]:slide-out-to-top-1",
            ],
        },
    },
    defaultVariants: {
        intent: "default",
    },
});
const Tooltip = (props) => _jsx(TooltipTriggerPrimitive, { ...props });
const TooltipContent = ({ offset = 10, showArrow = true, intent = "default", children, ...props }) => {
    return (_jsxs(TooltipPrimitive, { ...props, offset: offset, className: composeRenderProps(props.className, (className, renderProps) => tooltipStyles({
            ...renderProps,
            intent,
            className,
        })), children: [showArrow && (_jsx(OverlayArrow, { children: _jsx("svg", { width: 12, height: 12, viewBox: "0 0 12 12", className: "arx group-data-[placement=left]:-rotate-90 group-data-[placement=bottom]:rotate-180 group-data-[placement=right]:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]", children: _jsx("path", { d: "M0 0 L6 6 L12 0" }) }) })), children] }));
};
const TooltipTrigger = Button;
Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;
export { Tooltip };
