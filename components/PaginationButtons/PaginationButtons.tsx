"use client"

import { useCallback } from "react"
import { Button } from "../ui/button"
import { useSearchParams, useRouter, usePathname } from "next/navigation"

export const PaginationButtons = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!
  const currentPage = searchParams.get("page") ?? "1"

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const isEnd = currentPage === "0" || currentPage === "1"

  return (
    <div className="flex items-center justify-center gap-6">
      <Button
        variant="ghost"
        disabled={isEnd}
        onClick={() =>
          push(
            pathname +
              "?" +
              createQueryString("page", `${parseInt(currentPage) - 1}`)
          )
        }
      >
        Previous page
      </Button>
      <Button
        variant="ghost"
        onClick={() =>
          push(
            pathname +
              "?" +
              createQueryString("page", `${parseInt(currentPage) + 1}`)
          )
        }
      >
        Next page
      </Button>
    </div>
  )
}
