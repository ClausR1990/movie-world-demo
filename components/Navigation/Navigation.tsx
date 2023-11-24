import Link from "next/link"
import { NavigationItems } from "./NavigationItems"

type NavigationProps = {}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <header className="container fixed top-0 z-50 flex max-w-full items-center justify-start gap-6 bg-black/50 py-6 text-foreground">
      <Link href="/">
        <h1 className="font-primary text-xl uppercase">
          <span className="font-bold text-primary">Movie</span>World
        </h1>
      </Link>
      <NavigationItems />
    </header>
  )
}
