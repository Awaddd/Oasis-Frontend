import { FC, useState } from "react"
import { Meta } from "../../layout/Meta"
import { Main } from "../../templates/Main"
import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterUserFormFields } from "../../utils/types/users"
import Email from "../../components/user-form-fields/Email"
import Password from "../../components/user-form-fields/Password"
import { useRouter } from "next/router"
import ErrorMessage from "../../components/sub-components/ErrorMessage"
import Link from "next/link"
import { login } from "../../services/users"

const META = <Meta title="Omar Dini | Login" description="Omar Dini's personal blog" />

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserFormFields>()
  const [error, setError] = useState<string>("")

  const { push } = useRouter()

  const onSubmit: SubmitHandler<RegisterUserFormFields> = async (data, e) => {
    e?.preventDefault()

    const dev = {
      email: "admin@mail.com",
      password: "password123"
    }

    const error = await login(dev)

    if (error) {
      setError(error)
      console.log("error", error)
      return
    }

    push("/")
  }

  return (
    <Main meta={META}>
      <section className="auth-section">
        <h1 className="text-center auth-header">Login</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>
          <Email register={register} error={errors?.email?.message} />
          <Password register={register} error={errors?.password?.message} />
          <ErrorMessage error={error} />
          <button className="py-[0.8rem] btn-flex">Login</button>

          <p className="my-4 font-semibold text-center text-gray-600">Login with</p>

          {/* Disabled temporarily */}
          {/* <SocialLogin /> */}

          <span className="mt-4 font-medium text-center text-gray-900">
            Don't have an account?&nbsp;
            <Link href="/user/register">
              <a className="link">Sign up instead</a>
            </Link>
          </span>
        </form>
      </section>
    </Main>
  )
}

export default Login
