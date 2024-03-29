import type { NextApiRequest, NextApiResponse } from "next"

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void
}

export default async (_: NextApiRequest, res: ApiResponse) => {
  try {
    await res.unstable_revalidate("/")
    await res.unstable_revalidate("/author")
    await res.unstable_revalidate("/books")
    await res.unstable_revalidate("/articles")
    await res.unstable_revalidate("/reviews")
    await res.unstable_revalidate("/journals")
    await res.unstable_revalidate("/stories")
    await res.unstable_revalidate("/other")

    return res.status(200).json({ revalidated: true })
  } catch (err) {
    return res.status(500).json({ message: "Error validating" })
  }
}
