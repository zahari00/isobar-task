export interface RawCommentDTO {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
}


export type CommentDTO = {
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