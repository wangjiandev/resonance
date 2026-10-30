import { OrganizationList } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function Page() {
  await auth.protect()
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
      />
    </div>
  )
}
