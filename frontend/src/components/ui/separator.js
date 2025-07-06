import { jsx as _jsx } from "react/jsx-runtime";
import { Separator as Divider } from "react-aria-components";
import { twMerge } from "tailwind-merge";
const Separator = ({ className, ...props }) => {
    return (_jsx(Divider, { ...props, className: twMerge("shrink-0 bg-border forced-colors:bg-[ButtonBorder]", props.orientation === "horizontal" ? "h-px w-full" : "w-px", className) }));
};
export { Separator };
