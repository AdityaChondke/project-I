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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

import { useToast } from "@/hooks/use-toast"

import { ToastAction } from "@/components/ui/toast"
 

export default function ServiceRequest() {
  const { toast } = useToast()

  
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
                  <BreadcrumbLink href="/service-request">Settings</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/service-request">Service Request</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
          <h1 className="scroll-m-20 text-4xl  p-4 font-extrabold tracking-tight lg:text-5xl">
        Raise a service request
      </h1>
      <h3 className="scroll-m-20 p-4 text-2xl  tracking-tight">
      Select from the dropdown
    </h3>
    <div className="scroll-m-20 p-4 text-2xl tracking-tight" >
      <Select >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Issue releated to</SelectLabel>
          <SelectItem value="apple"> Billing </SelectItem>
          <SelectItem value="banana">Transactions</SelectItem>
          <SelectItem value="blueberry">Fund Releated</SelectItem>
          <SelectItem value="grapes">Allocation</SelectItem>
          <SelectItem value="pineapple">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

</div>

<h3 className="scroll-m-20 p-4 text-2xl font-semibold tracking-tight">
     Provide details if any
    </h3>
    <div className="scroll-m-20 p-4 text-2xl  tracking-tight" >
    <Textarea placeholder="Type your details here." />
    </div>

    <div className="scroll-m-20 p-4 text-2xl font-semibold tracking-tight" >
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Service request submitted ",
          description: "You will recieve notification on you email",
          
        })
      }}
    >
      Submit
    </Button>
      </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
