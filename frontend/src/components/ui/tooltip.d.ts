import type { TooltipProps as TooltipPrimitiveProps } from "react-aria-components";
import { TooltipTrigger as TooltipTriggerPrimitive } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
declare const tooltipStyles: import("tailwind-variants").TVReturnType<{
    intent: {
        default: string;
        inverse: string;
    };
    isEntering: {
        true: string[];
    };
    isExiting: {
        true: string[];
    };
}, undefined, string[], {
    intent: {
        default: string;
        inverse: string;
    };
    isEntering: {
        true: string[];
    };
    isExiting: {
        true: string[];
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    intent: {
        default: string;
        inverse: string;
    };
    isEntering: {
        true: string[];
    };
    isExiting: {
        true: string[];
    };
}, undefined, string[], unknown, unknown, undefined>>;
type TooltipProps = React.ComponentProps<typeof TooltipTriggerPrimitive>;
declare const Tooltip: {
    (props: TooltipProps): import("react/jsx-runtime").JSX.Element;
    Trigger: (props: import("react-aria-components").ButtonProps & React.RefAttributes<HTMLButtonElement>) => React.ReactElement | null;
    Content: ({ offset, showArrow, intent, children, ...props }: TooltipContentProps) => import("react/jsx-runtime").JSX.Element;
};
interface TooltipContentProps extends Omit<TooltipPrimitiveProps, "children">, VariantProps<typeof tooltipStyles> {
    showArrow?: boolean;
    children: React.ReactNode;
}
export type { TooltipProps, TooltipContentProps };
export { Tooltip };
