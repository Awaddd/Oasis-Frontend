import React, { FC, useEffect, useState } from "react";
import ErrorMessage from "../../components/sub-components/ErrorMessage";
import { Meta } from "../../layout/Meta";
import { createUser } from "../../services/users";
import { Main } from "../../templates/Main";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Register: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errors, setErrors] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleFirstNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleLastNameOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    createUser({
      email,
      firstName,
      lastName,
      password,
    })
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Register</h1>
        <form className="form form-margins">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" value={email} onChange={handleEmailOnChange} className="input" />
          </fieldset>

          <ErrorMessage error={errors.email} />

          <fieldset className="fieldset">
            <label className="label">First name</label>
            <input type="text" name="firstName" value={firstName} onChange={handleFirstNameOnChange} className="input" />
          </fieldset>

          <ErrorMessage error={errors.firstName} />

          <fieldset className="fieldset">
            <label className="label">Last name</label>
            <input type="text" name="lastName" value={lastName} onChange={handleLastNameOnChange} className="input" />
          </fieldset>

          <ErrorMessage error={errors.lastName} />

          <fieldset className="fieldset">
            <label className="label">Password</label>
            <input type="text" name="password" value={password} onChange={handlePasswordOnChange} className="input" />
          </fieldset>

          <ErrorMessage error={errors.password} />

          <fieldset className="fieldset">
            <label className="label">Confirm Password</label>
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordOnChange} className="input" />
          </fieldset>

          <ErrorMessage error={errors.confirmPassword} />

          <button onClick={handleOnClick} className="py-3 mt-2 btn-flex">Register</button>
        </form>
      </section>
    </Main>
  )
}

export default Register