import { FC, useState } from "react";
import { Meta } from "../../layout/Meta";
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

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Register</h1>
        <form className="form form-margins">
          <fieldset className="fieldset">
            <label className="label">Email </label>
            <input type="email" name="email" value={email} onChange={handleEmailOnChange} className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">First name </label>
            <input type="text" name="firstName" value={firstName} onChange={handleFirstNameOnChange} className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Last name </label>
            <input type="text" name="lastName" value={lastName} onChange={handleLastNameOnChange} className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Password </label>
            <input type="password" name="password" value={password} onChange={handlePasswordOnChange} className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Confirm Password </label>
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordOnChange} className="input" />
          </fieldset>
        </form>
      </section>
    </Main>
  )
}

export default Register