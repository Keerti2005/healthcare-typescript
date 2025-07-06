import type { ListBoxItemProps, SectionProps, SeparatorProps, TextProps } from "react-aria-components";
import { Keyboard } from "./keyboard";
declare const dropdownItemStyles: import("tailwind-variants").TVReturnType<{
    isDisabled: {
        true: string;
    };
    isSelected: {
        true: string;
    };
    isFocused: {
        false: string;
        true: string[];
    };
}, undefined, string[], {
    isDisabled: {
        true: string;
    };
    isSelected: {
        true: string;
    };
    isFocused: {
        false: string;
        true: string[];
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    isDisabled: {
        true: string;
    };
    isSelected: {
        true: string;
    };
    isFocused: {
        false: string;
        true: string[];
    };
}, undefined, string[], unknown, unknown, undefined>>;
declare const dropdownSectionStyles: import("tailwind-variants").TVReturnType<{
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            header?: import("tailwind-variants").ClassValue;
            section?: import("tailwind-variants").ClassValue;
        };
    };
} | {
    [x: string]: {
        [x: string]: import("tailwind-variants").ClassValue | {
            header?: import("tailwind-variants").ClassValue;
            section?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    section: string;
    header: string;
}, undefined, {
    [key: string]: {
        [key: string]: import("tailwind-variants").ClassValue | {
            header?: import("tailwind-variants").ClassValue;
            section?: import("tailwind-variants").ClassValue;
        };
    };
} | {}, {
    section: string;
    header: string;
}, import("tailwind-variants").TVReturnType<unknown, {
    section: string;
    header: string;
}, undefined, unknown, unknown, undefined>>;
interface DropdownSectionProps<T> extends SectionProps<T> {
    title?: string;
}
declare const DropdownSection: <T extends object>({ className, ...props }: DropdownSectionProps<T>) => import("react/jsx-runtime").JSX.Element;
type DropdownItemProps = ListBoxItemProps;
declare const DropdownItem: ({ className, ...props }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
interface DropdownItemDetailProps extends TextProps {
    label?: TextProps["children"];
    description?: TextProps["children"];
    classNames?: {
        label?: TextProps["className"];
        description?: TextProps["className"];
    };
}
declare const DropdownItemDetails: ({ label, description, classNames, ...props }: DropdownItemDetailProps) => import("react/jsx-runtime").JSX.Element;
interface DropdownLabelProps extends TextProps {
    ref?: React.Ref<HTMLDivElement>;
}
declare const DropdownLabel: ({ className, ref, ...props }: DropdownLabelProps) => import("react/jsx-runtime").JSX.Element;
declare const DropdownSeparator: ({ className, ...props }: SeparatorProps) => import("react/jsx-runtime").JSX.Element;
declare const DropdownKeyboard: ({ className, ...props }: React.ComponentProps<typeof Keyboard>) => import("react/jsx-runtime").JSX.Element;
/**
 * Note: This is not exposed component, but it's used in other components to render dropdowns.
 * @internal
 */
export type { DropdownSectionProps, DropdownLabelProps, DropdownItemProps, DropdownItemDetailProps };
export { DropdownSeparator, DropdownItem, DropdownLabel, DropdownKeyboard, dropdownItemStyles, DropdownItemDetails, DropdownSection, dropdownSectionStyles, };
