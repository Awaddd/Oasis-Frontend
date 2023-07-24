import React, { ReactNode, FC } from "react"

import Nav from "../layout/Nav"
import Footer from "../layout/Footer"
import Navigation from "../components/Navigation"
import { useDispatch, useSelector } from "react-redux"
import { setSidebarIsOpen } from "../state/global"
import { RootState } from "../state/store"

type IMainProps = {
  meta: ReactNode
  color?: string
  classes?: string
  footerProps?: { classes?: string }
  footer?: FC | JSX.Element
  children: ReactNode
}

const Main = ({ meta, color, classes, footerProps, footer, children }: IMainProps) => {
  const sidebarIsOpen = useSelector((state: RootState) => state.global.sidebarIsOpen);
  const dispatch = useDispatch()

  return (
    <>
      <div
        className={`md:hidden ease-in-out duration-300 fixed top-0 right-0 z-30 flex flex-col gap-2 w-3/4 h-full px-4 pt-16 text-2xl text-center text-white bg-dark ${sidebarIsOpen ? "translate-x-0" : `translate-x-full`
          }`}
      >
        <Navigation isMobile={true} />
      </div>
      <div
        className="grid w-screen h-full min-h-screen antialiased app-grid font-inter"
        onClick={() => dispatch(setSidebarIsOpen(false))}
      >
        <Nav meta={meta} color={color} />
        <main className={`h-full global-padding ${color} ${classes}`}>{children}</main>
        <Footer {...footerProps}>{footer && footer}</Footer>
      </div>
    </>
  )
}

export { Main }
