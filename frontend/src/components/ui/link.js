import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { composeTailwindRenderProps } from "@/components/ui/primitive";
import { Link as LinkPrimitive } from "react-aria-components";
import { twJoin } from "tailwind-merge";
const Link = ({ className, ref, intent = "unstyled", ...props }) => {
    return (_jsx(LinkPrimitive, { ref: ref, ...props, className: composeTailwindRenderProps(className, twJoin([
            "outline-0 outline-offset-2 transition-[color,_opacity] focus-visible:outline-2 focus-visible:outline-ring forced-colors:outline-[Highlight]",
            "disabled:cursor-default disabled:opacity-60 forced-colors:disabled:text-[GrayText]",
            intent === "unstyled" && "text-current",
            intent === "primary" && "text-primary hover:underline",
            intent === "secondary" && "text-secondary-fg hover:underline",
        ])), children: (values) => (_jsx(_Fragment, { children: typeof props.children === "function" ? props.children(values) : props.children })) }));
};
export { Link };
