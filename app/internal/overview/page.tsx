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

export default function Overview() {
  
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
              
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className='grid grid-cols-3 gap-2'>
                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Total Investors Onboarded</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl">
                        5,464
                    </h1>
                    </CardContent>
                </Card>
                
                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Pending Approvals</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl">
                        120
                    </h1>
                    </CardContent>
                </Card>

                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>KYC Rejected</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className=" pt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        21
                    </h1>
                    </CardContent>
                </Card>

                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>High-Risk Investors</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className="pt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        71
                    </h1>
                    </CardContent>
                </Card>


                <Card className="w-40">
                    <CardHeader>
                        <CardTitle>Document Review Pending</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <h1 className="  text-4xl font-extrabold tracking-tight lg:text-5xl">
                        21
                    </h1>
                    </CardContent>
                </Card>

            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

  </>
  )
}
