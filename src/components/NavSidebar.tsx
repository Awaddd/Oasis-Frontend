import React, { Key } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';
import { getCategories } from '../services/global';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Category } from '../utils/types/global';

const NavSidebar = () => {

  const { error, isLoading, data } = useQuery('categories', getCategories);

  const router = useRouter();
  const category = router.query.category;

  const [sidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  if (error) return <p>Error...</p>

  return (
    <div className={`md:hidden ease-in-out duration-300 fixed top-0 right-0 z-30 flex flex-col gap-1 w-3/4 h-full px-4 pt-12 text-2xl text-center text-white bg-gray-900 ${sidebarIsOpen ? 'translate-x-0' : `translate-x-full`}`}>
      <Link href="/">
        <a className={`${router.pathname === '/' && 'text-primary'}`}>Home</a>
      </Link>

      {!isLoading && data && data?.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
        <Link href={`/${pluralName.toLowerCase()}`} key={key}>
          <a className={`${category === pluralName.toLowerCase() && 'text-primary'}`}>{pluralName}</a>
        </Link>
      ))}
    </div>
  );
}

export default NavSidebar;
