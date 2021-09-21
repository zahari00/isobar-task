import { fetcher, RawStoryDTO } from "@api";
import { parseDate } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";
import { dummyDescription } from "template";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const storyResponse = await fetcher<RawStoryDTO>(`item/${id}.json`);

  if (
    !storyResponse.success ||
    storyResponse.data?.type !== "story"
  ) {
    res.status(500).json({
      error: `Failed to fetch story with id: ${id}`,
    });

    return;
  }

  const story = storyResponse.data;

  res.status(200).json({
    author: {
      name: story.by,
      image: "avatar.jpeg",
    },
    title: story.title,
    description: dummyDescription,
    comments: story.kids,
    id,
    date: parseDate(story.time),
  });
}
