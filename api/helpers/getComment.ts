import { parseDate } from "@utils";
import { CommentDTO } from "../dto";
import { fetcher } from "../fetcher";

export const getComment = async (
  id: number,
): Promise<Comment> => {
  const commentResponse = await fetcher<CommentDTO>(`item/${id}.json`);

  if (!commentResponse.success || !commentResponse.data) {
    throw new Error(`Failed to fetch story with id: ${id}`);
  }

  const comment = commentResponse.data;

  // Some Comments are without author or text (we don't need them)
  if (!comment.by || !comment.text?.trim()) return null;

  return {
    id,
    author: {
      name: comment.by,
      image: "avatar.jpeg",
    },
    content: comment.text,
    date: parseDate(comment.time),
    parent: comment.parent,
    children: comment.kids,
  };
};

export type Comment = {
  author: {
    name: string;
    image: string;
  };
  content: string;
  date: string;
  parent: number;
  id: number;
  children: number[];
} | null;
