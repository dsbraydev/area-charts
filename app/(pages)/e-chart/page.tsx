"use client";
import React, { useState } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Link from "next/link";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
]);

type Timeframe = "7D" | "30D" | "90D";

const mockData: Record<Timeframe, { x: string[]; a: number[]; b: number[] }> = {
  "7D": {
    x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    a: [100, 120, 130, 90, 160, 170, 180],
    b: [110, 100, 115, 140, 130, 150, 160],
  },
  "30D": {
    x: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    a: Array.from({ length: 30 }, () => Math.floor(100 + Math.random() * 100)),
    b: Array.from({ length: 30 }, () => Math.floor(100 + Math.random() * 100)),
  },
  "90D": {
    x: Array.from({ length: 90 }, (_, i) => `Day ${i + 1}`),
    a: Array.from({ length: 90 }, () => Math.floor(100 + Math.random() * 100)),
    b: Array.from({ length: 90 }, () => Math.floor(100 + Math.random() * 100)),
  },
};

const TraderLineChart = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>("7D");

  const getOption = () => {
    const maxA = Math.max(...mockData[timeframe].a);
    const maxB = Math.max(...mockData[timeframe].b);

    const isAHighest = maxA > maxB;

    const gradientA = isAHighest
      ? ["#66bb6a", "#000000"]
      : ["#42a5f5", "#000000"];
    const gradientB = !isAHighest
      ? ["#66bb6a", "#000000"]
      : ["#42a5f5", "#000000"];

    return {
      backgroundColor: "#000",
      title: {
        text: `Trader Activity - ${timeframe}`,
        textStyle: { color: "#fff" },
      },
      tooltip: { trigger: "axis" },
      legend: {
        show: false,
        data: ["Amount A", "Amount B"],
        textStyle: { color: "#fff" },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: mockData[timeframe].x,
        axisLine: { lineStyle: { color: "#888" } },
        axisLabel: { color: "#ccc" },
      },
      yAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#888" } },
        axisLabel: { color: "#ccc" },
      },
      series: [
        {
          name: "Amount A",
          type: "line",
          smooth: true,
          data: mockData[timeframe].a,
          lineStyle: { color: "#66bb6a", width: 1 },
          areaStyle: isAHighest
            ? {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: gradientA[0] },
                    { offset: 1, color: gradientA[1] },
                  ],
                  globalCoord: false,
                },
              }
            : { color: "transparent" },
          symbol: "none",
        },
        {
          name: "Amount B",
          type: "line",
          smooth: true,
          data: mockData[timeframe].b,
          lineStyle: { color: "#fff", width: 1 },
          areaStyle: !isAHighest
            ? {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: gradientB[0] },
                    { offset: 1, color: gradientB[1] },
                  ],
                  globalCoord: false,
                },
              }
            : { color: "transparent" },
          symbol: "none",
        },
      ],
    };
  };

  return (
    <div>
      <Link href="/">BACK</Link>
      <div style={{ marginBottom: 16 }}>
        {["7D", "30D", "90D"].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t as Timeframe)}
            style={{
              marginRight: 8,
              padding: "6px 12px",
              backgroundColor: t === timeframe ? "#1890ff" : "#f0f0f0",
              color: t === timeframe ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <ReactEChartsCore
        key={timeframe}
        echarts={echarts}
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        theme="light"
        opts={{ renderer: "canvas" }}
      />
    </div>
  );
};

export default TraderLineChart;
