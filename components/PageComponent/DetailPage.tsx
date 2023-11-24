import { MovieHero } from "../MovieHero"
import { Cast, CastCard } from "../CastCard"
import { Carousel } from "../Carousel"
import { getData } from "@/utils/getData"
import { JustWatchProviders } from "../JustWatchProviders"

export type MovieDetail = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  credits: Credits
}

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type Credits = {
  id: number
  cast: Cast[]
  crew: Cast[]
}

type DetailPageProps = MovieDetail & {}

export const DetailPage: React.FC<DetailPageProps> = async (props) => {
  const { id, credits } = props

  return (
    <main>
      <MovieHero {...props} />
      <section className="container max-w-full pt-14">
        <JustWatchProviders movieId={id} region="DK" />
      </section>
      <section className="container max-w-full py-14">
        <h2 className="mb-6 font-primary text-3xl">The Cast</h2>
        <Carousel
          options={{
            loop: true,
            align: "start",
          }}
          autoplay={false}
        >
          {credits.cast.map((member) => (
            <CastCard key={member.id} {...member} />
          ))}
        </Carousel>
      </section>
      <section className="container max-w-full py-14">
        <h2 className="mb-6 font-primary text-3xl">The Crew</h2>
        <Carousel
          options={{
            loop: true,
            align: "start",
          }}
          autoplay={false}
        >
          {credits.crew.map((member) => (
            <CastCard key={member.id} {...member} />
          ))}
        </Carousel>
      </section>
    </main>
  )
}
