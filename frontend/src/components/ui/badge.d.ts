import { type VariantProps } from "tailwind-variants";
declare const badgeIntents: {
    primary: string[];
    secondary: string[];
    success: string[];
    info: string;
    warning: string;
    danger: string;
};
declare const badgeShapes: {
    square: string;
    circle: string;
};
declare const badgeStyles: import("tailwind-variants").TVReturnType<{
    intent: {
        primary: string[];
        secondary: string[];
        success: string[];
        info: string;
        warning: string;
        danger: string;
    };
    shape: {
        square: string;
        circle: string;
    };
}, undefined, "inline-flex items-center gap-x-1.5 py-0.5 font-medium text-xs/5 **:data-[slot=icon]:size-3 forced-colors:outline", {
    intent: {
        primary: string[];
        secondary: string[];
        success: string[];
        info: string;
        warning: string;
        danger: string;
    };
    shape: {
        square: string;
        circle: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    intent: {
        primary: string[];
        secondary: string[];
        success: string[];
        info: string;
        warning: string;
        danger: string;
    };
    shape: {
        square: string;
        circle: string;
    };
}, undefined, "inline-flex items-center gap-x-1.5 py-0.5 font-medium text-xs/5 **:data-[slot=icon]:size-3 forced-colors:outline", unknown, unknown, undefined>>;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeStyles> {
    className?: string;
    children: React.ReactNode;
}
declare const Badge: ({ children, intent, shape, className, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export type { BadgeProps };
export { Badge, badgeIntents, badgeStyles, badgeShapes };
