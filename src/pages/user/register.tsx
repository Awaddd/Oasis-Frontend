import { FC } from "react";
import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Register: FC = () => {
  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg 2xl:w-9/12 md:mx-auto">
        <h1 className="text-center">Register</h1>
      </section>
    </Main>
  )
}

export default Register