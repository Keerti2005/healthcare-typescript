declare const Card: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    Content: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
    Description: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
    Header: ({ className, title, description, children, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
    Title: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
    Action: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
};
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
}
declare const CardHeader: ({ className, title, description, children, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
declare const CardTitle: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const CardDescription: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
declare const CardAction: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
declare const CardContent: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
declare const CardFooter: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction };
