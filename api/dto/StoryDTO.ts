export interface StoryDTO {
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

export interface StoryPreviewDTO {
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
