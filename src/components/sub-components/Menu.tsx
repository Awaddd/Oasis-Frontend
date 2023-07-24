import { FC, Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Link from "next/link"
import { useSelector } from "react-redux"
import { RootState } from "../../state/store"

function MyLink(props: { [x: string]: any; href: any; children: any }) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

export type link = {
  name: string
  link: string
}

type Props = {
  label: string
  data?: link[]
}

const BasicMenu: FC<Props> = ({ label, data }) => {
  if (!label) return null
  const category = useSelector((state: RootState) => state.global.selectedCategory)

  return (
    <Menu as="div" className="relative hidden text-left md:inline-block">
      <div>
        <Menu.Button
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text hover:bg-gray-50 focus:outline-none"
          id="menu-button"
        >
          {label}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {data && (
          <Menu.Items className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {data.map(({ name, link }, key) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <MyLink
                      href={link}
                      className={`block px-4 py-2 text-sm hover:bg-primary hover:text-gray-100 ${category === name.toLowerCase() && !active && "text-primary"
                        } ${active && "bg-primary text-gray-100"}`}
                    >
                      {name}
                    </MyLink>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}

export default BasicMenu
