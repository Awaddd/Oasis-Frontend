import type { NextApiRequest, NextApiResponse } from "next";

type ApiResponse = NextApiResponse & {
  unstable_revalidate: (path: string) => void;
};

export default async (req: NextApiRequest, res: ApiResponse) => {
  console.log("req", req);

  try {
    await res.unstable_revalidate("/books");
    await res.unstable_revalidate("/book/");

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error validating" });
  }
};
