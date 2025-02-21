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

 


export default function Reports() {
    const { toast } = useToast()
    const reportsAndDocuments = [
        {
            reportName: "Q4 2024 Fund Performance Report",
            fund: "Fund A",
            type: "Performance Report",
            datePublished: "Jan 15, 2025",
            access: "Download",
        },
        {
            reportName: "Annual Investor Letter",
            fund: "Portfolio-wide",
            type: "Letter",
            datePublished: "Dec 10, 2024",
            access: "View",
        },
        {
            reportName: "Tax Documents (Form K-1)",
            fund: "Fund B",
            type: "Tax",
            datePublished: "Mar 5, 2025",
            access: "Access",
        },
        {
            reportName: "Market Outlook 2025",
            fund: "Portfolio-wide",
            type: "Research",
            datePublished: "Feb 1, 2025",
            access: "Read",
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
                  <BreadcrumbLink  href="/reports">Reports & Downloads</BreadcrumbLink>
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
      <TableCaption>Published Reports & Downloads Lin</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Report Name</TableHead>
          <TableHead>Fund</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date Published</TableHead>
          <TableHead className="text-right">Access</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reportsAndDocuments.map((report) => (
          <TableRow id={report.reportName} key={report.reportName}>
            <TableCell className="font-medium">{report.reportName}</TableCell>
            <TableCell>{report.fund}</TableCell>
            <TableCell>{report.type}</TableCell>
            <TableCell>{report.datePublished}</TableCell>
            <TableCell className="text-right">
            <Button
      variant="ghost"
      onClick={() => {
        toast({
          title: `Sending ${report.reportName} to your email`   ,
          description: "You will recieve notification on you email",
          
        })
      }}
    >
     {report.access}
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
