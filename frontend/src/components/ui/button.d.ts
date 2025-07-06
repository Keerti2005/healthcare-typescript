import { type ButtonProps as ButtonPrimitiveProps } from "react-aria-components";
declare const buttonStyles: import("tailwind-variants").TVReturnType<{
    intent: {
        primary: string[];
        secondary: string[];
        warning: string[];
        danger: string[];
        outline: string[];
        plain: string[];
    };
    size: {
        "extra-small": string;
        small: string;
        medium: string;
        large: string;
        "square-petite": string;
    };
    shape: {
        square: string;
        circle: string;
    };
    isDisabled: {
        false: string;
        true: string;
    };
    isPending: {
        true: string;
    };
}, undefined, string[], {
    intent: {
        primary: string[];
        secondary: string[];
        warning: string[];
        danger: string[];
        outline: string[];
        plain: string[];
    };
    size: {
        "extra-small": string;
        small: string;
        medium: string;
        large: string;
        "square-petite": string;
    };
    shape: {
        square: string;
        circle: string;
    };
    isDisabled: {
        false: string;
        true: string;
    };
    isPending: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    intent: {
        primary: string[];
        secondary: string[];
        warning: string[];
        danger: string[];
        outline: string[];
        plain: string[];
    };
    size: {
        "extra-small": string;
        small: string;
        medium: string;
        large: string;
        "square-petite": string;
    };
    shape: {
        square: string;
        circle: string;
    };
    isDisabled: {
        false: string;
        true: string;
    };
    isPending: {
        true: string;
    };
}, undefined, string[], unknown, unknown, undefined>>;
interface ButtonProps extends ButtonPrimitiveProps {
    intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain";
    size?: "medium" | "large" | "square-petite" | "extra-small" | "small";
    shape?: "square" | "circle";
    ref?: React.Ref<HTMLButtonElement>;
}
declare const Button: ({ className, intent, size, shape, ref, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export type { ButtonProps };
export { Button, buttonStyles };
