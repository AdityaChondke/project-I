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
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { Badge } from '@/components/ui/badge'
  
export default function Document() {
  


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


const documentManagementPanel = [
    {
        investorName: "John Doe",
        docName: "ID Proof",
        status: "Pending Upload",
        action: "Request, Upload",
        dueDate: "2025-02-28"
    },
    {
        investorName: "John Doe",
        docName: "Address Proof",
        status: "Under Review",
        action: "Approve, Reject",
        reviewDate: "2025-02-15"
    },
    {
        investorName: "ABC Capital",
        docName: "Company Registration",
        status: "Complete",
        action: "View",
        completedDate: "2025-02-10"
    },
    {
        investorName: "ABC Capital",
        docName: "Tax Document",
        status: "Pending Upload",
        action: "Request, Upload",
        dueDate: "2025-03-01"
    },
    {
        investorName: "Jane Smith",
        docName: "ID Proof",
        status: "Additional Proof Required",
        action: "Request, Upload",
        requestDate: "2025-02-12"
    },
    {
        investorName: "Jane Smith",
        docName: "Income Statement",
        status: "Under Review",
        action: "Approve, Reject",
        reviewDate: "2025-02-16"
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
                    <BreadcrumbLink href="/internal/overview">OverView</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/internal/documents">Document Management Panel</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className='grid grid-cols-3 gap-2'>
                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Pending Uploads</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl">
                        71
                    </h1>
                    </CardContent>
                </Card>
                
                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Expiring Documents</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl">
                        120
                    </h1>
                    </CardContent>
                </Card>

                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Completed Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className="  text-4xl font-extrabold tracking-tight lg:text-5xl">
                        21
                    </h1>
                    </CardContent>
                </Card>

            
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >

                <Table>
                <TableCaption>Document Action Table</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">Investor Name</TableHead>
                    <TableHead>Dcoument</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Review Date</TableHead>
                    
                    <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {documentManagementPanel.map((entry, index) => (
                    <TableRow key={index} >
                        <TableCell className="font-medium">{entry.investorName}</TableCell>
                        <TableCell>{entry.docName}</TableCell>
                        <TableCell>{entry.status}</TableCell>
                        <TableCell>{entry.reviewDate}</TableCell>
                        <TableCell >
                        <div className='grid grid-cols-2 gap-1'>
                        <Badge variant='outline' className='cursor-pointer'>Approve</Badge>
                        <Badge variant='outline'className='cursor-pointer'>Reject</Badge>
                        <Badge variant='outline' className='cursor-pointer'>Request</Badge>
                        <Badge variant='outline' className='cursor-pointer'>Upload</Badge>
                      
                        </div>
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
