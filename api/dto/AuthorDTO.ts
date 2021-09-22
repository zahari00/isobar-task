export interface AuthorDTO {
  username: string;
  score: number;
  joinedAt: string;
  about: string;
  image: string;
  isLoading?: boolean;
}

export interface RawAuthorDTO {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
  type: "user";
}
