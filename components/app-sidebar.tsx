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
} from "lucide-react"
import LogoColor from "../public/logo-color.svg"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Welcome Hari",
    email: "hari@example.com",
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
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [
        
        {
          title: "Investments",
          url: "/dashboard",
        },
        {
          title: "Transactions",
          url: "/transactions",
        }
        ,
        {
          title: "Reports & Downloads",
          url: "/reports",
        }
      ],
    },
    {
      title: "Explore",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Popular Funds",
          url: "#",
        },
        {
          title: "Compare Funds",
          url: "#",
        },
        {
          title: "Collections",
          url: "#",
        },
      ],
    },
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
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Service Request",
          url: "/service-request",
        },
        {
          title: "General",
          url: "#",
        },
        
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Investment Opportunities",
      url: "/time-sensitive",
      icon: PieChart,
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
        <div className='pt-4 cursor-pointer'  onClick={() => redirect('/dashboard')}> 
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

