import { jsx as _jsx } from "react/jsx-runtime";
import { Keyboard as KeyboardPrimitive } from "react-aria-components";
import { twMerge } from "tailwind-merge";
const Keyboard = ({ keys, classNames, className, ...props }) => {
    return (_jsx(KeyboardPrimitive, { className: twMerge("hidden font-mono text-current/60 group-hover:text-fg group-focus:text-fg group-focus:opacity-90 group-disabled:opacity-50 lg:inline-flex forced-colors:group-focus:text-[HighlightText] forced-colors:group-focus:text-[HighlightText]", classNames?.base), ...props, children: (Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (_jsx("kbd", { className: twMerge("tracking-widest", index > 0 && char.length > 1 && "pl-1", classNames?.kbd), children: char }, index))) }));
};
export { Keyboard };
