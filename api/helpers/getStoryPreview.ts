import { parseDate } from "@utils";
import { RawStoryDTO, StoryPreviewDTO } from "../dto";
import { fetcher, QueryResult } from "../fetcher";

export const getStoryPreview = async (
  data: number | string | RawStoryDTO
): Promise<StoryPreviewDTO> => {
  let storyResponse: QueryResult<RawStoryDTO> | undefined;

  if (typeof data === "string" || typeof data === "number") {
    storyResponse = await fetcher<RawStoryDTO>(`item/${data}.json`);

    if (!storyResponse.success || !storyResponse.data) {
      throw new Error(`Failed to fetch story with id: ${data}`);
    }
  }

  const story = (storyResponse ? storyResponse.data : data) as RawStoryDTO;

  return {
    id: story.id,
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
