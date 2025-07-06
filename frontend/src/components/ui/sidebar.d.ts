import type { ButtonProps, DisclosureGroupProps, DisclosureProps, LinkProps, LinkRenderProps, SeparatorProps as SidebarSeparatorProps } from "react-aria-components";
import { DisclosurePanel, Link, Text } from "react-aria-components";
import { Button } from "./button";
type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    isOpenOnMobile: boolean;
    setIsOpenOnMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare const useSidebar: () => SidebarContextProps;
interface SidebarProviderProps extends React.ComponentProps<"div"> {
    defaultOpen?: boolean;
    isOpen?: boolean;
    shortcut?: string;
    onOpenChange?: (open: boolean) => void;
}
declare const SidebarProvider: ({ defaultOpen, isOpen: openProp, onOpenChange: setOpenProp, className, children, shortcut, ref, ...props }: SidebarProviderProps) => import("react/jsx-runtime").JSX.Element;
interface SidebarProps extends React.ComponentProps<"div"> {
    intent?: "default" | "float" | "inset" | "fleet";
    collapsible?: "hidden" | "dock" | "none";
    side?: "left" | "right";
    closeButton?: boolean;
}
declare const Sidebar: ({ closeButton, collapsible, side, intent, className, ...props }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
declare const SidebarHeader: ({ className, ref, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarFooter: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarContent: ({ className, ...props }: React.ComponentProps<"div">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarSectionGroup: ({ className, ...props }: React.ComponentProps<"section">) => import("react/jsx-runtime").JSX.Element;
declare const SidebarSection: ({ className, ...props }: React.ComponentProps<"div"> & {
    title?: string;
}) => import("react/jsx-runtime").JSX.Element;
interface SidebarItemProps extends Omit<React.ComponentProps<typeof Link>, "children"> {
    isCurrent?: boolean;
    tooltip?: React.ReactNode | string;
    children?: React.ReactNode | ((values: LinkRenderProps & {
        defaultChildren: React.ReactNode;
        isCollapsed: boolean;
    }) => React.ReactNode);
    badge?: string | number | undefined;
}
declare const SidebarItem: ({ isCurrent, tooltip, children, badge, className, ref, ...props }: SidebarItemProps) => import("react/jsx-runtime").JSX.Element;
interface SidebarLinkProps extends LinkProps {
    ref?: React.Ref<HTMLAnchorElement>;
}
declare const SidebarLink: ({ className, ref, ...props }: SidebarLinkProps) => import("react/jsx-runtime").JSX.Element;
declare const SidebarInset: ({ className, ref, ...props }: React.ComponentProps<"main">) => import("react/jsx-runtime").JSX.Element;
type SidebarDisclosureGroupProps = DisclosureGroupProps;
declare const SidebarDisclosureGroup: ({ allowsMultipleExpanded, className, ...props }: SidebarDisclosureGroupProps) => import("react/jsx-runtime").JSX.Element;
interface SidebarDisclosureProps extends DisclosureProps {
    ref?: React.Ref<HTMLDivElement>;
}
declare const SidebarDisclosure: ({ className, ref, ...props }: SidebarDisclosureProps) => import("react/jsx-runtime").JSX.Element;
interface SidebarDisclosureTriggerProps extends ButtonProps {
    ref?: React.Ref<HTMLButtonElement>;
}
declare const SidebarDisclosureTrigger: ({ className, ref, ...props }: SidebarDisclosureTriggerProps) => import("react/jsx-runtime").JSX.Element;
declare const SidebarDisclosurePanel: (props: React.ComponentProps<typeof DisclosurePanel>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarSeparator: ({ className, ...props }: SidebarSeparatorProps) => import("react/jsx-runtime").JSX.Element;
declare const SidebarTrigger: ({ onPress, children, ...props }: React.ComponentProps<typeof Button>) => import("react/jsx-runtime").JSX.Element;
declare const SidebarRail: ({ className, ref, ...props }: React.ComponentProps<"button">) => import("react/jsx-runtime").JSX.Element;
type SidebarLabelProps = React.ComponentProps<typeof Text>;
declare const SidebarLabel: ({ className, ref, ...props }: SidebarLabelProps) => import("react/jsx-runtime").JSX.Element | null;
interface SidebarNavProps extends React.ComponentProps<"nav"> {
    isSticky?: boolean;
}
declare const SidebarNav: ({ isSticky, className, ...props }: SidebarNavProps) => import("react/jsx-runtime").JSX.Element;
export type { SidebarProviderProps, SidebarProps, SidebarItemProps, SidebarNavProps, SidebarDisclosureGroupProps, SidebarDisclosureProps, SidebarSeparatorProps, SidebarLabelProps, SidebarLinkProps, SidebarDisclosureTriggerProps, };
export { SidebarProvider, SidebarNav, SidebarHeader, SidebarContent, SidebarSectionGroup, SidebarSection, SidebarItem, SidebarLink, SidebarFooter, Sidebar, SidebarDisclosureGroup, SidebarDisclosure, SidebarSeparator, SidebarDisclosureTrigger, SidebarDisclosurePanel, SidebarTrigger, SidebarLabel, SidebarInset, SidebarRail, useSidebar, };
