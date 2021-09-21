import type { GetServerSidePropsContext } from "next";
import { prefetchAuthor, useAuthor } from "api/queries/useAuthor";

const AuthorPage = ({ id }: { id: string }) => {
  const { data: author } = useAuthor(id);

  console.log("Author", author);

  return <h1>{author?.name}</h1>;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id as string;

  const fallback = await prefetchAuthor(id);

  return {
    props: {
      fallback,
      id,
    },
  };
};

export default AuthorPage;
