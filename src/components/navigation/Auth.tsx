import { FC } from "react";
import { signOut } from "../../services/users";
import Link from "next/link";
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { capitaliseFirstLetter } from "../../utils/helpers";

type Props = {
  classes: string
}

const NavAuth: FC<Props> = ({ classes }) => {
  const router = useRouter()

  const user = useSelector((state: RootState) => state.auth.user);

  if (user) {
    return (
      <>
        <p>{capitaliseFirstLetter(user.username)}</p>
        <a className={classes} onClick={signOut}>
          Sign out
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