import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import EmptySVG from "../../public/assets/images/empty.svg"
import Image from "next/image"

const META = <Meta title="Omar Dini | Page Not Found" description="Omar Dini's personal blog" />

const NotFound = () => (
  <Main meta={META}>
    <section className="grid items-center h-full text-center mt-lg mb-lg">
      <h1>404</h1>
      <p className="text-sm font-normal lg:text-lg mt-md">This page could not be found</p>
      <div className="mt-lg md:mt-[45px]">
        <Image src={EmptySVG.src} alt="Empty category" height="278" width="333" />
      </div>
    </section>
  </Main>
)

export default NotFound
