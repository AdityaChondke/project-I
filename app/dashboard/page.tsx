"use client"
import React from 'react'
import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PieChart, TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, Label, Pie, XAxis } from "recharts"
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
import Tour from '../tour'
import PieChartComponent from '../piechart/page'
 


 
const lineChartConfig = {
  desktop: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Fund A",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig


export default function Dashboard() {
  
  
  const fundChartData = [
    { month: "January", fundA: 4800000, fundB: 3200000, fundC: 1750000, fundD: 1050000 },
    { month: "February", fundA: 4700000, fundB: 3150000, fundC: 1720000, fundD: 1035000 },
    { month: "March", fundA: 4900000, fundB: 3250000, fundC: 1780000, fundD: 1060000 },
    { month: "April", fundA: 4850000, fundB: 3180000, fundC: 1765000, fundD: 1045000 },
    { month: "May", fundA: 4950000, fundB: 3280000, fundC: 1800000, fundD: 1070000 },
    { month: "June", fundA: 5000000, fundB: 3300000, fundC: 1820000, fundD: 1080000 }
];

  const portfolioBreakdown = [
    {
        id: "fund-a",
        fundName: "Fund A",
        fundType: "Private Equity",
        commitment: 5000000,
        capitalCalled: 4000000,
        nav: 4800000,
        portfolioPercentage: "40%",
        irr: "15.2%"
    },
    {
        id: "fund-b",
        fundName: "Fund B",
        fundType: "Hedge Fund",
        commitment: 3000000,
        capitalCalled: "N/A",
        nav: 3200000,
        portfolioPercentage: "30%",
        irr: "8.5%"
    },
    {
        id: "fund-c",
        fundName: "Fund C",
        fundType: "Venture Capital",
        commitment: 2000000,
        capitalCalled: 1500000,
        nav: 1750000,
        portfolioPercentage: "20%",
        irr: "12.0%"
    },
    {
        id: "fund-d",
        fundName: "Fund D",
        fundType: "Real Estate",
        commitment: 1000000,
        capitalCalled: 900000,
        nav: 1050000,
        portfolioPercentage: "10%",
        irr: "10.5%"
    }
];


  return (
    <>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink  href="/dashboard">Investments</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl bg-muted/50" >
              <Card>
                <CardHeader>
                  <CardTitle >Fund A</CardTitle>  
                </CardHeader>
                <CardContent>
                  <ChartContainer config={lineChartConfig}>
                    <AreaChart id='fund-a-graph'
                      accessibilityLayer
                      data={fundChartData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                      />
                      <Area
                        dataKey="fundA"
                        type="natural"
                        fill="var(--color-mobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                      />
                      <Area
                        dataKey="fundB"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                      />
                      <Area
                        dataKey="fundC"
                        type="natural"
                        fill="var(--color-desktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                      />
                        <Area
                        dataKey="fundD"
                        type="natural"
                        fill="var(--color-mobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 3.7% this month <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" >
                        <PieChartComponent/>
            </div>
          
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

    <Table>
      <TableCaption>A list of your investments.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Fund Name</TableHead>
          <TableHead>Fund Type</TableHead>
          <TableHead>Commmitment ($)</TableHead>
          <TableHead>Capital Called ($)</TableHead>
          <TableHead>NAV ($)</TableHead>
          <TableHead>% of Portfolio</TableHead>
          <TableHead className="text-right">IRR (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {portfolioBreakdown.map((portfolio) => (
          <TableRow id={portfolio.id} key={portfolio.fundName}>
            <TableCell className="font-medium">{portfolio.fundName}</TableCell>
            <TableCell>{portfolio.fundType}</TableCell>
            <TableCell>{portfolio.commitment}</TableCell>
            <TableCell>{portfolio.capitalCalled}</TableCell>
            <TableCell>{portfolio.nav}</TableCell>
            <TableCell>{portfolio.portfolioPercentage}</TableCell>
            <TableCell className="text-right">{portfolio.irr}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">22,000.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    <Tour/>
  </>
  )
}
