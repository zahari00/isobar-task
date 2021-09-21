import { getComment } from "@api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const commentIds = req.query.comments;

  if (!commentIds || typeof commentIds !== 'string') {
    res.status(412).json({
      error: 'Comments cannot be empty'
    });
    return;
  }

  const comments = await Promise.all(
    commentIds.split(",").map((id: string) => getComment(+id))
  );

  res.status(200).json(comments);
  res.end();
}
