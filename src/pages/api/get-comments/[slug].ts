import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  console.log("getting comments...", slug);
  res.status(200).json({
    message: "good",
  });
};
