import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ids = req.query.comments;

  if (typeof ids !== "string") {
    res.status(412).json({
      error: "IDs cannot be empty",
    });
    return;
  }

  const items = await Promise.all(
    ids.split(",").map((id: string) => {
      // handle both comments and 
    })
  );

  res.status(200).json(items);
  res.end();
}
