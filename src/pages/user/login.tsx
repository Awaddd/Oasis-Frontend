import { FC, useState } from "react";
import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUserFormFields } from "../../utils/types/Users";
import Email from "../../components/user-form-fields/Email";
import Password from "../../components/user-form-fields/Password";
import { login } from "../../services/users";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { userSessionState } from "../../state/state";
import { createUserSessionObject } from "../../utils/helpers";
import ErrorMessage from "../../components/sub-components/ErrorMessage";
import Link from "next/link";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Login: FC = () => {
  const setSession = useSetRecoilState(userSessionState)
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserFormFields>();
  const [error, setError] = useState<string>('');

  const { push } = useRouter();

  const onSubmit: SubmitHandler<RegisterUserFormFields> = async (data, e) => {
    e?.preventDefault()

    const { error, session, user } = await login(data)

    if (error) {
      setError(error.message)
      console.log('error', error)
      return
    }

    setSession(await createUserSessionObject(user, session))

    push('/')
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center mt-xl">Login</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>
          <Email register={register} error={errors?.email?.message} />
          <Password register={register} error={errors?.password?.message} />
          <ErrorMessage error={error} />
          <button className="py-[0.8rem] btn-flex">Login</button>
          <span>Don't have an account?&nbsp;
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