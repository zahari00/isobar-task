import type { GetServerSidePropsContext } from "next";
import { useStoryComments } from "@api";
import { prefetchStory, useStory } from "@api";
import Link from "next/link";

const StoryPage = ({ id }: { id: string }) => {
  const { data: story } = useStory(id);

  const comments = useStoryComments(story?.comments || []);

  return (
    <div>
      {story?.title}
      <p>
        <Link href={`/${story?.author.name}/author`} passHref>
          <a>{story?.author.name}</a>
        </Link>
      </p>
    </div>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id as string;
  const fallback = await prefetchStory(id);

  console.log("fallback", fallback);

  return {
    props: {
      fallback,
      id,
    },
  };
};

export default StoryPage;
