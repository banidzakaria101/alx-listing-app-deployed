import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<PropertyProps | { error: string }>) {
  const { id } = req.query;
  const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);
  
  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
