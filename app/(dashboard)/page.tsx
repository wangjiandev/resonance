import { SidebarTrigger } from "@/components/ui/sidebar"
import DashboardView from "@/features/dashboard/views/dashboard-view"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect()
  return <DashboardView />
}
