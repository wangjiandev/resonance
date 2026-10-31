"use client"

import PageHeader from "@/components/page-header"
import DashboardHeader from "@/features/dashboard/components/dashboard-header"
import TextInputPanel from "../components/text-input-panel"
import QuickActionPanel from "../components/quick-action-panel"

export default function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Dashboard" className="lg:hidden" />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionPanel />
      </div>
    </div>
  )
}
