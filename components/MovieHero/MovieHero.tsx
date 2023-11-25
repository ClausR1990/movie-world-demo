import Image from "next/image"
import { MovieDetail } from "@/components/PageComponent/DetailPage"
import { PlayCircle } from "lucide-react"
import { TrailerDialog } from "@/components/TrailerDialog"
import { GoBackButton } from "./GoBackButton"

export type MovieHeroProps = MovieDetail & {}

export const MovieHero: React.FC<MovieHeroProps> = ({
  backdrop_path,
  title,
  overview,
  release_date,
  genres,
  id,
}) => {
  const releaseDate = new Date(release_date)
  return (
    <section className="relative z-[2000] w-full text-white before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-full before:bg-black/50 before:content-['']">
      <Image
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt={title}
        width={1920}
        height={1080}
        className="md:aspect-video h-screen animate-fade object-cover animate-delay-300 animate-duration-500 animate-once animate-ease-in"
        quality={70}
        priority
      />
      <div className="container absolute top-0 z-50 flex h-full w-full items-end py-36">
        <GoBackButton className="absolute top-8 z-50" />
        <div className="animate-fade-up space-y-3 animate-delay-300 animate-duration-500 animate-once animate-ease-in md:space-y-9">
          <h1 className="font-primary text-2xl font-semibold md:-ml-2 md:text-5xl lg:text-9xl">
            {title}
          </h1>
          <div className="w-full flex-wrap space-x-4 font-bold tracking-wider">
            <span>{releaseDate.getFullYear()}</span>
            <span>•</span>
            <span className="space-x-2">
              {genres.map((genre, index) => (
                <span key={genre.id}>
                  {genre.name}
                  {index < genres.length - 1 && ","}
                </span>
              ))}
            </span>
          </div>
          <p className="text-xs tracking-wide md:w-1/2 md:text-xl">
            {overview}
          </p>
          <TrailerDialog
            triggerButton={
              <button className="flex items-center gap-3">
                <PlayCircle className="h-8 w-8 md:h-12 md:w-12" />
                <span className="text-lg md:text-2xl">Play trailer</span>
              </button>
            }
            movieId={id}
          />
        </div>
      </div>
    </section>
  )
}
