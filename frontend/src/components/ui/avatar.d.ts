interface AvatarProps {
    src?: string | null;
    initials?: string;
    alt?: string;
    className?: string;
    shape?: "square" | "circle";
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
}
declare const Avatar: ({ src, shape, size, initials, alt, className, ...props }: AvatarProps & React.ComponentPropsWithoutRef<"span">) => import("react/jsx-runtime").JSX.Element;
export type { AvatarProps };
export { Avatar };
