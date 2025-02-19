"use client"

import type * as React from "react"
import Image from 'next/image'
import { redirect } from 'next/navigation'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ShieldCheck,
  Ban,
  ClipboardMinus,
  ClipboardPlus,
  CircleDollarSign,
  Bell
} from "lucide-react"
import { NavMain } from "./nav-main-internal"
import { NavProjects } from "./nav-projects-internal"
import { NavUser } from "./nav-user-internal"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Admin User",
    email: "admin@projectI.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Project I",
      logo: GalleryVerticalEnd,
      plan: "Investor Account A",
    },
    {
      name: "Project I",
      logo: AudioWaveform,
      plan: "Investor Account B",
    },
    {
      name: "Project I",
      logo: Command,
      plan: "Investor Account C",
    },
  ],
  navMain: [
    {
      title: "OverView",
      url: "/internal/overview",
      icon: SquareTerminal,
      isActive: true,
      items: [
        // {
        //   title: "OverView",
        //   url: "/internal/overview",
        // },
        {
          title: "Investor Onboarding Queue",
          url: "/internal/onboarding",
        }
        ,
        {
          title: "KYC & Compliance Tracker",
          url: "/internal/kyc",
        }
        ,
        {
          title: "Document Management",
          url: "/internal/documents",
        }
      ],
    },
    // {
    //   title: "Explore",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Popular Funds",
    //       url: "#",
    //     },
    //     {
    //       title: "Compare Funds",
    //       url: "#",
    //     },
    //     {
    //       title: "Collections",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Quick Actions Panel",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "Approve KYC",
    //       url: "/service-request",
    //     },
    //     {
    //       title: "Reject Investor",
    //       url: "#",
    //     },
        
    //     {
    //       title: "Request Additional Docs",
    //       url: "#",
    //     },
    //     {
    //       title: "Verify Source of Funds ",
    //       url: "#",
    //     },
    //     {
    //       title: "Notify Investor",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Approve KYC",
      url: "#",
      icon: ShieldCheck,
    },
    {
      name: "Reject Investor",
      url: "#",
      icon: Ban,
    },
    
    {
      name: "Request Additional Docs",
      url: "#",
      icon: ClipboardPlus,
    },
    {
      name: "Verify Source of Funds ",
      url: "#",
      icon: CircleDollarSign,
    },
    {
      name: "Notify Investor",
      url: "#",
      icon: Bell,
    },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    // {
    //   name: "Travel",
    //   url: "#",
    //   icon: Map,
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className='pt-4 cursor-pointer'  onClick={() => redirect('/internal/overview')}> 
                <Image alt='logo' src='/logo-no-background.svg' width={200} height={100}/>
              </div>
        {/* <TeamSwitcher teams={data.teams} /> */}
       
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

