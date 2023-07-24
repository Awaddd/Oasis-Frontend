import { FC } from "react";
import { logout } from "../../services/users";
import Link from "next/link";
import { useRouter } from "next/router"

type Props = {
  classes: string
}

const NavAuth: FC<Props> = ({ classes }) => {
  const router = useRouter()

  const handleOnClickLogout = async () => {
    await logout()
  }

  // get real session from state
  const session = null

  if (session) {
    return (
      <>
        {/* show user name here */}
        {/* <p>{capitaliseFirstLetter(session.user.username)}</p> */}
        <a className={classes} onClick={handleOnClickLogout}>
          Logout
        </a>
      </>
    )
  }

  return (
    <>
      <Link href="/user/register">
        <a className={`${classes} ${router.pathname === "/user/register" && "text-primary"}`}>Register</a>
      </Link>

      <Link href="/user/login">
        <a className={`${classes} ${router.pathname === "/user/login" && "text-primary"}`}>Login</a>
      </Link>
    </>
  )
}

export default NavAuth