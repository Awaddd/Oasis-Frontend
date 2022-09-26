import { FC, useState } from "react";
import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Login</h1>
        <form className="form form-margins">
          <fieldset className="fieldset">
            <label className="label">Email </label>
            <input type="email" name="email" value={email} onChange={handleEmailOnChange} className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Password </label>
            <input type="password" name="password" value={password} onChange={handlePasswordOnChange} className="input" />
          </fieldset>
        </form>
      </section>
    </Main>
  )
}

export default Login