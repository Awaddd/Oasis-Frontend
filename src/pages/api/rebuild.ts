import type { NextApiRequest, NextApiResponse } from "next";

export default (_: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ message: "test" });
};
