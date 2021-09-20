import { query } from "./query";
import { getStoryPreview } from "./getStoryPreview";
import { getRandomNumber } from "@utils";

export const getRandomStories = async (storiesCount: number) => {
  const storyIdsResponse = await query<number[]>("topstories.json");

  if (!storyIdsResponse.data || !storyIdsResponse.success) {
    throw new Error("Failed to fetch stories");
  }

  const number = getRandomNumber(storyIdsResponse.data.length - storiesCount);

  const storiesToFetch = storyIdsResponse.data.slice(number, number + 10);

  return await Promise.all(storiesToFetch.map((id) => getStoryPreview(id)));
};
