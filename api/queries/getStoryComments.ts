import { Comment, getComment } from "./getComment";

export const getStoryComments = async (
  rootComments: number[]
): Promise<Comment[]> => {
  return await Promise.all(rootComments.map(getComment));
};
