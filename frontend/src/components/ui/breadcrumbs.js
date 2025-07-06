import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { IconChevronLgRight } from "@intentui/icons";
import { createContext, use } from "react";
import { Breadcrumb, Breadcrumbs as BreadcrumbsPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Link } from "./link";
import { composeTailwindRenderProps } from "./primitive";
const BreadcrumbsProvider = createContext({
    separator: "chevron",
});
const Breadcrumbs = ({ className, ...props }) => {
    return (_jsx(BreadcrumbsProvider, { value: { separator: props.separator }, children: _jsx(BreadcrumbsPrimitive, { ...props, className: twMerge("flex items-center gap-2", className) }) }));
};
const BreadcrumbsItem = ({ href, separator = true, className, ...props }) => {
    const { separator: contextSeparator } = use(BreadcrumbsProvider);
    separator = contextSeparator ?? separator;
    const separatorValue = separator === true ? "chevron" : separator;
    return (_jsx(Breadcrumb, { ...props, className: composeTailwindRenderProps(className, "flex items-center gap-2 text-sm"), children: ({ isCurrent }) => (_jsxs(_Fragment, { children: [_jsx(Link, { href: href, ...props }), !isCurrent && separator !== false && _jsx(Separator, { separator: separatorValue })] })) }));
};
const Separator = ({ separator = "chevron", }) => {
    return (_jsxs("span", { className: "*:shrink-0 *:text-muted-fg *:data-[slot=icon]:size-3.5", children: [separator === "chevron" && _jsx(IconChevronLgRight, {}), separator === "slash" && _jsx("span", { className: "text-muted-fg", children: "/" })] }));
};
Breadcrumbs.Item = BreadcrumbsItem;
export { Breadcrumbs, BreadcrumbsItem };
