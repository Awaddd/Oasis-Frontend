import { Key, ReactNode, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { client } from '../services/api';
import { useRecoilState } from 'recoil';
import { sidebarIsOpenState } from '../state/state';
import BurgerMenu from 'hamburger-react';

const Nav = ({ meta, color }: { meta: ReactNode; color?: string }) => {

  const router = useRouter()
  const category = router.query.category

  const { error, isLoading, data } = useQuery('categories', async () => await client.request(CATEGORIES));

  const [sidebarIsOpen, setSidebarIsOpen] = useRecoilState(sidebarIsOpenState);

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    setSidebarIsOpen(currVal => !currVal);
  };

  if (error) return <p>Error...</p>

  return (
    <nav className={`w-full py-2 lg:py-7 md:py-5 antialiased nav-padding ${color}`}>

      {meta}

      <div className="flex justify-between 2xl:w-9/12 2xl:mx-auto">
        <a href="/" className="self-center cursor-pointer brand justify-self-start">
          Omar Dini<span className="text-primary">.</span>
        </a>

        {!isLoading && !error && data && (
          <>
            <div className="z-40 md:hidden" onClick={handleClick}>
              <BurgerMenu toggled={sidebarIsOpen} size={25} color={sidebarIsOpen ? '#fff' : '#1a202c'} label="Show menu" />
            </div>
            <div className="justify-end hidden gap-6 justify-self-end md:flex">
              <Link href="/">
                <a className={`${router.pathname === '/' && 'text-primary'}`}>Home</a>
              </Link>

              {data.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
                <Link href={`/${pluralName.toLowerCase()}`} key={key}>
                  <a className={`${category === pluralName.toLowerCase() && 'text-primary'}`}>{pluralName}</a>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

    </nav>
  );
}

type Category = {
  id: number;
  name: string;
  pluralName: string;
}

const CATEGORIES = gql`
  query GetCategories {
    categories {
      name,
      pluralName,
      id
    }
  }
`

export default Nav;
