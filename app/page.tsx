import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1>Welcome Resonance</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  )
}
