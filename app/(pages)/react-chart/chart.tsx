import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { curveCardinal } from "d3-shape";

import { tradingData, ChartProps } from "./data";

const cardinal = curveCardinal.tension(0.2);

export default function Chart({ timeframe }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={339}>
      <AreaChart
        data={tradingData[timeframe]}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          stroke="transparent" // Makes the grid lines invisible
          strokeDasharray="none" // Optional, hides any dashed lines if any
        />
        <defs>
          <linearGradient
            id="gradientYourVolume"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor=" rgba(0, 165, 101, 0.10)"
              stopOpacity={1}
            />
            <stop
              offset="100%"
              stopColor=" rgba(0, 165, 101, 0.01)"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        rgba(0, 165, 101, 0.10) 0%
        <XAxis
          dataKey="date"
          tick={{ fill: "#aaa", fontSize: "12px" }}
          tickLine={false}
          tickMargin={12}
        />
        <YAxis
          tickLine={false}
          tick={{ fill: "#aaa", fontSize: "12px" }}
          tickMargin={12}
          tickFormatter={(value) => {
            if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
            if (value >= 1_000) return `${(value / 1_000).toFixed(0)}k`;
            return value;
          }}
        />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
        {/* Area with Gradient Fill (Green to Black) */}
        <Area
          type={cardinal}
          dataKey="yourVolume"
          stroke="#2EFEAE"
          strokeWidth={1}
          fill="url(#gradientYourVolume)" // Apply the gradient
        />
        {/* White Line with No Fill */}
        <Area
          type={cardinal}
          dataKey="avgUser"
          stroke="#ffffff"
          strokeWidth={1}
          fill="transparent"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
