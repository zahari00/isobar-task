import { parseDate } from "@utils";
import { RawStoryDTO, StoryPreviewDTO } from "../dto";
import { fetcher } from "../fetcher";

export const getStoryPreview = async (id: number): Promise<StoryPreviewDTO> => {
  const storyResponse = await fetcher<RawStoryDTO>(`item/${id}.json`);

  if (!storyResponse.success || !storyResponse.data) {
    throw new Error(`Failed to fetch story with id: ${id}`);
  }

  const story = storyResponse.data;

  return {
    id,
    author: {
      name: story.by,
      image: "avatar.jpeg",
    },
    image: "demo-image-1.jpg",
    title: story.title,
    date: parseDate(story.time),
    claps: story.score,
  };
};
