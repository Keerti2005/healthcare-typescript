import type { DialogProps, DialogTriggerProps, ModalOverlayProps, PopoverProps as PopoverPrimitiveProps } from "react-aria-components";
import type { DialogBodyProps, DialogFooterProps, DialogHeaderProps, DialogTitleProps } from "./dialog";
type PopoverProps = DialogTriggerProps;
declare const Popover: {
    (props: PopoverProps): import("react/jsx-runtime").JSX.Element;
    Trigger: (props: React.ComponentProps<typeof import("react-aria-components").Button>) => import("react/jsx-runtime").JSX.Element;
    Close: ({ className, intent, ref, ...props }: import("./button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    Description: ({ className, ref, ...props }: import("./dialog").DialogDescriptionProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ respectScreen, children, showArrow, className, ...props }: PopoverContentProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, ref, ...props }: DialogBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: DialogFooterProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ className, ...props }: DialogHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ level, className, ...props }: DialogTitleProps) => import("react/jsx-runtime").JSX.Element;
};
interface PopoverContentProps extends Omit<PopoverPrimitiveProps, "children" | "className">, Omit<ModalOverlayProps, "className">, Pick<DialogProps, "aria-label" | "aria-labelledby"> {
    children: React.ReactNode;
    showArrow?: boolean;
    style?: React.CSSProperties;
    respectScreen?: boolean;
    className?: string | ((values: {
        defaultClassName?: string;
    }) => string);
}
declare const PopoverContent: ({ respectScreen, children, showArrow, className, ...props }: PopoverContentProps) => import("react/jsx-runtime").JSX.Element;
export type { PopoverProps, PopoverContentProps };
export { Popover, PopoverContent };
