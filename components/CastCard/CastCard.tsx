import { User } from "lucide-react"
import Image from "next/image"

export type Cast = {
  adult: boolean
  gender: number
  id: number
  known_for_department: Department
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  department?: Department
  job?: string
}

export type Department =
  | "Acting"
  | "Crew"
  | "Writing"
  | "Visual Effects"
  | "Directing"
  | "Production"
  | "Costume & Make-Up"
  | "Art"
  | "Sound"
  | "Camera"
  | "Editing"
  | "Lighting"

export const CastCard: React.FC<Cast> = ({
  profile_path,
  character,
  original_name,
  job,
}) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-lg text-center">
      {profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={original_name}
          width={500}
          height={500}
          quality={50}
          className="transition-opacity group-hover:opacity-30"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <User className="h-48 w-48 text-black/30" />
        </div>
      )}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="-mb-[1000px] transition-all group-hover:mb-0">
          <h2 className="text-2xl font-bold">{original_name}</h2>
          <p>{character ?? job}</p>
        </div>
      </div>
    </div>
  )
}
