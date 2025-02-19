"use client"
import React from 'react'
import { AppSidebar } from "../../components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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



export default function Transactions() {
  

   const recentTransactions = [
        {
            fund: "Fund A",
            description: "$500K capital call",
            date: "2024-11-15",
            status: "Completed"
        },
        {
            fund: "Fund B",
            description: "$200K distribution received",
            date: "2024-12-01",
            status: "Completed"
        },
        {
            fund: "Fund C",
            description: "Additional $300K commitment added",
            date: "2025-01-10",
            status: "Pending"
        }
    ]

  
  return (
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
                  <BreadcrumbLink href="#">Transcations</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

              <Table>
                <TableCaption>A list of your recent transcations.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Fund</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                  
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transcation) => (
                    <TableRow key={transcation.fund}>
                      <TableCell className="font-medium">{transcation.fund}</TableCell>
                      <TableCell>{transcation.description}</TableCell>
                      <TableCell>{transcation.date}</TableCell>
                      <TableCell className="text-right">{transcation.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
              </Table>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
