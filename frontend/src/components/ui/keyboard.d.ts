interface KeyboardProps extends React.HTMLAttributes<HTMLElement> {
    keys: string | string[];
    classNames?: {
        base?: string;
        kbd?: string;
    };
}
declare const Keyboard: ({ keys, classNames, className, ...props }: KeyboardProps) => import("react/jsx-runtime").JSX.Element;
export type { KeyboardProps };
export { Keyboard };
