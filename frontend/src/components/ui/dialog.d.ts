import type { HeadingProps } from "react-aria-components";
import { Button as ButtonPrimitive, Dialog as DialogPrimitive } from "react-aria-components";
import { type ButtonProps } from "./button";
declare const Dialog: {
    ({ role, className, ...props }: React.ComponentProps<typeof DialogPrimitive>): import("react/jsx-runtime").JSX.Element;
    Trigger: (props: React.ComponentProps<typeof ButtonPrimitive>) => import("react/jsx-runtime").JSX.Element;
    Header: ({ className, ...props }: DialogHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ level, className, ref, ...props }: DialogTitleProps) => import("react/jsx-runtime").JSX.Element;
    Description: ({ className, ref, ...props }: DialogDescriptionProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ className, ref, ...props }: DialogBodyProps) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: DialogFooterProps) => import("react/jsx-runtime").JSX.Element;
    Close: ({ className, intent, ref, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
    CloseIndicator: ({ className, ...props }: CloseButtonIndicatorProps) => import("react/jsx-runtime").JSX.Element | null;
};
type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    description?: string;
};
interface DialogTitleProps extends Omit<HeadingProps, "level"> {
    level?: 1 | 2 | 3 | 4;
    ref?: React.Ref<HTMLHeadingElement>;
}
type DialogDescriptionProps = React.ComponentProps<"div">;
type DialogBodyProps = React.ComponentProps<"div">;
type DialogFooterProps = React.ComponentProps<"div">;
interface CloseButtonIndicatorProps extends Omit<ButtonProps, "children"> {
    className?: string;
    isDismissable?: boolean | undefined;
}
export type { DialogHeaderProps, DialogTitleProps, DialogBodyProps, DialogFooterProps, DialogDescriptionProps, CloseButtonIndicatorProps, };
export { Dialog };
