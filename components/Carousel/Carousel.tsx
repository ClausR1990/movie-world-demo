"use client"
import React from "react"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ClassNames, { ClassNamesOptionsType } from "embla-carousel-class-names"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export type CarouselProps = {
  children: React.ReactNode[]
  options?: EmblaOptionsType
  autoplay?: boolean
}

const classNamesOptions: ClassNamesOptionsType = {}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  options,
  autoplay = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ active: autoplay }),
    ClassNames(classNamesOptions),
  ])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="cursor-grab overflow-hidden" ref={emblaRef}>
      <ul className="flex gap-8 px-4">
        {children &&
          children.map((child, index) => (
            <li
              className="[&> img]:pointer-events-none relative min-w-0 max-w-full flex-[0_0_100%] opacity-0 transition-opacity duration-700 md:flex-[0_0_25%]"
              key={index}
            >
              {child}
            </li>
          ))}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon" onClick={scrollPrev}>
          <ChevronLeft className="text-primary" />
          <span className="sr-only">Slide tilbage</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={scrollNext}>
          <ChevronRight className="text-primary" />
          <span className="sr-only">Slide frem</span>
        </Button>
      </div>
    </div>
  )
}
