import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("req", req);
  return res.status(200).json({ message: "test" });
};
