import { parseDate } from "@utils";
import { AuthorDTO, RawAuthorDTO } from "../dto";
import { fetcher } from "../fetcher";

export const getAuthor = async (id: string): Promise<AuthorDTO> => {
  let res = await fetcher<RawAuthorDTO>(`user/${id}.json`);

  if (!res.success || !res.data) {
    throw new Error(`Failed to fetch user with id: ${id}`);
  }

  const author = res.data;

  return {
    username: author.id,
    image: "demo-image-1.jpg",
    about: author.about,
    score: author.karma,
    joinedAt: parseDate(author.created),
  };
};
