import React, { ReactNode, FC } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';
import Navigation from '../components/Navigation';

type IMainProps = {
  meta: ReactNode;
  color?: string;
  classes?: string;
  footerProps?: { dark?: boolean; }
  footer?: FC | JSX.Element;
  children: ReactNode;
};

const Main = ({ meta, color, classes, footerProps, footer, children }: IMainProps) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  return (
    <>
      <div className={`md:hidden ease-in-out duration-300 fixed top-0 right-0 z-30 flex flex-col gap-1 w-3/4 h-full px-4 pt-12 text-2xl text-center text-white bg-gray-900 ${sidebarIsOpen ? 'translate-x-0' : `translate-x-full`}`}>
        <Navigation />
      </div>
      <div className="flex flex-col w-full h-full antialiased font-inter" onClick={() => setSidebarIsOpen(false)}>
        <Nav meta={meta} color={color} />
        <main className={`h-full global-padding ${color} ${classes}`}>{children}</main>
        <Footer {...footerProps}>
          {footer && footer}
        </Footer>
      </div>
    </>
  );
}

export { Main };
