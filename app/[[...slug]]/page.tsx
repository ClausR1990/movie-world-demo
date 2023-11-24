import { ListPage, type MovieList } from "@/components/PageComponent"
import { DetailPage, MovieDetail } from "@/components/PageComponent/DetailPage"
import { getMovieData } from "@/utils/getData"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: { slug: string[] }
  searchParams: Record<string, string> | undefined
}

async function getDataFromParameters({ params, searchParams }: Props) {
  const urlParameters = new URLSearchParams(searchParams).toString()
  const fetchurl =
    params.slug &&
    `${params.slug.join("/")}${
      urlParameters
        ? `?${urlParameters}&append_to_response=credits`
        : "?append_to_response=credits"
    }`
  return await getMovieData<MovieList | MovieDetail | null>(fetchurl)
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const data = await getDataFromParameters({ params, searchParams })
  if (data && "results" in data) {
    const title = params.slug.pop()?.replace("_", " ") ?? ""
    return {
      title: `${title.charAt(0).toUpperCase() + title.slice(1)} | Movie World`,
    }
  }
  if (data && "imdb_id" in data) {
    const releaseDate = new Date(data.release_date)
    return {
      title: `${data.title} • ${releaseDate.getFullYear()} | Movie World`,
      description: data.overview,
    }
  }
  return {}
}

export default async function Page({ params, searchParams }: Props) {
  if (Object.keys(params).length === 0) {
    return <div>Forside</div>
  }
  const data = await getDataFromParameters({ params, searchParams })

  if (data && "results" in data) {
    return <ListPage {...(data as MovieList)} />
  }
  if (data && "imdb_id" in data) {
    return <DetailPage {...(data as MovieDetail)} />
  }
  return notFound()
}
