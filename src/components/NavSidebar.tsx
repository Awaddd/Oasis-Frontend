import React from 'react';
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';

const NavSidebar = ({ data }: { data?: any; }) => {
  const [sidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  return (
    <div className={`ease-in-out duration-300 fixed top-0 right-0 z-30 flex flex-col w-3/4 h-full px-4 pt-12 text-2xl text-center text-white bg-gray-900 ${sidebarIsOpen ? 'translate-x-0' : `translate-x-full`}`}>
      <a href="/">
        Home
      </a>
      <a href="/salads">
        Salads
      </a>
      <a href="/pizzas">
        Pizzas
      </a>
      <a href="/desserts">
        Desserts
      </a>
    </div>
  );
}

export default NavSidebar;
