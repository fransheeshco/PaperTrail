"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // TODO: replace with real auth logic
  const userIsLoggedIn = true

  if (!userIsLoggedIn) return <>{children}</>

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar className="w-64" />

        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            {/* optional: breadcrumbs, header content */}
          </header>

          <main className="flex-1 p-4">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}