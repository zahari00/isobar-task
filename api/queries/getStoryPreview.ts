import { parseDate } from "@utils";
import { StoryDTO } from "../dto";
import { query } from "./query";

export const getStoryPreview = async (id: number): Promise<StoryPreview> => {
  const storyResponse = await query<StoryDTO>(`item/${id}.json`);

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
    image: 'demo-image-1.jpg',
    title: story.title,
    date: parseDate(story.time),
    claps: story.score,
  };
};

export interface StoryPreview {
  author: {
    name: string;
    image: string;
  };
  image: string;
  title: string;
  date: string;
  claps: number;
  id: number;
}
