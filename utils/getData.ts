import { endpoints } from "@/endpoints"

export const getMovieData = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(`${endpoints.moviedb}/${url}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`,
    },
  })
  if (!response.ok || response.status !== 200) {
    return null
  }
  return await response.json()
}

export const getData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${endpoints.moviedb}${endpoint}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_TOKEN}`,
    },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}
