import { Key } from 'react';
import { getCategories } from '../services/global';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Category } from '../utils/types/global';

const classes = 'md:transition md:hover:text-primary outline-none';

const Navigation = () => {
  const { error, isLoading, data } = useQuery('categories', getCategories);

  const router = useRouter();
  const category = router.query.category;

  if (error) return <p>Error...</p>

  return (
    <>
      <Link href="/">
        <a className={`${classes} ${router.pathname === '/' && 'text-primary'}`}>Home</a>
      </Link>

      <Link href="/author">
        <a className={`${classes} ${router.pathname === '/author' && 'text-primary'}`}>Author</a>
      </Link>

      {!isLoading && data && data?.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
        <Link href={`/${pluralName.toLowerCase()}`} key={key}>
          <a className={`${classes} ${category === pluralName.toLowerCase() && 'text-primary'}`}>{pluralName}</a>
        </Link>
      ))}
    </>
  )

}

export default Navigation;
