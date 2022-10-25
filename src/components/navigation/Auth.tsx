import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { logout } from "../../services/users";
import { userSessionState } from "../../state/state";
import { capitaliseFirstLetter } from "../../utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router"

type Props = {
  classes: string
}

const NavAuth: FC<Props> = ({ classes }) => {
  const [session, setSession] = useRecoilState(userSessionState)
  const router = useRouter()

  useEffect(() => {
    console.log("session", session)
  }, [session])

  const handleOnClickLogout = async () => {
    const { error } = await logout()
    console.log(error?.message)
    setSession(null)
  }

  if (session) {
    return (
      <>
      <p>{capitaliseFirstLetter(session.user.username)}</p>
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