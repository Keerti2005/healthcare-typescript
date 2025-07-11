import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMediaQuery } from "@/utils/use-media-query";
import { IconChevronLgDown, IconHamburger, IconSidebarFill } from "@intentui/icons";
import { createContext, use, useCallback, useEffect, useMemo, useState } from "react";
import { Disclosure, DisclosureGroup, DisclosurePanel, Header, Heading, Link, Separator, Text, Button as Trigger, composeRenderProps, } from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { Badge } from "./badge";
import { Button } from "./button";
import { composeTailwindRenderProps } from "./primitive";
import { Sheet } from "./sheet";
import { Tooltip } from "./tooltip";
const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SidebarContext = createContext(null);
const useSidebar = () => {
    const context = use(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a Sidebar.");
    }
    return context;
};
const SidebarProvider = ({ defaultOpen = true, isOpen: openProp, onOpenChange: setOpenProp, className, children, shortcut = "b", ref, ...props }) => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const [openMobile, setOpenMobile] = useState(false);
    const [internalOpenState, setInternalOpenState] = useState(defaultOpen);
    const open = openProp ?? internalOpenState;
    const setOpen = useCallback((value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        }
        else {
            setInternalOpenState(openState);
        }
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [setOpenProp, open]);
    const toggleSidebar = useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen]);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === shortcut && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar, shortcut]);
    const state = open ? "expanded" : "collapsed";
    const contextValue = useMemo(() => ({
        state,
        open,
        setOpen,
        isMobile,
        isOpenOnMobile: openMobile,
        setIsOpenOnMobile: setOpenMobile,
        toggleSidebar,
    }), [state, open, setOpen, isMobile, openMobile, toggleSidebar]);
    return (_jsx(SidebarContext, { value: contextValue, children: _jsx("div", { className: twMerge("@container **:data-[slot=icon]:shrink-0", "[--sidebar-width-dock:3.25rem] [--sidebar-width:17rem]", "[--sidebar-border:color-mix(in_oklch,var(--color-sidebar)_25%,black_6%)]", "dark:[--sidebar-border:color-mix(in_oklch,var(--color-sidebar)_55%,white_10%)]", "[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_95%,black_5%)]", "dark:[--sidebar-accent:color-mix(in_oklab,var(--color-sidebar)_90%,white_10%)]", "flex min-h-svh w-full text-sidebar-fg", "group/sidebar-root has-data-[sidebar-intent=inset]:bg-sidebar dark:has-data-[sidebar-intent=inset]:bg-bg", className), ref: ref, ...props, children: children }) }));
};
const gap = tv({
    base: [
        "w-(--sidebar-width) group-data-[sidebar-collapsible=hidden]/sidebar-container:w-0",
        "relative h-svh bg-transparent transition-[width] duration-200 ease-linear",
        "group-data-[sidebar-side=right]/sidebar-container:rotate-180",
    ],
    variants: {
        intent: {
            default: "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)",
            fleet: "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)",
            float: "group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.4))]",
            inset: "group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.2))]",
        },
    },
});
const sidebar = tv({
    base: [
        "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) not-has-data-sidebar-footer:pb-2 transition-[left,right,width] duration-200 ease-linear md:flex",
        "min-h-svh bg-sidebar",
        "**:data-[slot=disclosure]:border-0 **:data-[slot=disclosure]:px-2.5",
    ],
    variants: {
        side: {
            left: "left-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:left-[calc(var(--sidebar-width)*-1)]",
            right: "right-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:right-[calc(var(--sidebar-width)*-1)]",
        },
        intent: {
            float: "bg-bg p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var+theme(spacing.4)+2px)]",
            inset: [
                "bg-sidebar p-2 group-data-[sidebar-collapsible=dock]/sidebar-container:w-[calc(var(--sidebar-width-dock)+theme(spacing.2)+2px)] dark:bg-bg",
            ],
            fleet: [
                "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock)",
                "**:data-sidebar-disclosure:gap-y-0 **:data-sidebar-section:gap-y-0 **:data-sidebar-disclosure:px-0 **:data-sidebar-section:px-0",
                "group-data-[sidebar-side=left]/sidebar-container:border-r group-data-[sidebar-side=right]/sidebar-container:border-l",
            ],
            default: [
                "group-data-[sidebar-collapsible=dock]/sidebar-container:w-(--sidebar-width-dock) group-data-[sidebar-side=left]/sidebar-container:border-(--sidebar-border)",
                "group-data-[sidebar-side=left]/sidebar-container:border-r group-data-[sidebar-side=right]/sidebar-container:border-l",
            ],
        },
    },
});
const Sidebar = ({ closeButton = true, collapsible = "hidden", side = "left", intent = "default", className, ...props }) => {
    const { isMobile, state, isOpenOnMobile, setIsOpenOnMobile } = useSidebar();
    if (collapsible === "none") {
        return (_jsx("div", { "data-sidebar-intent": intent, "data-sidebar-collapsible": "none", className: twMerge("flex h-full w-(--sidebar-width) flex-col border-r bg-sidebar text-sidebar-fg", className), ...props }));
    }
    if (isMobile) {
        return (_jsx(Sheet, { isOpen: isOpenOnMobile, onOpenChange: setIsOpenOnMobile, ...props, children: _jsx(Sheet.Content, { closeButton: closeButton, "aria-label": "Sidebar", "data-sidebar-intent": "default", classNames: {
                    content: "min-w-[22rem] max-w-min [&>button]:hidden",
                }, isFloat: intent === "float", side: side, children: _jsx(Sheet.Body, { className: "px-0 sm:px-0", children: props.children }) }) }));
    }
    return (_jsxs("div", { "data-sidebar-state": state, "data-sidebar-collapsible": state === "collapsed" ? collapsible : "", "data-sidebar-intent": intent, "data-sidebar-side": side, className: "group/sidebar-container peer hidden text-sidebar-fg md:block", ...props, children: [_jsx("div", { "aria-hidden": "true", className: gap({ intent }) }), _jsx("div", { className: sidebar({
                    side,
                    intent,
                    className,
                }), ...props, children: _jsx("div", { "data-sidebar": "default", className: twJoin("flex h-full w-full flex-col text-sidebar-fg", "group-data-[sidebar-intent=inset]/sidebar-container:bg-sidebar dark:group-data-[sidebar-intent=inset]/sidebar-container:bg-bg", "group-data-[sidebar-intent=float]/sidebar-container:rounded-lg group-data-[sidebar-intent=float]/sidebar-container:border group-data-[sidebar-intent=float]/sidebar-container:border-(--sidebar-border) group-data-[sidebar-intent=float]/sidebar-container:bg-sidebar group-data-[sidebar-intent=float]/sidebar-container:shadow-xs"), children: props.children }) })] }));
};
const header = tv({
    base: "mb-2 flex flex-col **:data-[slot=sidebar-label-mask]:hidden",
    variants: {
        collapsed: {
            false: "px-4 py-[calc(var(--spacing)*4)]",
            true: "mt-2 p-5 group-data-[sidebar-intent=float]/sidebar-container:mt-2 md:mx-auto md:size-9 md:items-center md:justify-center md:rounded-lg md:p-0 md:hover:bg-(--sidebar-accent)",
        },
    },
});
const SidebarHeader = ({ className, ref, ...props }) => {
    const { state } = use(SidebarContext);
    return (_jsx("div", { ref: ref, "data-sidebar-header": "true", className: header({ collapsed: state === "collapsed", className }), ...props }));
};
const footer = tv({
    base: [
        "mt-auto flex flex-col p-2",
        "in-data-[sidebar-intent=fleet]:mt-0 in-data-[sidebar-intent=fleet]:p-0",
        "in-data-[sidebar-intent=fleet]:**:data-[slot=menu-trigger]:rounded-none",
        "**:data-[slot=menu-trigger]:relative **:data-[slot=menu-trigger]:overflow-hidden",
        " **:data-[slot=menu-trigger]:rounded-lg",
        "**:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:cursor-default **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:p-2 **:data-[slot=menu-trigger]:outline-hidden sm:**:data-[slot=menu-trigger]:text-sm",
        "**:data-[slot=menu-trigger]:hover:bg-(--sidebar-accent) **:data-[slot=menu-trigger]:hover:text-fg",
    ],
    variants: {
        expanded: {
            true: "",
            false: "**:data-[slot=menu-content]:min-w-60",
        },
        collapsed: {
            false: [
                "**:data-[slot=avatar]:*:size-8 **:data-[slot=menu-trigger]:**:data-[slot=avatar]:mr-2 **:data-[slot=avatar]:size-8",
                "**:data-[slot=menu-trigger]:**:data-[slot=chevron]:ml-auto **:data-[slot=menu-trigger]:pressed:**:data-[slot=chevron]:rotate-180 **:data-[slot=menu-trigger]:**:data-[slot=chevron]:transition-transform **:data-[slot=menu-trigger]:w-full",
            ],
            true: [
                "**:data-[slot=avatar]:*:size-6 **:data-[slot=avatar]:size-6",
                "**:data-[slot=chevron]:hidden **:data-[slot=menu-label]:hidden",
                "**:data-[slot=menu-trigger]:grid **:data-[slot=menu-trigger]:size-8 **:data-[slot=menu-trigger]:place-content-center",
            ],
        },
    },
});
const SidebarFooter = ({ className, ...props }) => {
    const { state, isMobile } = useSidebar();
    const collapsed = state === "collapsed" && !isMobile;
    const expanded = state === "expanded";
    return (_jsx("div", { "data-sidebar-footer": "true", className: footer({
            collapsed,
            expanded,
            className,
        }), ...props }));
};
const SidebarContent = ({ className, ...props }) => {
    const { state } = useSidebar();
    return (_jsx("div", { "data-sidebar-content": "true", className: twMerge("flex min-h-0 flex-1 scroll-mb-96 flex-col overflow-auto *:data-sidebar-section:border-l-0", state === "collapsed" && "items-center", className), ...props }));
};
const SidebarSectionGroup = ({ className, ...props }) => {
    const { state, isMobile } = useSidebar();
    const collapsed = state === "collapsed" && !isMobile;
    return (_jsx("section", { "data-sidebar-section-group": "true", className: twMerge("flex w-full flex-col gap-y-6", collapsed && "items-center justify-center", className), ...props }));
};
const SidebarSection = ({ className, ...props }) => {
    const { state } = useSidebar();
    return (_jsxs("div", { "data-sidebar-section": "true", className: twMerge("col-span-full flex flex-col gap-y-0.5 px-0 **:data-sidebar-section:**:gap-y-0 **:data-sidebar-section:pr-0", className), ...props, children: [state !== "collapsed" && "title" in props && (_jsx(Header, { className: "group-data-[sidebar-collapsible=dock]/sidebar-container:-mt-8 mb-1 flex shrink-0 items-center rounded-md px-2.5 font-medium text-sidebar-fg/70 text-xs outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 *:data-[slot=icon]:size-4 *:data-[slot=icon]:shrink-0 group-data-[sidebar-collapsible=dock]/sidebar-container:opacity-0", children: props.title })), _jsx("div", { className: "grid grid-cols-[auto_1fr] gap-y-0.5", children: props.children })] }));
};
const sidebarItemStyles = tv({
    base: [
        "group/sidebar-item relative col-span-full cursor-pointer overflow-hidden rounded-lg px-[calc(var(--spacing)*2.3)] py-[calc(var(--spacing)*1.3)] text-sidebar-fg/70 outline-hidden outline-hidden sm:text-sm/6",
        "**:data-[slot=menu-trigger]:-mr-1 **:data-[slot=menu-trigger]:absolute **:data-[slot=menu-trigger]:right-0 **:data-[slot=menu-trigger]:flex **:data-[slot=menu-trigger]:h-full **:data-[slot=menu-trigger]:w-[calc(var(--sidebar-width)-90%)] **:data-[slot=menu-trigger]:items-center **:data-[slot=menu-trigger]:justify-end **:data-[slot=menu-trigger]:pr-2.5 **:data-[slot=menu-trigger]:opacity-0 **:data-[slot=menu-trigger]:pressed:opacity-100 pressed:**:data-[slot=menu-trigger]:opacity-100 **:data-[slot=menu-trigger]:has-data-focus:opacity-100 **:data-[slot=menu-trigger]:focus-visible:opacity-100 hover:**:data-[slot=menu-trigger]:opacity-100",
        "**:data-[slot=avatar]:*:size-4 **:data-[slot=avatar]:size-4 **:data-[slot=icon]:size-4 **:data-[slot=avatar]:shrink-0 **:data-[slot=icon]:shrink-0",
        "in-data-[sidebar-intent=fleet]:rounded-none",
    ],
    variants: {
        collapsed: {
            false: "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center **:data-[slot=avatar]:*:mr-2 **:data-[slot=avatar]:mr-2 **:data-[slot=icon]:mr-2 supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
            true: "flex not-has-data-[slot=icon]:hidden size-9 items-center justify-center gap-x-0 p-0 **:data-[slot=menu-trigger]:hidden",
        },
        isCurrent: {
            true: "bg-(--sidebar-accent) text-fg hover:bg-(--sidebar-accent)/90 hover:text-fg **:data-[slot=menu-trigger]:from-(--sidebar-accent) **:data-[slot=icon]:text-fg [&_.text-muted-fg]:text-fg/80",
        },
        isActive: {
            true: "bg-(--sidebar-accent) text-sidebar-fg **:data-[slot=menu-trigger]:flex",
        },
        isDisabled: {
            true: "cursor-default opacity-50",
        },
    },
});
const SidebarItem = ({ isCurrent, tooltip, children, badge, className, ref, ...props }) => {
    const { state, isMobile } = useSidebar();
    const isCollapsed = state === "collapsed" && !isMobile;
    const link = (_jsx(Link, { ref: ref, "data-sidebar-item": "true", "aria-current": isCurrent ? "page" : undefined, className: composeRenderProps(className, (cls, renderProps) => sidebarItemStyles({
            ...renderProps,
            isCurrent,
            collapsed: isCollapsed,
            isActive: renderProps.isPressed || renderProps.isFocusVisible || renderProps.isHovered,
            className: cls,
        })), ...props, children: (values) => (_jsxs(_Fragment, { children: [typeof children === "function" ? children({ ...values, isCollapsed }) : children, badge &&
                    (state !== "collapsed" ? (_jsx(Badge, { shape: "square", intent: "primary", "data-slot": "sidebar-badge", className: "-translate-y-1/2 absolute inset-ring-1 inset-ring-primary/20 inset-y-1/2 right-1.5 h-5.5 w-auto text-[10px] transition-colors group-data-current:inset-ring-transparent", children: badge })) : (_jsx("div", { "aria-hidden": true, className: "absolute top-1 right-1 size-1.5 rounded-full bg-primary" })))] })) }));
    return isCollapsed && tooltip ? (_jsxs(Tooltip, { delay: 0, children: [link, _jsx(Tooltip.Content, { className: "**:data-[slot=icon]:hidden **:data-[slot=sidebar-label-mask]:hidden", intent: "inverse", showArrow: false, placement: "right", children: tooltip })] })) : (link);
};
const sidebarLink = tv({
    base: "col-span-full items-center focus:outline-hidden",
    variants: {
        collapsed: {
            false: "grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
            true: "absolute inset-0 flex size-full justify-center",
        },
    },
});
const SidebarLink = ({ className, ref, ...props }) => {
    const { state, isMobile } = useSidebar();
    const collapsed = state === "collapsed" && !isMobile;
    return (_jsx(Link, { ref: ref, className: composeRenderProps(className, (className, renderProps) => sidebarLink({
            ...renderProps,
            collapsed,
            className,
        })), ...props }));
};
const SidebarInset = ({ className, ref, ...props }) => {
    return (_jsx("main", { ref: ref, className: twMerge("relative flex min-h-svh w-full flex-1 flex-col peer-data-[sidebar-intent=inset]:border peer-data-[sidebar-intent=inset]:border-(--sidebar-border)", "bg-bg peer-data-[sidebar-intent=inset]:overflow-hidden dark:peer-data-[sidebar-intent=inset]:bg-sidebar", "peer-data-[sidebar-intent=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[sidebar-state=collapsed]:peer-data-[sidebar-intent=inset]:ml-2 md:peer-data-[sidebar-intent=inset]:m-2 md:peer-data-[sidebar-intent=inset]:ml-0 md:peer-data-[sidebar-intent=inset]:rounded-xl md:peer-data-[sidebar-intent=inset]:shadow-xs", className), ...props }));
};
const SidebarDisclosureGroup = ({ allowsMultipleExpanded = true, className, ...props }) => {
    return (_jsx(DisclosureGroup, { "data-sidebar-disclosure-group": "true", allowsMultipleExpanded: allowsMultipleExpanded, className: composeTailwindRenderProps(className, "col-span-full flex flex-col gap-y-6"), ...props }));
};
const SidebarDisclosure = ({ className, ref, ...props }) => {
    const { state } = useSidebar();
    return (_jsx(Disclosure, { ref: ref, "data-sidebar-disclosure": "true", className: composeTailwindRenderProps(className, twMerge("px-0", state !== "collapsed" && "col-span-full")), ...props }));
};
const sidebarDisclosureTrigger = tv({
    base: [
        "group relative flex w-full cursor-pointer items-center overflow-hidden rounded-lg px-[calc(var(--spacing)*2.3)] py-[calc(var(--spacing)*1.3)] text-sidebar-fg/70 outline-hidden sm:text-sm/6",
        "in-data-[sidebar-intent=fleet]:rounded-none in-data-[sidebar-intent=fleet]:py-2 in-data-[sidebar-intent=fleet]:**:data-[slot=chevron]:hidden",
    ],
    variants: {
        collapsed: {
            false: "col-span-full **:data-[slot=icon]:mr-2",
            true: "size-9 justify-center p-0",
        },
        isActive: {
            true: "bg-(--sidebar-accent) text-sidebar-fg",
        },
        isDisabled: {
            true: "cursor-default opacity-50",
        },
    },
});
const SidebarDisclosureTrigger = ({ className, ref, ...props }) => {
    const { state, isMobile } = useSidebar();
    const collapsed = state === "collapsed" && !isMobile;
    return (_jsx(Heading, { level: 3, children: _jsx(Trigger, { ref: ref, slot: "trigger", className: composeRenderProps(className, (className, renderProps) => sidebarDisclosureTrigger({
                ...renderProps,
                collapsed,
                isActive: renderProps.isPressed || renderProps.isFocusVisible || renderProps.isHovered,
                className,
            })), ...props, children: (values) => (_jsxs(_Fragment, { children: [typeof props.children === "function" ? props.children(values) : props.children, state !== "collapsed" && (_jsx(IconChevronLgDown, { "data-slot": "chevron", className: "z-10 ml-auto size-3.5 transition-transform group-aria-expanded:rotate-180" }))] })) }) }));
};
const SidebarDisclosurePanel = (props) => {
    return (_jsx(DisclosurePanel, { "data-sidebar-disclosure-panel": "true", className: "col-span-full grid grid-cols-[auto_1fr] gap-y-0.5", ...props }));
};
const SidebarSeparator = ({ className, ...props }) => {
    return (_jsx(Separator, { orientation: "horizontal", className: twMerge("col-span-full mx-auto my-2.5 h-px w-[calc(var(--sidebar-width)-theme(spacing.6))] bg-border", className), ...props }));
};
const SidebarTrigger = ({ onPress, children, ...props }) => {
    const { toggleSidebar } = useSidebar();
    return (_jsx(Button, { "aria-label": props["aria-label"] || "Toggle Sidebar", "data-sidebar-trigger": "true", intent: props.intent || "plain", size: props.size || "square-petite", onPress: (event) => {
            onPress?.(event);
            toggleSidebar();
        }, ...props, children: children || (_jsxs(_Fragment, { children: [_jsx(IconSidebarFill, { className: "hidden md:inline" }), _jsx(IconHamburger, { className: "inline md:hidden" }), _jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] })) }));
};
const SidebarRail = ({ className, ref, ...props }) => {
    const { toggleSidebar } = useSidebar();
    return (_jsx("button", { ref: ref, "data-sidebar": "rail", "aria-label": "Toggle Sidebar", title: "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, className: twMerge("-translate-x-1/2 group-data-[sidebar-side=left]/sidebar-container:-right-4 absolute inset-y-0 z-20 hidden w-4 outline-hidden transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-transparent group-data-[sidebar-side=right]/sidebar-container:left-0 sm:flex", "in-data-[sidebar-side=left]:cursor-w-resize in-data-[sidebar-side=right]:cursor-e-resize", "[[data-sidebar-side=left][data-sidebar-state=collapsed]_&]:cursor-e-resize [[data-sidebar-side=right][data-sidebar-state=collapsed]_&]:cursor-w-resize", "group-data-[sidebar-collapsible=hidden]/sidebar-container:translate-x-0 group-data-[sidebar-collapsible=hidden]/sidebar-container:hover:bg-secondary group-data-[sidebar-collapsible=hidden]/sidebar-container:after:left-full", "[[data-sidebar-side=left][data-sidebar-collapsible=hidden]_&]:-right-2 [[data-sidebar-side=right][data-sidebar-collapsible=hidden]_&]:-left-2", className), ...props }));
};
const SidebarLabel = ({ className, ref, ...props }) => {
    const { state, isMobile } = useSidebar();
    const collapsed = state === "collapsed" && !isMobile;
    if (!collapsed) {
        return (_jsx(Text, { tabIndex: -1, ref: ref, slot: "label", className: twMerge("col-start-2 overflow-hidden whitespace-nowrap", className), ...props, children: props.children }));
    }
    return null;
};
const nav = tv({
    base: [
        "isolate flex h-[3.2rem] items-center justify-between gap-x-2 px-4 text-navbar-fg sm:justify-start md:w-full",
        "group-has-data-[sidebar-intent=default]/sidebar-root:border-b group-has-data-[sidebar-intent=fleet]/sidebar-root:border-b group-has-data-[sidebar-intent=default]/sidebar-root:bg-bg",
    ],
    variants: {
        isSticky: {
            true: "static top-0 z-40 group-has-data-[sidebar-intent=default]/sidebar-root:sticky",
        },
    },
});
const SidebarNav = ({ isSticky = false, className, ...props }) => {
    return _jsx("nav", { "data-slot": "sidebar-nav", ...props, className: nav({ isSticky, className }) });
};
export { SidebarProvider, SidebarNav, SidebarHeader, SidebarContent, SidebarSectionGroup, SidebarSection, SidebarItem, SidebarLink, SidebarFooter, Sidebar, SidebarDisclosureGroup, SidebarDisclosure, SidebarSeparator, SidebarDisclosureTrigger, SidebarDisclosurePanel, SidebarTrigger, SidebarLabel, SidebarInset, SidebarRail, useSidebar, };
