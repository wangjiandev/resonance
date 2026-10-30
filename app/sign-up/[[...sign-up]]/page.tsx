import { SignUp } from "@clerk/nextjs"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <SignUp />
    </div>
  )
}
