"use client";
import React, { useState } from "react";
import Chart from "./chart";
import Icon from "../../../public/icon.png";
import Image from "next/image";

const TradingVolumeChart = () => {
  const [timeframe, setTimeframe] = useState<"7D" | "30D" | "90D">("7D");

  return (
    <div
      className="rounded-lg border-[1px] h-[496px] p-6 flex flex-col gap-5 m-6 max-w-[1036px]"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        borderColor: "rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex justify-between">
        <div className="flex gap-8">
          <Image src={Icon} alt="icon" />
        </div>
        <div className="flex gap-3">
          {["7D", "30D", "90D"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t as "7D" | "30D" | "90D")}
              className="text-sm cursor-pointer"
            >
              <span
                style={
                  timeframe === t
                    ? {
                        background:
                          "linear-gradient(92deg, #FA8B3B -2.57%, #FE344A 97.43%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }
                    : {
                        color: "rgba(255, 255, 255, 0.70)", // fallback color
                      }
                }
              >
                {t}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Chart timeframe={timeframe} />

      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center">
          <div className="h-[2px] w-6 bg-[#2EFEAE]" />
          <p className="text-xs text-[#ffffffb3]">Your</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-[2px] w-6 bg-[#CCC]" />
          <p className="text-xs text-[#ffffffb3]">Average User</p>
        </div>
      </div>
    </div>
  );
};

export default TradingVolumeChart;
