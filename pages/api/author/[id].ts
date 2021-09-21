import { fetcher, RawAuthorDTO } from "@api";
import { parseDate } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const authorResponse = await fetcher<RawAuthorDTO>(`user/${id}.json`);

  if (!authorResponse.success) {
    res.status(500).json({
      error: `Failed to fetch user with id: ${id}`,
    });

    return;
  }

  const author = authorResponse.data;

  res.status(200).json({
    name: author.id,
    score: author.karma,
    joinedAt: parseDate(author.created),
    about: author.about,
    submitted: author.submitted,
    image: "avatar.jpeg",
  });
}
