import { fetcher, getStoryPreview } from "@api";
import { getRandomNumber } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";

const storiesCount = 10

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const storyIdsResponse = await fetcher<number[]>("topstories.json");

  if (!storyIdsResponse.data || !storyIdsResponse.success) {
    throw new Error("Failed to fetch stories");
  }

  const number = getRandomNumber(storyIdsResponse.data.length - storiesCount);

  const storiesToFetch = storyIdsResponse.data.slice(
    number,
    number + storiesCount
  );

  const [highlight, ...stories] = await Promise.all([
    getStoryPreview(storyIdsResponse.data[0]),
    ...storiesToFetch.map((id) => getStoryPreview(id)),
  ]);

  res.status(200).json({
    stories,
    highlight,
  });
  res.end();
}
