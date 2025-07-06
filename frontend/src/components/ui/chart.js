import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, use, useId, useMemo } from "react";
import { Legend, ResponsiveContainer, Tooltip } from "recharts";
import { twMerge } from "tailwind-merge";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = createContext(null);
function useChart() {
    const context = use(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <Chart />");
    }
    return context;
}
const Chart = ({ id, className, children, config, ref, ...props }) => {
    const uniqueId = useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return (_jsx(ChartContext.Provider, { value: { config }, children: _jsxs("div", { "data-chart": chartId, ref: ref, className: twMerge("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-fg [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/80 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden", className), ...props, children: [_jsx(ChartStyle, { id: chartId, config: config }), _jsx(ResponsiveContainer, { children: children })] }) }));
};
const ChartStyle = ({ id, config }) => {
    const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return (_jsx("style", { dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES)
                .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                .map(([key, itemConfig]) => {
                const color = itemConfig.theme?.[theme] || itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
            })
                .join("\n")}
}
`)
                .join("\n"),
        } }));
};
const ChartTooltip = Tooltip;
const ChartTooltipContent = ({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, ref, }) => {
    const { config } = useChart();
    const tooltipLabel = useMemo(() => {
        if (hideLabel || !payload?.length) {
            return null;
        }
        const [item] = payload;
        if (!item) {
            return null;
        }
        const key = `${labelKey || item.dataKey || item.name || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string"
            ? config[label]?.label || label
            : itemConfig?.label;
        if (labelFormatter) {
            return _jsx("div", { className: labelClassName, children: labelFormatter(value, payload) });
        }
        if (!value) {
            return null;
        }
        return _jsx("div", { className: labelClassName, children: value });
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
    if (!active || !payload?.length) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return (_jsxs("div", { ref: ref, className: twMerge("grid min-w-[12rem] items-start gap-1.5 rounded-lg border bg-overlay px-3 py-2 text-overlay-fg text-xs shadow-xl", className), children: [!nestLabel ? tooltipLabel : null, _jsx("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
                    const key = `${nameKey || item.name || item.dataKey || "value"}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = color || item.payload.fill || item.color;
                    return (_jsx("div", { className: twMerge("flex w-full flex-wrap items-stretch gap-2 *:data-[slot=icon]:size-2.5 *:data-[slot=icon]:text-muted-fg", indicator === "dot" && "items-center"), children: formatter && item?.value !== undefined && item.name ? (formatter(item.value, item.name, item, index, item.payload)) : (_jsxs(_Fragment, { children: [itemConfig?.icon ? (_jsx(itemConfig.icon, {})) : (!hideIndicator && (_jsx("div", { className: twMerge("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", indicator === "dot" && "size-2.5", indicator === "line" && "w-1", indicator === "dashed" &&
                                        "w-0 border-[1.5px] border-dashed bg-transparent", nestLabel && indicator === "dashed" && "my-0.5"), style: {
                                        "--color-bg": indicatorColor,
                                        "--color-border": indicatorColor,
                                    } }))), _jsxs("div", { className: twMerge("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"), children: [_jsxs("div", { className: "grid gap-1.5", children: [nestLabel ? tooltipLabel : null, _jsx("span", { className: "text-muted-fg", children: itemConfig?.label || item.name })] }), item.value && (_jsx("span", { className: "font-medium font-mono text-fg tabular-nums", children: item.value.toLocaleString() }))] })] })) }, item.dataKey));
                }) })] }));
};
const ChartLegend = Legend;
const ChartLegendContent = ({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey, ref, }) => {
    const { config } = useChart();
    if (!payload?.length) {
        return null;
    }
    return (_jsx("div", { ref: ref, className: twMerge("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className), children: payload.map((item) => {
            const key = `${nameKey || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return (_jsxs("div", { className: "flex items-center gap-1.5 *:data-[slot=icon]:size-3 *:data-[slot=icon]:text-muted-fg", children: [itemConfig?.icon && !hideIcon ? (_jsx(itemConfig.icon, {})) : (_jsx("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: {
                            backgroundColor: item.color,
                        } })), itemConfig?.label] }, item.value));
        }) }));
};
function getPayloadConfigFromPayload(config, payload, key) {
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
        ? payload.payload
        : undefined;
    let configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    }
    else if (payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
export { Chart, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
