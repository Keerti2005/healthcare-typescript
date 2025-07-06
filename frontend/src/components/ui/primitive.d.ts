declare function composeTailwindRenderProps<T>(className: string | ((v: T) => string) | undefined, tailwind: string): string | ((v: T) => string);
declare const focusRing: import("tailwind-variants").TVReturnType<{
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, undefined, {
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>;
declare const focusStyles: import("tailwind-variants").TVReturnType<{
    isFocused: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, undefined, {
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, undefined, {
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isFocused: {
        true: string;
    };
    isFocusVisible: {
        true: string;
    };
    isInvalid: {
        true: string;
    };
}, undefined, undefined, unknown, unknown, undefined>>>;
export { composeTailwindRenderProps, focusRing, focusStyles };
