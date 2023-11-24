import TMDB from "@/public/blue_short-tmdb.svg"
import Image from "next/image"

export const Footer: React.FC = () => {
  return (
    <footer className="container max-w-full pb-24 pt-10 text-foreground">
      <div className="space-y-1">
        <h2>Credits:</h2>
        <Image className="w-32" src={TMDB} alt="" />
      </div>
    </footer>
  )
}
