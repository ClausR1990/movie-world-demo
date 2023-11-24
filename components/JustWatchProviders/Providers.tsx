import { getData } from "@/utils/getData"
import Image from "next/image"

export type ProviderData = {
  id: number
  results: ProviderItem
}
export type ProviderItem = {
  AE: ProviderOptions
  AL: ProviderOptions
  AR: ProviderOptions
  AT: ProviderOptions
  AU: ProviderOptions
  AZ: ProviderOptions
  BA: ProviderOptions
  BB: ProviderOptions
  BE: ProviderOptions
  BG: ProviderOptions
  BH: ProviderOptions
  BO: ProviderOptions
  BR: ProviderOptions
  BS: ProviderOptions
  BZ: ProviderOptions
  CA: ProviderOptions
  CH: ProviderOptions
  CL: ProviderOptions
  CO: ProviderOptions
  CR: ProviderOptions
  CV: ProviderOptions
  CY: ProviderOptions
  CZ: ProviderOptions
  DE: ProviderOptions
  DK: ProviderOptions
  DO: ProviderOptions
  EC: ProviderOptions
  EE: ProviderOptions
  EG: ProviderOptions
  ES: ProviderOptions
  FI: ProviderOptions
  FJ: ProviderOptions
  FR: ProviderOptions
  GB: ProviderOptions
  GF: ProviderOptions
  GG: ProviderOptions
  GI: ProviderOptions
  GR: ProviderOptions
  GT: ProviderOptions
  GY: ProviderOptions
  HK: ProviderOptions
  HN: ProviderOptions
  HR: ProviderOptions
  HU: ProviderOptions
  ID: ProviderOptions
  IE: ProviderOptions
  IL: ProviderOptions
  IN: ProviderOptions
  IQ: ProviderOptions
  IS: ProviderOptions
  IT: ProviderOptions
  JM: ProviderOptions
  JO: ProviderOptions
  JP: ProviderOptions
  KR: ProviderOptions
  KW: ProviderOptions
  LB: ProviderOptions
  LI: ProviderOptions
  LT: ProviderOptions
  LU: ProviderOptions
  LV: ProviderOptions
  MC: ProviderOptions
  MD: ProviderOptions
  MK: ProviderOptions
  MT: ProviderOptions
  MU: ProviderOptions
  MX: ProviderOptions
  MY: ProviderOptions
  MZ: ProviderOptions
  NI: ProviderOptions
  NL: ProviderOptions
  NO: ProviderOptions
  NZ: ProviderOptions
  OM: ProviderOptions
  PA: ProviderOptions
  PE: ProviderOptions
  PF: ProviderOptions
  PH: ProviderOptions
  PK: ProviderOptions
  PL: ProviderOptions
  PS: ProviderOptions
  PT: ProviderOptions
  PY: ProviderOptions
  QA: ProviderOptions
  RO: ProviderOptions
  RS: ProviderOptions
  RU: ProviderOptions
  SA: ProviderOptions
  SE: ProviderOptions
  SG: ProviderOptions
  SI: ProviderOptions
  SK: ProviderOptions
  SM: ProviderOptions
  SV: ProviderOptions
  TH: ProviderOptions
  TR: ProviderOptions
  TT: ProviderOptions
  TW: ProviderOptions
  UA: ProviderOptions
  UG: ProviderOptions
  US: ProviderOptions
  UY: ProviderOptions
  VE: ProviderOptions
  YE: ProviderOptions
  ZA: ProviderOptions
}

export type Options = {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export type ProviderOptions = {
  link?: string
  buy?: Options[]
  ads?: Options[]
  rent?: Options[]
  free?: Options[]
  flatrate?: Options[]
}

export enum ProviderType {
  buy = "Available for purchase",
  ads = "Watch with ads",
  rent = "Available for rental",
  free = "Watch for free",
  flatrate = "Available for streaming",
}

type JustWatchProvidersProps = {
  movieId: number
  region: keyof ProviderItem
}

export const JustWatchProviders: React.FC<JustWatchProvidersProps> = async ({
  movieId,
  region,
}) => {
  const providerData = await getData<ProviderData>(
    `/movie/${movieId}/watch/providers`
  )
  const providers = providerData.results[region]
  if (!providers) return null
  return (
    <div className="space-y-3">
      {Object.keys(providers).map((key, index: number) => {
        const provider = providers[key as keyof ProviderOptions]
        if (typeof provider === "string") return
        return (
          <div key={index} className="space-y-3">
            <div className="flex gap-4">
              {provider?.map((option) => (
                <div key={option.provider_id} className="w-10">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${option.logo_path}`}
                    alt={option.provider_name}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-xs">
              {ProviderType[key as keyof typeof ProviderType]}
            </h2>
          </div>
        )
      })}
    </div>
  )
}
