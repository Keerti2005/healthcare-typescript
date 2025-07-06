import type { DialogProps, DialogTriggerProps, ModalOverlayProps } from "react-aria-components";
import { Modal } from "react-aria-components";
import { type VariantProps } from "tailwind-variants";
declare const overlayStyles: import("tailwind-variants").TVReturnType<{
    isBlurred: {
        true: string;
    };
    isEntering: {
        true: string;
    };
    isExiting: {
        true: string;
    };
}, undefined, string[], {
    isBlurred: {
        true: string;
    };
    isEntering: {
        true: string;
    };
    isExiting: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isBlurred: {
        true: string;
    };
    isEntering: {
        true: string;
    };
    isExiting: {
        true: string;
    };
}, undefined, string[], unknown, unknown, undefined>>;
type Sides = "top" | "bottom" | "left" | "right";
type SheetProps = DialogTriggerProps;
declare const Sheet: {
    (props: SheetProps): import("react/jsx-runtime").JSX.Element;
    Trigger: (props: React.ComponentProps<typeof import("react-aria-components").Button>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: import("./dialog").DialogFooterProps) => import("react/jsx-runtime").JSX.Element;
    Header: ({ className, ...props }: import("./dialog").DialogHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ level, className, ref, ...props }: import("./dialog").DialogTitleProps) => import("react/jsx-runtime").JSX.Element;
    Description: ({ className, ref, ...props }: import("./dialog").DialogDescriptionProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, ref, ...props }: import("./dialog").DialogBodyProps) => import("react/jsx-runtime").JSX.Element;
    Close: ({ className, intent, ref, ...props }: import("./button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    Content: ({ classNames, isBlurred, isDismissable, side, role, closeButton, isFloat, children, ...props }: SheetContentProps) => import("react/jsx-runtime").JSX.Element;
};
interface SheetContentProps extends Omit<React.ComponentProps<typeof Modal>, "children" | "className">, Omit<ModalOverlayProps, "className">, VariantProps<typeof overlayStyles> {
    "aria-label"?: DialogProps["aria-label"];
    "aria-labelledby"?: DialogProps["aria-labelledby"];
    role?: DialogProps["role"];
    closeButton?: boolean;
    isBlurred?: boolean;
    isFloat?: boolean;
    side?: Sides;
    classNames?: {
        overlay?: ModalOverlayProps["className"];
        content?: ModalOverlayProps["className"];
    };
}
export type { SheetProps, SheetContentProps, Sides };
export { Sheet };
