import { fetcher, getStory, HomepageDTO } from "@api";
import { getRandomNumber } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";

const topStoriesCount = 10

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const storyIdsResponse = await fetcher<number[]>("topstories.json");

  if (!storyIdsResponse.data || !storyIdsResponse.success) {
    throw new Error("Failed to fetch stories");
  }

  const number = getRandomNumber(
    storyIdsResponse.data.length - topStoriesCount
  );

  const highlightStory = getRandomNumber(
    storyIdsResponse.data.length - topStoriesCount
  );

  const topStoriesToFetch = storyIdsResponse.data.slice(
    number,
    number + topStoriesCount
  );

  const [highlight, ...topStories] = await Promise.all([
    getStory(storyIdsResponse.data[highlightStory]),
    ...topStoriesToFetch.map((id) => getStory(id)),
  ]);

  res.status(200).json({
    topStories: topStories.sort((a, b) => a.score - b.score),
    highlight,
  } as HomepageDTO);

  res.end();
}
