import { jsx as _jsx } from "react/jsx-runtime";
import { useVisuallyHidden } from "react-aria";
const VisuallyHidden = ({ children }) => {
    const { visuallyHiddenProps } = useVisuallyHidden();
    return _jsx("span", { ...visuallyHiddenProps, children: children });
};
export { VisuallyHidden };
