import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { getData } from "@/utils/getData"

type TrailerDialogProps = {
  triggerButton: React.ReactNode
  movieId: number
}

export type Trailers = {
  id: number
  results: TrailerItems[]
}

export type TrailerItems = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}

export const TrailerDialog: React.FC<TrailerDialogProps> = async ({
  triggerButton,
  movieId,
}) => {
  const trailers = await getData<Trailers>(`/movie/${movieId}/videos`)
  const officielTrailer = trailers.results.find(
    (item) => item.type === "Trailer"
  )
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${officielTrailer?.key}?autoplay=true`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
