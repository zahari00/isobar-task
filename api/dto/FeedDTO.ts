import { CommentDTO, StoryDTO } from "@api";

export type FeedItemDTO =
  | {
      data: StoryDTO;
      type: "story";
    }
  | {
      data: CommentDTO;
      type: "comment";
    };
