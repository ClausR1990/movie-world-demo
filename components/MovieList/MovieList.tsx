import { MovieCard } from "../MovieCard"
import { MovieItem } from "../PageComponent/ListPage"

type MovieListProps = {
  list: MovieItem[]
}

export const MovieList: React.FC<MovieListProps> = ({ list }) => {
  return (
    <section className="grid grid-cols-4 gap-4">
      {list.map((item) => (
        <MovieCard key={item.id} {...item} />
      ))}
    </section>
  )
}
