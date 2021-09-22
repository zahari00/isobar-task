import { getImage, parseDate } from "@utils";
import { RawStoryDTO, StoryDTO } from "../dto";
import { fetcher } from "../fetcher";
import { getAuthor } from "./getAuthor";

export const getStory = async (id: number | string): Promise<StoryDTO> => {
  let storyResponse = await fetcher<RawStoryDTO>(`item/${id}.json`);

  if (!storyResponse.success || storyResponse.data?.type !== "story") {
    throw new Error(`Failed to fetch story with id: ${id}`);
  }

  const story = storyResponse.data;

  const image = getImage(id);

  return {
    id: story.id,
    author: await getAuthor(story.by, image),
    image,
    title: story.title,
    url: story.url,
    date: parseDate(story.time),
    score: story.score,
    comments: story.kids || [],
  };
};
