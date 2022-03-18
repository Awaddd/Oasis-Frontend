import { ReactNode, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';
import BurgerMenu from 'hamburger-react';
import Navigation from '../components/Navigation';

const Nav = ({ meta, color }: { meta: ReactNode; color?: string }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    setSidebarIsOpen(currVal => !currVal);
  };

  return (
    <nav className={`w-full py-2 lg:py-7 md:py-5 antialiased nav-padding ${color}`}>

      {meta}

      <div className="flex justify-between 2xl:w-9/12 2xl:mx-auto">
        <a href="/" className="self-center cursor-pointer brand justify-self-start">
          Omar Dini<span className="text-primary">.</span>
        </a>

        <div className="z-40 md:hidden" onClick={handleClick}>
          <BurgerMenu toggled={sidebarIsOpen} size={25} color={sidebarIsOpen ? '#fff' : '#1a202c'} label="Show menu" />
        </div>
        <div className="justify-end hidden gap-6 justify-self-end md:flex">
          <Navigation />
        </div>
      </div>

    </nav>
  );
}

export default Nav;
