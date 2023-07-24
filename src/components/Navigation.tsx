import { useState, useEffect, Key, FC } from "react"
import { getCategories } from "../services/global"
import { useQuery } from "react-query"
import Link from "next/link"
import { useRouter } from "next/router"
import { Category } from "../types/global"
import Menu, { link } from "./sub-components/Menu"
import dynamic from "next/dynamic"
import { RootState } from "../state/store"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedCategory } from "../state/global"

const classes = "md:transition md:hover:text-primary outline-none cursor-pointer"

const Auth = dynamic(() => import('./navigation/Auth'), { ssr: false })

type Props = {
  isMobile?: boolean
}

const Navigation: FC<Props> = ({ isMobile }) => {
  const { error, isLoading, data } = useQuery("categories", getCategories)
  const [menuData, setMenuData] = useState<link[]>()

  const category = useSelector((state: RootState) => state.global.selectedCategory)
  const dispatch = useDispatch()

  const categories: Category[] = data?.categories

  const router = useRouter()

  if (error) return <p>Error...</p>

  useEffect(() => {
    if (!isLoading && data && data?.categories) {
      setMenuData(
        categories.map(({ pluralName }) => {
          return {
            name: pluralName,
            link: `/${pluralName.toLowerCase()}`,
          }
        }),
      )
    }
  }, [data])

  useEffect(() => {
    dispatch(setSelectedCategory(router.query.category as string))
  }, [router?.query?.category])

  return (
    <>
      <Link href="/">
        <a className={`${classes} ${router.pathname === "/" && "text-primary"}`}>Home</a>
      </Link>

      <Link href="/author">
        <a className={`${classes} ${router.pathname === "/author" && "text-primary"}`}>Author</a>
      </Link>

      <Link href="/books">
        <a className={`${classes} ${router.pathname === "/books" && "text-primary"}`}>Books</a>
      </Link>

      <Menu label="Articles" data={menuData} />

      <div className="flex flex-col gap-2 md:hidden">
        {!isLoading &&
          data &&
          data?.categories.map(({ pluralName }: Category, key: Key | null | undefined) => (
            <Link href={`/${pluralName.toLowerCase()}`} key={key}>
              <a className={`${classes} ${category === pluralName.toLowerCase() && "text-primary"}`}>{pluralName}</a>
            </Link>
          ))}
      </div>

      {isMobile && <span className="divider"></span>}

      <Auth classes={classes} />

    </>
  )
}

export default Navigation
