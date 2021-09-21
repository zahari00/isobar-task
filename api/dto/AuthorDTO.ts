export interface RawAuthorDTO {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
  type: "user";
}

export interface AuthorDTO {
  name: string;
  score: number;
  joinedAt: string;
  about: string;
  submitted: string[];
  image: string;
}
