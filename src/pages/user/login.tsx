import { FC } from "react";
import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterUserFormFields } from "../../utils/types/Users";
import Email from "../../components/user-form-fields/Email";
import Password from "../../components/user-form-fields/Password";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Login: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserFormFields>();

  const onSubmit: SubmitHandler<RegisterUserFormFields> = (data, e) => {
    e?.preventDefault()

    console.log('data', data)
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Login</h1>
        <form className="form form-margins" onSubmit={handleSubmit(onSubmit)}>
          <Email register={register} error={errors?.email?.message} />
          <Password register={register} error={errors?.password?.message} />
          <button className="py-3 mt-2 btn-flex">Login</button>
        </form>
      </section>
    </Main>
  )
}

export default Login