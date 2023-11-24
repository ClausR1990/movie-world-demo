import Image from "next/image"
import { MovieItem } from "../PageComponent"
import Link from "next/link"
import { cn } from "@/utils"

type MovieCardProps = MovieItem & {
  active?: boolean
  expanded?: boolean
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster_path,
  id,
  expanded,
}) => {
  return (
    <Link
      href={`/movie/${id}`}
      className={cn(
        expanded && "col-span-2",
        "group cursor-pointer overflow-hidden rounded-sm bg-muted p-3"
      )}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        width={500}
        height={500}
        className="w-full transition-all duration-300 ease-in-out group-hover:scale-110"
      />
    </Link>
  )
}
