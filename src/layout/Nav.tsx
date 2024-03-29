import { ReactNode, MouseEvent } from "react"
import { useRecoilState } from "recoil"
import { sidebarIsOpenState } from "../state/state"
import BurgerMenu from "hamburger-react"
import Navigation from "../components/Navigation"
import Link from "next/link"

const Nav = ({ meta, color }: { meta: ReactNode; color?: string }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState)

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation()
    setSidebarIsOpen((currVal) => !currVal)
  }

  return (
    <nav className={`w-full py-2 lg:py-7 md:py-5 antialiased nav-padding ${color}`}>
      {meta}

      <div className="flex justify-between transition-all duration-200 ease-in-out 2xl:w-9/12 2xl:mx-auto">
        <Link href="/">
          <a className="self-center outline-none cursor-pointer select-none brand justify-self-start md:transition md:hover:text-primary">
            Omar Dini
          </a>
        </Link>

        <div className="z-40 md:hidden" onClick={handleClick}>
          <BurgerMenu toggled={sidebarIsOpen} size={25} color={sidebarIsOpen ? "#fff" : "#1a202c"} label="Show menu" />
        </div>
        <div className="justify-end hidden gap-6 justify-self-end md:flex md:items-center">
          <Navigation />
        </div>
      </div>
    </nav>
  )
}

export default Nav
