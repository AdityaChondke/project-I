"use client"
import React from 'react'
import { AppSidebar } from "../app-sidebar-internal"
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
export default function Onboarding() {
  
   const onboardingQueue= [
        {
            investorName: "John Doe",
            investorType: "Individual",
            status: "KYC Pending",
            assignedTo: "Analyst A",
            action: "Review"
        },
        {
            investorName: "ABC Capital",
            investorType: "Institutional",
            status: "Approved",
            assignedTo: "-",
            action: "Completed"
        },
        {
            investorName: "Jane Smith",
            investorType: "Family Office",
            status: "Additional Docs Required",
            assignedTo: "Analyst B",
            action: "Request Docs"
        },
        {
            investorName: "XYZ Fund",
            investorType: "Hedge Fund",
            status: "Under Review",
            assignedTo: "Analyst C",
            action: "Verify"
        }
    ]

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
                                <BreadcrumbLink href="/internal/overview">OverView</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator className="hidden md:block" />
               <BreadcrumbItem className="hidden md:block">
                                  <BreadcrumbLink href="/internal/onboarding">Investor Onbording Queue</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         
         <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

             <Table>
               <TableCaption>Onboaring Queue</TableCaption>
               <TableHeader>
                 <TableRow>
                   <TableHead className="w-[100px]">Investor Name</TableHead>
                   <TableHead>Investor Type</TableHead>
                   <TableHead>Status</TableHead>
                   <TableHead>Assigned To</TableHead>
                 
                   <TableHead className="text-right">Action</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {onboardingQueue.map((entry) => (
                   <TableRow key={entry.investorName}>
                     <TableCell className="font-medium">{entry.investorName}</TableCell>
                     <TableCell>{entry.investorType}</TableCell>
                     <TableCell>{entry.status}</TableCell>
                     <TableCell>{entry.assignedTo}</TableCell>
                     <TableCell className="text-right">{entry.action}</TableCell>
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

  </>
  )
}
