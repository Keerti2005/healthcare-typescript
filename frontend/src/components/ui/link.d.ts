import { type LinkProps as LinkPrimitiveProps } from "react-aria-components";
interface LinkProps extends LinkPrimitiveProps {
    intent?: "primary" | "secondary" | "unstyled";
    ref?: React.RefObject<HTMLAnchorElement>;
}
declare const Link: ({ className, ref, intent, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export type { LinkProps };
export { Link };
