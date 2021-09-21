import { parseDate } from "@utils";
import { RawCommentDTO, CommentDTO } from "../dto";
import { fetcher, QueryResult } from "../fetcher";

export const getComment = async (
  data: number | number | RawCommentDTO
): Promise<CommentDTO> => {
  let commentResponse: QueryResult<RawCommentDTO> | undefined;

  if (typeof data === "number" || typeof data === "string") {
    commentResponse = await fetcher<RawCommentDTO>(`item/${data}.json`);

    if (!commentResponse.success || !commentResponse.data) {
      throw new Error(`Failed to fetch story with id: ${data}`);
    }
  }

  const comment = (
    commentResponse ? commentResponse.data : data
  ) as RawCommentDTO;

  // Some Comments are without author or text (we don't need them)
  if (!comment.by || !comment.text?.trim()) return null;

  return {
    id: comment.id,
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
