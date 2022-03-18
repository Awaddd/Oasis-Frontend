import { Key } from 'react';
import { getCategories } from '../services/global';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Category } from '../utils/types/global';

const Navigation = () => {
  const { error, isLoading, data } = useQuery('categories', getCategories);

  const router = useRouter();
  const category = router.query.category;

  if (error) return <p>Error...</p>

  return (
    <>
      <Link href="/">
        <a className={`${router.pathname === '/' && 'text-primary'}`}>Home</a>
      </Link>

      {!isLoading && data && data?.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
        <Link href={`/${pluralName.toLowerCase()}`} key={key}>
          <a className={`${category === pluralName.toLowerCase() && 'text-primary'}`}>{pluralName}</a>
        </Link>
      ))}
    </>
  )

}

export default Navigation;
