import useSWR from "swr";
import { CommentDTO } from "../dto";

export const useStoryComments = async (
  commentIds: number[] | string[],
  isDisabled = false
) => {
  return useSWR<CommentDTO[]>(
    isDisabled
      ? `${process.env.host}/api/comments?comments=${commentIds.join(",")}`
      : null
  );
};
