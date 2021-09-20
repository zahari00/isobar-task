import { StoryDTO } from "../dto";
import { dummyDescription } from "../../template";
import { query } from "./query";
import { parseDate } from "@utils";

export const getStory = async (storyId: number): Promise<Story> => {
  const storyResponse = await query<StoryDTO>(`item/${storyId}.json`);

  if (!storyResponse.success || !storyResponse.data) {
    throw new Error(`Failed to fetch story with id: ${storyId}`);
  }

  const story = storyResponse.data;

  return {
    author: {
      name: story.by,
      image: "avatar.jpeg",
    },
    title: story.title,
    description: dummyDescription,
    comments: story.kids,
    id: storyId,
    date: parseDate(story.time),
  };
};

export interface Story {
  author: {
    name: string;
    image: string;
  };
  description: string;
  title: string;
  date: string;
  id: number;
  comments: number[];
}
