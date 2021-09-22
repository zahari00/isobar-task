import { fetcher, getComment, getStory } from "@api";
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

  const formatter: any = {
    comment: getComment,
    story: getStory,
  };

  const items = await Promise.all(
    ids.split(",").map(async (id: string) => {
      const response = await fetcher<any>(`item/${id}.json`);

      if (!response.data) return null;

      return await formatter[response.data?.type]?.(response.data);
    })
  );

  res.status(200).json(items);
  res.end();
}
