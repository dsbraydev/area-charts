"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

const tradingData = {
  "7D": [
    ["Date", "Your Volume", "Average User"],
    ["14 Mar", 200000, 150000],
    ["15 Mar", 400000, 300000],
    ["16 Mar", 600000, 500000],
    ["17 Mar", 750000, 680000],
    ["18 Mar", 900000, 780000],
    ["19 Mar", 1000000, 850000],
    ["20 Mar", 1023520, 854320],
  ],
  "30D": [
    ["Date", "Your Volume", "Average User"],
    ["21 Feb", 150000, 100000],
    ["25 Feb", 300000, 250000],
    ["1 Mar", 500000, 400000],
    ["5 Mar", 700000, 600000],
    ["10 Mar", 850000, 750000],
    ["15 Mar", 970000, 820000],
    ["20 Mar", 1023520, 854320],
  ],
  "90D": [
    ["Date", "Your Volume", "Average User"],
    ["20 Dec", 100000, 80000],
    ["5 Jan", 200000, 150000],
    ["20 Jan", 450000, 300000],
    ["10 Feb", 700000, 550000],
    ["1 Mar", 900000, 780000],
    ["15 Mar", 970000, 820000],
    ["20 Mar", 1023520, 854320],
  ],
};

const options = {
  backgroundColor: "black", // Ensure the background is black
  colors: ["#00ff99", "#ffffff"], // Green for 'Your Volume', White for 'Average User'
  legend: { position: "none" },
  hAxis: { textStyle: { color: "#aaa" } },
  vAxis: { textStyle: { color: "#aaa" }, gridlines: { color: "transparent" } },
  chartArea: { width: "85%", height: "80%" },
  lineWidth: 3,
  curveType: "function",
  tooltip: { textStyle: { color: "#fff" } },
};

const TradingVolumeChart = () => {
  const [timeframe, setTimeframe] = useState<"7D" | "30D" | "90D">("7D");

  return (
    <div style={{ textAlign: "center" }}>
      <Link href="/">BACK</Link>

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

      {/* Google Chart */}
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={tradingData[timeframe]}
        options={options}
      />
    </div>
  );
};

export default TradingVolumeChart;
