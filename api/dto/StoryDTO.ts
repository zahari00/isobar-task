import { AuthorDTO } from "./AuthorDTO";

export interface StoryDTO {
  author: AuthorDTO;
  title: string;
  date: string;
  image: string;
  score: number;
  url: string;
  id: number;
  comments: number[];
  isLoading?: boolean
}

export interface RawStoryDTO {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
  type: 'story';
}
