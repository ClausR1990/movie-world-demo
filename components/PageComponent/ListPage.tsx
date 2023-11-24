import { MovieList } from "../MovieList"
import { PaginationButtons } from "../PaginationButtons"

export type MovieList = {
  dates: Dates
  page: number
  results: MovieItem[]
  total_pages: number
  total_results: number
}

export type Dates = {
  maximum: Date
  minimum: Date
}

export type MovieItem = {
  adult: boolean
  backdrop_path: string
  genre_ids: string[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type PageComponentProps = MovieList & {}

export const ListPage: React.FC<PageComponentProps> = ({ results }) => {
  return (
    <main>
      <section className="container max-w-full space-y-9 py-24">
        <MovieList list={results} />
        <PaginationButtons />
      </section>
    </main>
  )
}
