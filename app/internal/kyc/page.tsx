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
export default function KYC() {
  
   const kycComplianceTracker= [
    {
        investorName: "John Doe",
        riskLevel: "Medium",
        ofacPepCheck: "Cleared",
        documentStatus: "ID Pending",
        finalDecision: "Awaiting Docs"
    },
    {
        investorName: "ABC Capital",
        riskLevel: "Low",
        ofacPepCheck: "Cleared",
        documentStatus: "Complete",
        finalDecision: "Approved"
    },
    {
        investorName: "Jane Smith",
        riskLevel: "High",
        ofacPepCheck: "Flagged",
        documentStatus: "Additional Proof Required",
        finalDecision: "Pending Review"
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
                                  <BreadcrumbLink href="/internal/kyc">KYC & Complaiance Tracker</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         
         <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

             <Table>
               <TableCaption>KYC & Compliance Tracker</TableCaption>
               <TableHeader>
                 <TableRow>
                   <TableHead className="w-[100px]">Investor Name</TableHead>
                   <TableHead>Risk Level</TableHead>
                   <TableHead>OFAC/PEP Check</TableHead>
                   <TableHead>Document Status</TableHead>
                 
                   <TableHead className="text-right">Final Decision</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {kycComplianceTracker.map((tracker) => (
                   <TableRow key={tracker.investorName}>
                     <TableCell className="font-medium">{tracker.investorName}</TableCell>
                     <TableCell>{tracker.riskLevel}</TableCell>
                     <TableCell>{tracker.ofacPepCheck}</TableCell>
                     <TableCell>{tracker.documentStatus}</TableCell>
                     <TableCell className="text-right">{tracker.finalDecision}</TableCell>
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
