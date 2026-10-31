import React from "react"
import { QuickAction } from "../data/quick-actions"
import { cn } from "cn"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowBigLeft, ArrowRight } from "lucide-react"

type QuickActionCardProps = QuickAction

export default function QuickActionCard({
  title,
  description,
  gradient,
  href,
}: QuickActionCardProps) {
  return (
    <div className="flex gap-4 rounded-xl border bg-card p-3">
      <div
        className={cn(
          "relative h-31 w-41 shrink-0 overflow-hidden rounded-xl bg-linear-to-br",
          gradient
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-12 rounded-full bg-white/30" />
        </div>
        <div className="absolute inset-2 rounded-lg ring-2 ring-white/20 ring-inset" />
      </div>
      <div className="flex flex-col justify-between py-1">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <Button variant="outline" size="sm" className="w-fit" asChild>
          <Link href={href}>
            Try Now <ArrowRight size={3} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
