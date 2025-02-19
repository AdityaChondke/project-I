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
import { Button } from '@/components/ui/button'
import { useToast } from "@/hooks/use-toast"

 


export default function TimeSensitive() {
    const { toast } = useToast()
    const investmentOpportunities = [
        {
            opportunity: "Series C Allocation",
            fund: "Fund X",
            type: "Private Equity",
            deadline: "Mar 10, 2025",
            action: "Invest Now",
        },
        {
            opportunity: "Interval Fund Subscription",
            fund: "Fund Y",
            type: "Interval Fund",
            deadline: "Feb 28, 2025",
            action: "Subscribe",
        },
        {
            opportunity: "Capital Call ($500K)",
            fund: "Fund Z",
            type: "Venture Capital",
            deadline: "Mar 5, 2025",
            action: "Pay Now",
        },
        {
            opportunity: "Redemption Window",
            fund: "Fund B",
            type: "Hedge Fund",
            deadline: "Apr 15, 2025",
            action: "Request Exit",
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
                                <BreadcrumbLink href="/time-sensitive">Time Sentitive</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink  href="/time-sensitive">Investment Oppournitites</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
         
          
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

    <Table>
      <TableCaption>Highlighting upcoming capital calls, fund openings, and deadlines </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Oppournity</TableHead>
          <TableHead>Fund</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Deadline</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {investmentOpportunities.map((opportunity) => (
          <TableRow id={opportunity.opportunity} key={opportunity.opportunity}>
            <TableCell className="font-medium">{opportunity.opportunity}</TableCell>
            <TableCell>{opportunity.fund}</TableCell>
            <TableCell>{opportunity.type}</TableCell>
            <TableCell>{opportunity.deadline}</TableCell>
            <TableCell className="text-right">
            <Button
      variant="ghost"
      onClick={() => {
        toast({
          title: `Action: ${opportunity.action} for ${opportunity.opportunity}`   ,
          description: "You will recieve notification on you email",
          
        })
      }}
    >
     {opportunity.action}
    </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
 
    </Table>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

  </>
  )
}
