import { Chart } from "react-google-charts";
import React from "react";

interface PropsChart {
  income: number
  outcome: number
  total: number
}

export function BarChart({ income, outcome, total }: PropsChart) {
  const data = [
    ["", "", ""],
    ["Income", income, 0,],
    ["Outcome", outcome, 0],
    ["Total", total, 0],
  ]

  const options = {
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  }

  return (
    <div className="w-full flex justify-center">
      <Chart
        chartType="Bar"
        width="100%"
        data={data}
        options={options}
      />
    </div>
  )
}
