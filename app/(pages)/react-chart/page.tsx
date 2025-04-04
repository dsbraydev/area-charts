"use client";
import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { curveCardinal } from "d3-shape";

// Trading Data
const tradingData = {
  "7D": [
    { date: "14 Mar", yourVolume: 200000, avgUser: 150000 },
    { date: "15 Mar", yourVolume: 400000, avgUser: 300000 },
    { date: "16 Mar", yourVolume: 600000, avgUser: 500000 },
    { date: "17 Mar", yourVolume: 750000, avgUser: 680000 },
    { date: "18 Mar", yourVolume: 900000, avgUser: 780000 },
    { date: "19 Mar", yourVolume: 1000000, avgUser: 850000 },
    { date: "20 Mar", yourVolume: 1023520, avgUser: 854320 },
  ],
  "30D": [
    { date: "21 Feb", yourVolume: 150000, avgUser: 100000 },
    { date: "25 Feb", yourVolume: 300000, avgUser: 250000 },
    { date: "1 Mar", yourVolume: 500000, avgUser: 400000 },
    { date: "5 Mar", yourVolume: 700000, avgUser: 600000 },
    { date: "10 Mar", yourVolume: 850000, avgUser: 750000 },
    { date: "15 Mar", yourVolume: 970000, avgUser: 820000 },
    { date: "20 Mar", yourVolume: 1023520, avgUser: 854320 },
  ],
  "90D": [
    { date: "20 Dec", yourVolume: 100000, avgUser: 80000 },
    { date: "5 Jan", yourVolume: 200000, avgUser: 150000 },
    { date: "20 Jan", yourVolume: 450000, avgUser: 300000 },
    { date: "10 Feb", yourVolume: 700000, avgUser: 550000 },
    { date: "1 Mar", yourVolume: 900000, avgUser: 780000 },
    { date: "15 Mar", yourVolume: 970000, avgUser: 820000 },
    { date: "20 Mar", yourVolume: 1023520, avgUser: 854320 },
  ],
};

const cardinal = curveCardinal.tension(0.2);

const TradingVolumeChart = () => {
  const [timeframe, setTimeframe] = useState<"7D" | "30D" | "90D">("7D");

  return (
    <div style={{ textAlign: "center" }}>
      {/* Buttons to switch timeframe */}
      <div style={{ marginBottom: 10 }}>
        {["7D", "30D", "90D"].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t as "7D" | "30D" | "90D")}
            style={{
              margin: "0 5px",
              padding: "6px 12px",
              backgroundColor: timeframe === t ? "#00ff99" : "transparent",
              border: "1px solid #00ff99",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Responsive Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={tradingData[timeframe]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* Remove Grid lines by setting stroke to transparent */}
          <CartesianGrid
            stroke="transparent" // Makes the grid lines invisible
            strokeDasharray="none" // Optional, hides any dashed lines if any
          />

          <defs>
            {/* Gradient for the 'yourVolume' line */}
            <linearGradient
              id="gradientYourVolume"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00ff99" stopOpacity={1} />
              <stop offset="100%" stopColor="black" stopOpacity={1} />
            </linearGradient>
          </defs>

          <XAxis dataKey="date" tick={{ fill: "#aaa" }} />
          <YAxis tick={{ fill: "#aaa" }} />
          <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff" }} />
          <Legend verticalAlign="top" height={36} />

          {/* Area with Gradient Fill (Green to Black) */}
          <Area
            type={cardinal}
            dataKey="yourVolume"
            stroke="#00ff99"
            strokeWidth={3}
            fill="url(#gradientYourVolume)" // Apply the gradient
          />

          {/* White Line with No Fill */}
          <Area
            type={cardinal}
            dataKey="avgUser"
            stroke="#ffffff"
            strokeWidth={3}
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradingVolumeChart;
