import type { BreadcrumbProps, BreadcrumbsProps, LinkProps } from "react-aria-components";
type BreadcrumbsContextProps = {
    separator?: "chevron" | "slash" | boolean;
};
declare const Breadcrumbs: {
    <T extends object>({ className, ...props }: BreadcrumbsProps<T> & BreadcrumbsContextProps): import("react/jsx-runtime").JSX.Element;
    Item: ({ href, separator, className, ...props }: BreadcrumbsItemProps & Partial<Omit<LinkProps, "className">>) => import("react/jsx-runtime").JSX.Element;
};
interface BreadcrumbsItemProps extends BreadcrumbProps, BreadcrumbsContextProps {
    href?: string;
}
declare const BreadcrumbsItem: ({ href, separator, className, ...props }: BreadcrumbsItemProps & Partial<Omit<LinkProps, "className">>) => import("react/jsx-runtime").JSX.Element;
export type { BreadcrumbsProps, BreadcrumbsItemProps };
export { Breadcrumbs, BreadcrumbsItem };
