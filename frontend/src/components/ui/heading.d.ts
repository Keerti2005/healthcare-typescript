type HeadingType = {
    level?: 1 | 2 | 3 | 4;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4">;
interface HeadingProps extends HeadingType {
    tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
    className?: string | undefined;
}
declare const Heading: ({ className, tracking, level, ...props }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export type { HeadingProps };
export { Heading };
