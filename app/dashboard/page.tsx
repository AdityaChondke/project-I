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
import { Area, AreaChart, CartesianGrid, Label, Pie, XAxis, YAxis } from "recharts"
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
    label: "Investments",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig


export default function Dashboard() {
  
  
  const fundChartData = [
    { month: "January", fundA: 20000, fundB: 21000, fundC: 11000, fundD: 70000 },
    { month: "February", fundA: 47000, fundB: 47000, fundC: 22000, fundD: 80000 },
    { month: "March", fundA: 60000, fundB: 90000, fundC: 33000, fundD: 100000 },
    { month: "April", fundA: 90000, fundB: 140000, fundC: 44000, fundD: 120000 },
    { month: "May", fundA: 11000, fundB: 160000, fundC: 55000, fundD: 190000 },
    { month: "June", fundA: 130000, fundB: 175000, fundC: 65000, fundD: 220000 }
];

  const portfolioBreakdown = [
    {
        id: "fund-a",
        fundName: "Fund A",
        fundType: "Private Equity",
        commitment: 200000,
        capitalCalled: 100000,
        nav: 12,
        quantity: 10000,
        value: 120000,
        distrubution: "10000"
    },
    {
        id: "fund-b",
        fundName: "Fund B",
        fundType: "Hedge Fund",
        commitment: 300000,
        capitalCalled: 150000,
        nav: 16,
        quantity: 10000,
        value: 160000,
        distrubution: "15000"
    },
    {
        id: "fund-c",
        fundName: "Fund C",
        fundType: "Venture Capital",
        commitment: 100000,
        capitalCalled: 50000,
        nav: 12,
        quantity: 5000,
        value: 60000,
        distrubution: "5000"
    },
    {
        id: "fund-d",
        fundName: "Fund D",
        fundType: "Real Estate",
        commitment: 500000,
        capitalCalled: 200000,
        nav: 19,
        quantity: 10000,
        value: 220000,
        distrubution: "10000"
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
                  <CardTitle >Investments</CardTitle>  
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
                      {/* <YAxis
                      /> */}
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
            {/* <PieChartComponent/> */}
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
          <TableHead>Current NAV ($)</TableHead>
          <TableHead>Value ($)</TableHead>
          <TableHead className="text-right">Distribution ($)</TableHead>
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
            <TableCell>{portfolio.value}</TableCell>
            <TableCell className="text-right">{portfolio.distrubution}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell >560,000.00</TableCell>
          <TableCell className="text-right">40,000.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
    <Tour/>
  </>
  )
}
