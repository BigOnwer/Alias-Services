'use client'
import React from "react";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { BarChart, Bar, XAxis, CartesianGrid  } from "recharts";

interface PropsChart {
  income: number
  outcome: number
  total: number
}

export function BarChartComponent({ income, outcome, total }: PropsChart) {
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

  const chartData = [
    { income: "Incomes", desktop: income, type: 'Income' },
    { outcome: "Outcome", desktop: outcome, type: 'Outcome' },
    { total: "Total", desktop: total, type: 'Total' },
  ]
  
  const chartConfig = {
    desktop: {
      label: "value",
      color: "#2563eb",
    },
  } satisfies ChartConfig

  return (
    <div className="w-full flex justify-center">
      <ChartContainer config={chartConfig} className="h-[200px] w-1/2">
        <BarChart layout="horizontal" accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
