import { jsx as _jsx } from "react/jsx-runtime";
import { tv } from "tailwind-variants";
const headingStyles = tv({
    base: "font-sans text-fg tracking-tight",
    variants: {
        level: {
            1: "font-bold text-xl sm:text-2xl",
            2: "font-semibold text-lg sm:text-xl",
            3: "font-semibold text-base sm:text-lg",
            4: "font-semibold text-base",
        },
        tracking: {
            tighter: "tracking-tighter",
            tight: "tracking-tight",
            normal: "tracking-normal",
            wide: "tracking-wide",
            wider: "tracking-wider",
            widest: "tracking-widest",
        },
    },
});
const Heading = ({ className, tracking = "normal", level = 1, ...props }) => {
    const Element = `h${level}`;
    return (_jsx(Element, { className: headingStyles({
            level,
            tracking,
            className,
        }), ...props }));
};
export { Heading };
