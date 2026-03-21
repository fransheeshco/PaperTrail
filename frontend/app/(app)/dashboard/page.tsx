import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex">
      <AppSidebar />
      <main>Dashboard content</main>
    </div>
  )
}