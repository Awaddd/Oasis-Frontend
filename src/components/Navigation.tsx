import { useState, useEffect, Key } from 'react';
import { getCategories } from '../services/global';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '../state/state';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Category } from '../utils/types/global';
import Menu, { link } from './sub-components/Menu';

const classes = 'md:transition md:hover:text-primary outline-none';

const Navigation = () => {
  const { error, isLoading, data } = useQuery('categories', getCategories);
  const [menuData, setMenuData] = useState<link[]>();

  const [category, setCategory] = useRecoilState(selectedCategoryState);

  const categories: Category[] = data?.categories;

  const router = useRouter();

  if (error) return <p>Error...</p>

  useEffect(() => {
    if (!isLoading && data && data?.categories) {
      setMenuData(categories.map(({ pluralName }) => {
        return {
          name: pluralName,
          link: `/${pluralName.toLowerCase()}`,
        }
      }));
    }
  }, [data]);

  useEffect(() => {
    setCategory(router.query.category as string);
  }, [router?.query?.category])

  return (
    <>
      <Link href="/">
        <a className={`${classes} ${router.pathname === '/' && 'text-primary'}`}>Home</a>
      </Link>

      <Link href="/author">
        <a className={`${classes} ${router.pathname === '/author' && 'text-primary'}`}>Author</a>
      </Link>

      <Link href="/books">
        <a className={`${classes} ${router.pathname === '/books' && 'text-primary'}`}>Books</a>
      </Link>

      <Menu label="Articles" data={menuData} />

      <div className="flex flex-col gap-2 md:hidden">
        {!isLoading && data && data?.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
          <Link href={`/${pluralName.toLowerCase()}`} key={key}>
            <a className={`${classes} ${category === pluralName.toLowerCase() && 'text-primary'}`}>{pluralName}</a>
          </Link>
        ))}
      </div>

      <Link href="/user/register">
        <a className={`${classes} ${router.pathname === '/user/register' && 'text-primary'}`}>Register</a>
      </Link>

      <Link href="/user/login">
        <a className={`${classes} ${router.pathname === '/user/login' && 'text-primary'}`}>Login</a>
      </Link>
    </>
  )

}

export default Navigation;
