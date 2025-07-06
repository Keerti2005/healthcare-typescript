import { type SwitchProps as SwitchPrimitiveProps } from "react-aria-components";
interface SwitchProps extends SwitchPrimitiveProps {
    ref?: React.RefObject<HTMLLabelElement>;
}
declare const Switch: ({ children, className, ref, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export type { SwitchProps };
export { Switch };
