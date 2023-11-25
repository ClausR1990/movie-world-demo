"use client"

import { ArrowLeftCircle } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { cn } from "@/utils"

export const GoBackButton = ({ className }: { className: string }) => {
  const router = useRouter()
  return (
    <Button
      size="icon"
      variant="link"
      className={cn(className, "cursor-pointer text-white")}
      title="Go Back"
      onClick={() => router.back()}
      asChild
    >
      <ArrowLeftCircle className="h-8 w-8 md:h-12 md:w-12" />
    </Button>
  )
}
