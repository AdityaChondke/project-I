"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "Private Equity", nav: 5000000, fill: "var(--color-chrome)" },
  { browser: "Hedge Fund", nav: 3300000, fill: "var(--color-safari)" },
  { browser: "Venture Capital", nav: 1820000, fill: "var(--color-firefox)" },
  { browser: "Real Estate", nav: 1080000, fill: "var(--color-edge)" },

]

const chartConfig = {
    nav: {
    label: "Investments",
  },
  chrome: {
    label: "Private Equity",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Hedge Fund",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Venture Capital",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Real Estate",
    color: "hsl(var(--chart-4))",
  }
} satisfies ChartConfig

export default function PieChartComponent() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.nav, 0)
      }, [])
    
      return (
        <Card className="flex flex-col ">
          <CardHeader className="items-center pb-0">
            <CardTitle>Fund Distrubution</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-[60px]">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="nav"
                  nameKey="Invesements"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                              <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              $
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-xl font-bold"
                            >
                              {totalVisitors.toLocaleString()} 
                            </tspan>
                          
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          
        </Card>
      )
    }
