import React, { FC, useState } from "react";
import { Meta } from "../../layout/Meta";
import { createUser } from "../../services/users";
import { Main } from "../../templates/Main";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUserFormFields } from "../../utils/types/Users";
import Email from "../../components/user-form-fields/Email";
import Username from "../../components/user-form-fields/Username";
import Password from "../../components/user-form-fields/Password";
import ConfirmPassword from "../../components/user-form-fields/ConfirmPassword";
import { useSetRecoilState } from "recoil";
import { userSessionState } from "../../state/state";
import ErrorMessage from "../../components/sub-components/ErrorMessage";
import { useRouter } from "next/router";
import { createUserSessionObject } from "../../utils/helpers";
import Link from 'next/link';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Register: FC = () => {
  const setSession = useSetRecoilState(userSessionState)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterUserFormFields>();
  const [error, setError] = useState<string>('');

  const { push } = useRouter()

  const onSubmit: SubmitHandler<RegisterUserFormFields> = async (data, e) => {
    e?.preventDefault()

    const { confirmPassword, ...fields } = data;

    const { user, session, error } = await createUser(fields)

    if (error) {
      setError(error.message)
      console.log('error', error)
      return
    }

    setSession(await createUserSessionObject(user, session))

    push('/')
  }

  const password = watch("password")
  const passwordValidation = {
    value: 7,
    message: 'Password must be at least 8 characters'
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center mt-xl">Sign Up</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>
          <Email register={register} error={errors?.email?.message} />
          <Username register={register} error={errors?.username?.message} />
          <Password register={register} error={errors?.password?.message} minLength={passwordValidation} />
          <ConfirmPassword register={register} error={errors?.confirmPassword?.message} password={password} />
          <ErrorMessage error={error} />
          <button className="py-[0.8rem] btn-flex">Sign Up</button>
          <span>Already have an account?&nbsp;
            <Link href="/user/login">
              <a className="link">Sign in instead</a>
            </Link></span>
        </form>
      </section>
    </Main>
  )
}

export default Register