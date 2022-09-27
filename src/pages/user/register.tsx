import React, { FC } from "react";
import { Meta } from "../../layout/Meta";
import { createUser } from "../../services/users";
import { Main } from "../../templates/Main";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUserFormFields } from "../../utils/types/Users";
import Email from "../../components/user-form-fields/Email";
import FirstName from "../../components/user-form-fields/FirstName";
import LastName from "../../components/user-form-fields/LastName";
import Password from "../../components/user-form-fields/Password";
import ConfirmPassword from "../../components/user-form-fields/ConfirmPassword";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Register: FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterUserFormFields>();

  const onSubmit: SubmitHandler<RegisterUserFormFields> = (data, e) => {
    e?.preventDefault()

    const { confirmPassword, ...user } = data;
    createUser(user)
  }

  const password = watch("password")
  const passwordValidation = {
    value: 8,
    message: 'Password must be at least 8 characters'
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Register</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>
          <Email register={register} error={errors?.email?.message} />
          <FirstName register={register} error={errors?.firstName?.message} />
          <LastName register={register} error={errors?.lastName?.message} />
          <Password register={register} error={errors?.password?.message} minLength={passwordValidation} />
          <ConfirmPassword register={register} error={errors?.confirmPassword?.message} password={password} />
          <button className="py-3 mt-2 btn-flex">Register</button>
        </form>
      </section>
    </Main>
  )
}

export default Register