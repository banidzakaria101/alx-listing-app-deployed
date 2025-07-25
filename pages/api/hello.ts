// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    res.status(200).json({ name: "John Doe" });
  } catch {
    res.status(500).json({ name: "Could not load property" });
  }
}

