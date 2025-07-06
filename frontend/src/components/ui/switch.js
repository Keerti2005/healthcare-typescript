import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch as SwitchPrimitive, } from "react-aria-components";
import { composeTailwindRenderProps } from "./primitive";
const Switch = ({ children, className, ref, ...props }) => {
    return (_jsx(SwitchPrimitive, { ref: ref, ...props, className: composeTailwindRenderProps(className, "group inline-flex touch-none items-center sm:text-sm"), style: { WebkitTapHighlightColor: "transparent" }, children: (values) => (_jsxs(_Fragment, { children: [_jsx("span", { className: "mr-2 h-5 w-8 cursor-pointer rounded-full border-2 border-transparent bg-(--switch) transition duration-200 [--switch:color-mix(in_oklab,var(--color-muted)_90%,black_10%)] group-invalid:ring-danger/20 group-focus:ring-4 group-focus:ring-primary/20 group-disabled:cursor-default group-disabled:opacity-50 group-selected:bg-primary dark:[--switch:color-mix(in_oklab,var(--color-muted)_85%,white_15%)]", children: _jsx("span", { className: "block size-4 origin-right rounded-full bg-primary-fg shadow-sm transition-all duration-200 group-selected:ml-3 group-pressed:w-5 group-selected:group-data-[pressed]:ml-2 forced-colors:disabled:outline-[GrayText]" }) }), typeof children === "function" ? children(values) : children] })) }));
};
export { Switch };
