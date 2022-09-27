import React, { FC } from "react";
import ErrorMessage from "../../components/sub-components/ErrorMessage";
import { Meta } from "../../layout/Meta";
import { createUser } from "../../services/users";
import { Main } from "../../templates/Main";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUserFormFields } from "../../utils/types/Users";

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

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Register</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>

          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: 'Email must be valid'
              }
            })} className="input" />
            <ErrorMessage error={errors?.email?.message} />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">First name</label>
            <input {...register('firstName', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'First name must be at least 2 characters'
              },
              pattern: {
                value: /([A-Za-z])\w+/i,
                message: 'First name cannot contain any numbers'
              }
            })} className="input" />
            <ErrorMessage error={errors?.firstName?.message} />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Last name</label>
            <input type="text" {...register('lastName', {
              required: 'Last name is required',
              minLength: {
                value: 2,
                message: 'Last name must be at least 2 characters'
              },
              pattern: {
                value: /([A-Za-z])\w+/i,
                message: 'Last name cannot contain any numbers'
              }
            })} className="input" />
            <ErrorMessage error={errors?.lastName?.message} />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Password</label>
            <input type="password" {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })} className="input" />
            <ErrorMessage error={errors?.password?.message} />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Confirm Password</label>
            <input type="password" {...register('confirmPassword', {
              required: 'Confirm Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              },
              validate: (confirmPassword) => confirmPassword === password || 'Confirm password must be the same as the password'
            })} className="input" />
            <ErrorMessage error={errors?.confirmPassword?.message} />
          </fieldset>

          <button className="py-3 mt-2 btn-flex">Register</button>
        </form>
      </section>
    </Main>
  )
}

export default Register