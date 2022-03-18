import React, { ReactNode, FC } from 'react';

import Nav from '../layout/Nav'
import Footer from '../layout/Footer'
import NavSidebar from '../components/NavSidebar';
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';

type IMainProps = {
  meta: ReactNode;
  color?: string;
  classes?: string;
  footerProps?: { dark?: boolean; }
  footer?: FC | JSX.Element;
  children: ReactNode;
};

const Main = ({ meta, color, classes, footerProps, footer, children }: IMainProps) => {
  const [, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  return (
    <>
      <NavSidebar />
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
