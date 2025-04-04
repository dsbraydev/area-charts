type Timeframe = "7D" | "30D" | "90D";
export interface ChartProps {
  timeframe: Timeframe;
}

export const tradingData: Record<
  Timeframe,
  { date: string; yourVolume: number; avgUser: number }[]
> = {
  "7D": [
    { date: "14 Mar", yourVolume: 200000, avgUser: 150000 },
    { date: "15 Mar", yourVolume: 600000, avgUser: 400000 },
    { date: "16 Mar", yourVolume: 350000, avgUser: 550000 },
    { date: "17 Mar", yourVolume: 800000, avgUser: 700000 },
    { date: "18 Mar", yourVolume: 950000, avgUser: 820000 },
    { date: "19 Mar", yourVolume: 1100000, avgUser: 1000000 },
    { date: "20 Mar", yourVolume: 800000, avgUser: 900000 },
  ],
  "30D": [
    { date: "21 Feb", yourVolume: 150000, avgUser: 120000 },
    { date: "25 Feb", yourVolume: 700000, avgUser: 500000 },
    { date: "1 Mar", yourVolume: 250000, avgUser: 350000 },
    { date: "5 Mar", yourVolume: 850000, avgUser: 900000 },
    { date: "10 Mar", yourVolume: 950000, avgUser: 1100000 },
    { date: "15 Mar", yourVolume: 1300000, avgUser: 1000000 },
    { date: "20 Mar", yourVolume: 800000, avgUser: 600000 },
  ],
  "90D": [
    { date: "20 Dec", yourVolume: 100000, avgUser: 80000 },
    { date: "5 Jan", yourVolume: 400000, avgUser: 250000 },
    { date: "20 Jan", yourVolume: 800000, avgUser: 700000 },
    { date: "10 Feb", yourVolume: 600000, avgUser: 550000 },
    { date: "1 Mar", yourVolume: 1000000, avgUser: 900000 },
    { date: "15 Mar", yourVolume: 1400000, avgUser: 1200000 },
    { date: "20 Mar", yourVolume: 950000, avgUser: 1000000 },
  ],
};