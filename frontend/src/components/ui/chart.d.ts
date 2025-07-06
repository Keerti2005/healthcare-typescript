import type { LegendProps } from "recharts";
import { Legend, ResponsiveContainer, Tooltip } from "recharts";
declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode;
        icon?: React.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare const Chart: ({ id, className, children, config, ref, ...props }: React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof ResponsiveContainer>["children"];
}) => import("react/jsx-runtime").JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => import("react/jsx-runtime").JSX.Element | null;
declare const ChartTooltip: typeof Tooltip;
declare const ChartTooltipContent: ({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, ref, }: React.ComponentProps<typeof Tooltip> & React.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}) => import("react/jsx-runtime").JSX.Element | null;
declare const ChartLegend: typeof Legend;
declare const ChartLegendContent: ({ className, hideIcon, payload, verticalAlign, nameKey, ref, }: React.ComponentProps<"div"> & Pick<LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}) => import("react/jsx-runtime").JSX.Element | null;
export type { ChartConfig };
export { Chart, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
